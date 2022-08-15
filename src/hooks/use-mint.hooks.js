import {createAlchemyWeb3} from '@alch/alchemy-web3';
import detectEthereumProvider from '@metamask/detect-provider';

import {useState} from 'react';

import contractABI from '../../public/contracts/LBSFragment.json';

import {
  addWalletListener,
  getCurrentWalletConnected,
  connectWallet,
  approveUSDC,
  checkAllowanceUSDC,
  getPrice,
  getActiveStage,
  getUSDCDecimals,
  getUSDCBalance,
  getMaxSaleSupply,
  getTokenToMintedQty,
  getMintedNFTQty,
  getNFTImage,
} from 'src/helpers/metamask-interact';
import {mintNFTWithRefCode} from 'src/lib/api/referral';
import useStore from 'src/store';

const contractAddress = process.env.NEXT_PUBLIC_LBSF_CONTRACT_ADDRESS;
const usdcContractAddress = process.env.NEXT_PUBLIC_USDC_CONTRACT_ADDRESS;
const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_URL;

const useMintHook = () => {
  //TODO: move some of the states to store level
  const [loading, setLoading] = useState(false);
  const [minting, setMinting] = useState(false);
  const [isMintSuccess, setIsMintSuccess] = useState(false);
  const [isUSDCApproved, setIsUSDCApproved] = useState(false);
  const [allowance, setAllowance] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const [maxSupply, setMaxSupply] = useState(0);
  const [image, setImage] = useState('');
  const [price, setPrice] = useState(0);
  const [usdcDecimals, setDecimals] = useState(0);
  const [balance, setBalance] = useState(0);
  const [mintedQty, setMintedQty] = useState(0);
  const [mintedNFT, setMintedNFT] = useState(0);

  const currentWallet = useStore(state => state.currentWallet);
  const updateWallet = useStore(state => state.updateWallet);

  const fetchCurrentWallet = async () => {
    setLoading(true);

    try {
      if (currentWallet === '') {
        const respObj = await getCurrentWalletConnected();
        const {address} = respObj;
        updateWallet(address);
      }
    } catch (error) {
      console.log({error});
    } finally {
      setLoading(false);
    }
  };

  const linkWallet = async () => {
    setLoading(true);

    try {
      const address = await connectWallet();

      updateWallet(address);
    } catch (error) {
      console.log({error});
    } finally {
      setLoading(false);
    }
  };

  const listenToWalletChanges = () => {
    const account = addWalletListener();

    updateWallet(account);
  };

  const fetchNFTImage = async () => {
    setLoading(true);

    try {
      const image = await getNFTImage();

      setImage(image);
    } catch (error) {
      console.log({error});
    } finally {
      setLoading(false);
    }
  };

  const fetchMintedByUserQty = async currentAddress => {
    setLoading(true);

    let tempAddress = '';

    if (currentWallet.length > 0) {
      tempAddress = currentWallet;
    } else {
      tempAddress = currentAddress;
    }

    try {
      const mintedNFT = await getMintedNFTQty(tempAddress);
      setMintedNFT(mintedNFT);
    } catch (error) {
      console.log({error});
    } finally {
      setLoading(false);
    }
  };

  const fetchMintedQty = async () => {
    setLoading(true);

    try {
      const mintedQty = await getTokenToMintedQty();

      setMintedQty(mintedQty);
    } catch (error) {
      console.log({error});
    } finally {
      setLoading(false);
    }
  };

  const fetchMaxSupply = async () => {
    try {
      setLoading(true);

      const maxSupply = await getMaxSaleSupply();
      setMaxSupply(maxSupply);
    } catch (error) {
      console.log({error});
    } finally {
      setLoading(false);
    }
  };

  const fetchBalance = async address => {
    setLoading(true);

    try {
      const decimals = await getUSDCDecimals();
      const balance = await getUSDCBalance(address);

      setBalance(balance / 10 ** decimals);
    } catch (error) {
      console.log({error});
    } finally {
      setLoading(false);
    }
  };

  const fetchDecimals = async () => {
    try {
      const decimals = await getUSDCDecimals();

      setDecimals(decimals);
    } catch (error) {
      console.log({error});
    } finally {
      setLoading(false);
    }
  };

  const fetchActiveStage = async () => {
    setLoading(true);

    try {
      const activeStage = await getActiveStage();

      setActiveStage(activeStage);
    } catch (error) {
      console.log({error});
    } finally {
      setLoading(false);
    }
  };

  const fetchPrice = async () => {
    setLoading(true);

    try {
      const activeStage = await getActiveStage();
      const price = await getPrice(activeStage);

      setPrice(price);
    } catch (error) {
      console.log({error});
    } finally {
      setLoading(false);
    }
  };

  const verifyAllowance = async () => {
    setLoading(true);

    try {
      const allowance = await checkAllowanceUSDC();
      setAllowance(allowance);
    } catch (error) {
      console.log({error});
    } finally {
      setLoading(false);
    }
  };

  const allowUSDC = async amount => {
    setLoading(true);

    try {
      const isSuccess = await approveUSDC(amount);

      const allowance = await checkAllowanceUSDC();
      setAllowance(allowance);

      setIsUSDCApproved(isSuccess);
    } catch (error) {
      console.log({error});
    } finally {
      setLoading(false);
    }
  };

  const mintNFT = async (quantity, referralCode = '') => {
    const web3 = createAlchemyWeb3(alchemyKey);

    const contract = new web3.eth.Contract(contractABI.abi, contractAddress);

    window.contract = new web3.eth.Contract(contractABI.abi, contractAddress);

    setMinting(true);

    try {
      const provider = await detectEthereumProvider({timeout: 2000});

      if (provider) {
        const addressArray = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });

        if (addressArray.length === 0) throw Error('Please connect an account!');

        const currentAccount = addressArray[0];

        const tokenId = await contract.methods.activeStage().call();

        const transactionParameters = {
          to: contractAddress,
          from: currentAccount,
          data: window.contract.methods.mint(tokenId, quantity, '0x00').encodeABI(),
        };

        const txHash = await web3.eth
          .sendTransaction(transactionParameters)

          .on('confirmation', (confNumber, receipt) => {
            const {status} = receipt;
            if (status) {
              setMinting(false);
              setAllowance(0);
            }
          })

          .on('error', console.error);

        if (txHash) {
          const {blockHash} = txHash;

          const data = await mintNFTWithRefCode({
            id: blockHash,
            projectId: 'lima-beach-signature',
            nftId: contractAddress,
            walletAddress: currentAccount,
            tokenId,
            quantity,
            currencyId: usdcContractAddress,
            amount: quantity,
            referralCode,
          });

          if (data) {
            return data;
          } else {
            throw new Error('minting data not logged!');
          }
        } else {
          console.log('refCode not recorded!');
        }
      } else {
        console.log('please install metamask!');
      }
    } catch (error) {
      console.log({error});
    } finally {
      setMinting(false);
    }
  };

  const signWallet = async (nonce, address) => {
    try {
      const msgHash = `0x${Buffer.from(nonce, 'utf8').toString('hex')}`;

      const provider = await detectEthereumProvider({timeout: 2000});

      if (provider) {
        const msg = await window.ethereum.request({
          method: 'personal_sign',
          params: [msgHash, address, ''],
        });

        return msg;
      } else {
        console.log('please install metamask!');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return {
    loading,
    fetchCurrentWallet,
    listenToWalletChanges,
    linkWallet,
    mintNFT,
    minting,
    isMintSuccess,
    allowUSDC,
    isUSDCApproved,
    verifyAllowance,
    allowance,
    fetchPrice,
    price,
    fetchActiveStage,
    activeStage,
    fetchDecimals,
    usdcDecimals,
    fetchBalance,
    balance,
    fetchMaxSupply,
    maxSupply,
    fetchMintedQty,
    mintedQty,
    fetchMintedByUserQty,
    mintedNFT,
    fetchNFTImage,
    image,
    signWallet,
  };
};

export default useMintHook;
