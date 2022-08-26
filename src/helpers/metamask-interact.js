import {createAlchemyWeb3} from '@alch/alchemy-web3';
import detectEthereumProvider from '@metamask/detect-provider';

import getConfig from 'next/config';

import contractABI from '../../public/contracts/LBSFragment.json';
import usdcContractABI from '../../public/contracts/USDC.json';

const {publicRuntimeConfig} = getConfig();

const lbsfContractAddress = publicRuntimeConfig.lbsfContractAddress;
const usdcContractAddress = publicRuntimeConfig.usdcContractAddress;
const web3ProviderURL = publicRuntimeConfig.web3ProviderURL;

export const getNFTImageByTokenId = async tokenId => {
  try {
    const web3 = createAlchemyWeb3(web3ProviderURL);

    const contract = new web3.eth.Contract(contractABI.abi, lbsfContractAddress);

    const uri = await contract.methods.uri(tokenId).call();

    const resp = await fetch(uri);

    if (!resp.ok) throw new Error(resp.statusText);

    const json = await resp.json();

    const image = json.image;

    return image;
  } catch (error) {
    console.log({error});
    return null;
  }
};

export const getNFTImage = async () => {
  try {
    const web3 = createAlchemyWeb3(web3ProviderURL);

    const contract = new web3.eth.Contract(contractABI.abi, lbsfContractAddress);

    const activeStage = await contract.methods.activeStage().call();

    const uri = await contract.methods.uri(activeStage).call();

    const resp = await fetch(uri);

    if (!resp.ok) throw new Error(resp.statusText);

    const json = await resp.json();

    const image = json.image;

    return image;
  } catch (error) {
    console.log({error});
    return null;
  }
};

export const getMintedNFTQty = async currentAddress => {
  const web3 = createAlchemyWeb3(web3ProviderURL);

  try {
    const provider = await detectEthereumProvider({timeout: 2000});
    if (provider) {
      const contract = new web3.eth.Contract(contractABI.abi, lbsfContractAddress);

      const activeStage = await contract.methods.activeStage().call();

      let mintedNFT = 0;

      mintedNFT = await contract.methods.balanceOf(currentAddress, activeStage).call();

      return mintedNFT;
    } else {
      console.log('please install metamask!');
    }
  } catch (error) {
    console.log({error});
  }
};

export const getTokenToMintedQty = async () => {
  const web3 = createAlchemyWeb3(web3ProviderURL);

  try {
    const contract = new web3.eth.Contract(contractABI.abi, lbsfContractAddress);

    const activeStage = await contract.methods.activeStage().call();
    const mintedQty = await contract.methods.tokenToMintedQty(activeStage).call();

    return mintedQty;
  } catch (error) {
    console.log({error});
    return null;
  }
};

export const getMaxSaleSupply = async () => {
  const web3 = createAlchemyWeb3(web3ProviderURL);

  try {
    const contract = new web3.eth.Contract(contractABI.abi, lbsfContractAddress);

    const activeStage = await contract.methods.activeStage().call();
    const maxSupply = await contract.methods.getMaxSaleSupply(activeStage).call();

    return maxSupply;
  } catch (error) {
    console.log({error});
    return null;
  }
};

export const getUSDCBalance = async currentAddress => {
  try {
    const web3 = createAlchemyWeb3(web3ProviderURL);

    const usdcContract = new web3.eth.Contract(usdcContractABI, usdcContractAddress);

    let balance = 0;

    balance = await usdcContract.methods.balanceOf(currentAddress).call();
    return balance;
  } catch (error) {
    console.log({error});
  }
};

export const getUSDCDecimals = async () => {
  const web3 = createAlchemyWeb3(web3ProviderURL);

  try {
    const usdcContract = new web3.eth.Contract(usdcContractABI, usdcContractAddress);

    const decimals = await usdcContract.methods.decimals().call();

    return decimals;
  } catch (error) {
    console.log({error});
  }
};

export const getActiveStage = async () => {
  const web3 = createAlchemyWeb3(web3ProviderURL);
  try {
    const contract = new web3.eth.Contract(contractABI.abi, lbsfContractAddress);

    const activeStage = await contract.methods.activeStage().call();

    return activeStage;
  } catch (error) {
    console.log({error});
    return null;
  }
};

export const getPrice = async () => {
  const web3 = createAlchemyWeb3(web3ProviderURL);

  try {
    const contract = new web3.eth.Contract(contractABI.abi, lbsfContractAddress);

    const activeStage = await contract.methods.activeStage().call();

    const price = await contract.methods.getPrice(web3.utils.toNumber(activeStage)).call();

    const decimals = await getUSDCDecimals();

    return price / 10 ** decimals;
  } catch (error) {
    console.log({error});
    return null;
  }
};

export const checkAllowanceUSDC = async () => {
  if (window.ethereum) {
    const web3 = createAlchemyWeb3(web3ProviderURL);
    try {
      const usdcContract = new web3.eth.Contract(usdcContractABI, usdcContractAddress);

      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      let allowance = 0;

      if (addressArray.length > 0) {
        const currentAccount = addressArray[0];

        const transactionParameters = {
          owner: currentAccount,
          spender: lbsfContractAddress,
        };

        allowance = await usdcContract.methods
          .allowance(transactionParameters.owner, transactionParameters.spender)
          .call();

        const usdcDecimals = await usdcContract.methods.decimals().call();

        return web3.utils.toNumber(allowance / 10 ** usdcDecimals);
      }

      return allowance;
    } catch (error) {
      console.log({error});
    }
  }
};

export const approveUSDC = async amount => {
  const web3 = createAlchemyWeb3(web3ProviderURL);
  try {
    const usdcContract = new web3.eth.Contract(usdcContractABI, usdcContractAddress);

    const provider = await detectEthereumProvider({timeout: 2000});

    if (provider) {
      const currentAccount = await window.ethereum.selectedAddress;

      const decimals = await getUSDCDecimals();

      let isSuccess = false;

      await usdcContract.methods
        .approve(lbsfContractAddress, web3.utils.toBN(amount * 10 ** decimals))
        .send({from: currentAccount})
        .on('confirmation', (confirmationNumber, receipt) => {
          if (confirmationNumber === 0) {
            isSuccess = receipt.status;
          }
        })
        .on('error', error => {
          console.log({error});
          return false;
        });

      return isSuccess;
    } else {
      console.log('please install metamask!');
    }
  } catch (error) {
    console.log({error});
    return false;
  }
};

export const connectWallet = async () => {
  let address = '';
  try {
    const provider = await detectEthereumProvider({timeout: 2000});

    if (provider) {
      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      address = addressArray[0];
    } else {
      console.log('please install metamask!');
    }
  } catch (err) {
    console.log({err});
  }
  return address;
};

export const createSignature = async ({nonce, address}) => {
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

export const getCurrentWalletConnected = async () => {
  const respObj = {
    address: '',
    status: '',
  };

  try {
    const provider = await detectEthereumProvider({timeout: 2000});

    if (provider) {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      });
      if (addressArray.length > 0) {
        respObj.address = addressArray[0];
        respObj.status = '🦊 Metamask connected.';
      } else {
        respObj.address = '';
        respObj.status = '🦊 Connect to Metamask using the top right button.';
      }
      return respObj;
    } else {
      console.log('please install metamask');
    }
  } catch (err) {
    respObj.address = '';
    respObj.status = '😥 an error occured';

    return respObj;
  }
};

export const addWalletListener = () => {
  let currentAccount = '';
  if (window.ethereum) {
    window.ethereum.on('accountsChanged', accounts => {
      if (accounts.length > 0) {
        window.currentAccount = accounts[0];
        currentAccount = accounts[0];
        return currentAccount;
      } else {
        return currentAccount;
      }
    });
  } else {
    console.log('please install metamask!');
  }
};
