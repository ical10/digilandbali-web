import {useState} from 'react';

import {allowUSDC} from 'src/helpers/metamask-interact';

export const useWeb3 = () => {
  const [loading, setLoading] = useState(false);

  const approveUSDC = async amount => {
    try {
      const isApproved = await allowUSDC(amount);
      return isApproved;
    } catch (error) {
      console.log({error});
    }
  };

  return {
    loading,
    approveUSDC,
  };
};
