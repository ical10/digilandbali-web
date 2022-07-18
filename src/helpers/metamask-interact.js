const {createAlchemyWeb3} = require('@alch/alchemy-web3');

const contractABI = require('../../public/contracts/LBSFragment.json');
const usdcContractABI = require('../../public/contracts/USDC.json');
const contractAddress = process.env.NEXT_PUBLIC_LBSF_CONTRACT_ADDRESS;
const usdcContractAddress = process.env.NEXT_PUBLIC_USDC_CONTRACT_ADDRESS;

export const getNFTImage = async () => {
  try {
    const alchemyKey = process.env.NEXT_PUBLIC_REACT_APP_ALCHEMY_KEY;
    const web3 = createAlchemyWeb3(alchemyKey);

    const contract = new web3.eth.Contract(contractABI.abi, contractAddress);

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

export const getMintedNFTQty = async () => {
  if (window.ethereum) {
    const alchemyKey = process.env.NEXT_PUBLIC_REACT_APP_ALCHEMY_KEY;

    const web3 = createAlchemyWeb3(alchemyKey);

    try {
      const contract = new web3.eth.Contract(contractABI.abi, contractAddress);

      const activeStage = await contract.methods.activeStage().call();
      const currentAccount = await window.ethereum.selectedAddress;

      const mintedNFT = await contract.methods.balanceOf(currentAccount, activeStage).call();

      return mintedNFT;
    } catch (error) {
      console.log({error});
    }
  } else {
    return {
      address: '',
      status: 'please install metamask',
    };
  }
};

export const getTokenToMintedQty = async () => {
  const alchemyKey = process.env.NEXT_PUBLIC_REACT_APP_ALCHEMY_KEY;
  const web3 = createAlchemyWeb3(alchemyKey);

  try {
    const contract = new web3.eth.Contract(contractABI.abi, contractAddress);

    const activeStage = await contract.methods.activeStage().call();
    const mintedQty = await contract.methods.tokenToMintedQty(activeStage).call();

    return mintedQty;
  } catch (error) {
    console.log({error});
    return null;
  }
};

export const getMaxSaleSupply = async () => {
  const alchemyKey = process.env.NEXT_PUBLIC_REACT_APP_ALCHEMY_KEY;
  const web3 = createAlchemyWeb3(alchemyKey);

  try {
    const contract = new web3.eth.Contract(contractABI.abi, contractAddress);

    const activeStage = await contract.methods.activeStage().call();
    const maxSupply = await contract.methods.getMaxSaleSupply(activeStage).call();

    return maxSupply;
  } catch (error) {
    console.log({error});
    return null;
  }
};

export const getUSDCBalance = async () => {
  if (window.ethereum) {
    try {
      const alchemyKey = process.env.NEXT_PUBLIC_REACT_APP_ALCHEMY_KEY;

      const web3 = createAlchemyWeb3(alchemyKey);

      const usdcContract = new web3.eth.Contract(usdcContractABI, usdcContractAddress);

      const currentAccount = await window.ethereum.selectedAddress;

      const balance = await usdcContract.methods.balanceOf(currentAccount).call();
      return balance;
    } catch (error) {
      console.log({error});
    }
  } else {
    return {
      address: '',
      status: 'please install metamask',
    };
  }
};

export const getUSDCDecimals = async () => {
  const alchemyKey = process.env.NEXT_PUBLIC_REACT_APP_ALCHEMY_KEY;
  const web3 = createAlchemyWeb3(alchemyKey);

  try {
    const usdcContract = new web3.eth.Contract(usdcContractABI, usdcContractAddress);

    const decimals = await usdcContract.methods.decimals().call();

    return decimals;
  } catch (error) {
    console.log({error});
  }
};

export const getActiveStage = async () => {
  const alchemyKey = process.env.NEXT_PUBLIC_REACT_APP_ALCHEMY_KEY;
  const web3 = createAlchemyWeb3(alchemyKey);
  try {
    const contract = new web3.eth.Contract(contractABI.abi, contractAddress);

    const activeStage = await contract.methods.activeStage().call();

    return activeStage;
  } catch (error) {
    console.log({error});
    return null;
  }
};

export const getPrice = async () => {
  const alchemyKey = process.env.NEXT_PUBLIC_REACT_APP_ALCHEMY_KEY;
  const web3 = createAlchemyWeb3(alchemyKey);

  try {
    const contract = new web3.eth.Contract(contractABI.abi, contractAddress);

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
    const alchemyKey = process.env.NEXT_PUBLIC_REACT_APP_ALCHEMY_KEY;
    const web3 = createAlchemyWeb3(alchemyKey);
    try {
      const usdcContract = await new web3.eth.Contract(usdcContractABI, usdcContractAddress);
      const currentAccount = await window.ethereum.selectedAddress;

      const transactionParameters = {
        owner: currentAccount,
        spender: contractAddress,
      };

      const allowance = await usdcContract.methods
        .allowance(transactionParameters.owner, transactionParameters.spender)
        .call();

      const usdcDecimals = await usdcContract.methods.decimals().call();

      return web3.utils.toNumber(allowance / 10 ** usdcDecimals);
    } catch (error) {
      console.log({error});
    }
  } else {
    return {
      address: '',
      status: 'please install metamask',
    };
  }
};

export const approveUSDC = async amount => {
  if (window.ethereum) {
    const alchemyKey = process.env.NEXT_PUBLIC_REACT_APP_ALCHEMY_KEY;
    const web3 = createAlchemyWeb3(alchemyKey);
    try {
      const usdcContract = await new web3.eth.Contract(usdcContractABI, usdcContractAddress);

      const currentAccount = await window.ethereum.selectedAddress;

      const decimals = await getUSDCDecimals();

      let isSuccess = false;

      await usdcContract.methods
        .approve(contractAddress, web3.utils.toBN(amount * 10 ** decimals))
        .send({from: currentAccount})
        .on('confirmation', (confirmationNumber, receipt) => {
          if (confirmationNumber === 0) {
            isSuccess = receipt.status;
          }
        })
        .on('error', console.error);

      return isSuccess;
    } catch (error) {
      console.log({error});
      return false;
    }
  } else {
    return {
      address: '',
      status: 'please install metamask',
    };
  }
};

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const obj = {
        status: '🦊 Metamask connected.',
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        status: 'an error occured',
        address: '',
      };
    }
  } else {
    return {
      address: '',
      status: 'please install metamask',
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: '🦊 Metamask connected.',
        };
      } else {
        return {
          address: '',
          status: '🦊 Connect to Metamask using the top right button.',
        };
      }
    } catch (err) {
      return {
        address: '',
        status: '😥 an error occured',
      };
    }
  } else {
    return {
      address: '',
      status: 'please install metamask',
    };
  }
};

export const mintDigilandNFT = async quantity => {
  const alchemyKey = process.env.NEXT_PUBLIC_REACT_APP_ALCHEMY_KEY;
  const web3 = createAlchemyWeb3(alchemyKey);

  const tokenId = 1; // Active stage

  //load smart contract
  window.contract = await new web3.eth.Contract(contractABI.abi, contractAddress); //loadContract();

  const currentAccount = await window.ethereum.selectedAddress;

  //set up your Ethereum transaction
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: currentAccount, // must match user's active address.
    data: window.contract.methods.mint(tokenId, quantity, '0x00').encodeABI(), //make call to NFT smart contract
  };

  //sign transaction via Metamask
  try {
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
    return {
      success: true,
      status: (
        <a href={`https://rinkeby.etherscan.io/tx/${txHash}`}>
          ✅ Check out your transaction on Etherscan: https://rinkeby.etherscan.io/tx/${txHash}
        </a>
      ),
    };
  } catch (error) {
    return {
      success: false,
      status: '😥 Something went wrong: ' + error.message,
    };
  }
};
