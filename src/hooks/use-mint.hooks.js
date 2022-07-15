import React, {useState} from 'react';

import {
  approveUSDC,
  checkAllowanceUSDC,
  getPrice,
  getActiveStage,
  getUSDCDecimals,
  getUSDCBalance,
  getMaxSaleSupply,
  getTokenToMintedQty,
  getMintedNFTQty,
  getURI,
} from 'src/helpers/metamask-interact';

const useMintHook = () => {
  const [loading, setLoading] = useState(false);
  const [isUSDCApproved, setIsUSDCApproved] = useState(false);
  const [allowance, setAllowance] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const [maxSupply, setMaxSupply] = useState(0);
  const [uriJson, setUriJson] = useState({
    name: '',
    description: '',
    image: '',
    external_link: '',
  });
  const [price, setPrice] = useState(0);
  const [usdcDecimals, setDecimals] = useState(0);
  const [balance, setBalance] = useState(0);
  const [mintedQty, setMintedQty] = useState(0);
  const [mintedNFT, setMintedNFT] = useState(0);

  const fetchMintedByUserQty = async () => {
    setLoading(true);

    try {
      const mintedNFT = await getMintedNFTQty();
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

  const fetchBalance = async () => {
    setLoading(true);

    try {
      const decimals = await getUSDCDecimals();
      const balance = await getUSDCBalance();

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

  return {
    loading,
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
  };
};

export default useMintHook;
