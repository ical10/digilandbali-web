import React, {useState} from 'react';

import {
  approveUSDC,
  checkAllowanceUSDC,
  getPrice,
  getActiveStage,
  getUSDCDecimals,
} from 'src/helpers/metamask-interact';

const useMintHook = () => {
  const [loading, setLoading] = useState(false);
  const [isUSDCApproved, setIsUSDCApproved] = useState(false);
  const [allowance, setAllowance] = useState(0);
  const [price, setPrice] = useState(0);
  const [usdcDecimals, setDecimals] = useState(0);

  const editAllowance = () => {
    setIsUSDCApproved(!isUSDCApproved);
  };

  const fetchDecimals = async () => {
    try {
      const decimals = await getUSDCDecimals();

      setDecimals(decimals);
    } catch (error) {
      console.log({error});
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
    editAllowance,
    verifyAllowance,
    allowance,
    fetchPrice,
    price,
    fetchDecimals,
    usdcDecimals,
  };
};

export default useMintHook;
