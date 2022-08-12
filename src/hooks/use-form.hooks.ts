import {useState} from 'react';

import {checkRefCode} from 'src/lib/api/referral';

const useFormHook = () => {
  const [isValid, setValid] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const verifyRefCode = async (code: string) => {
    setLoading(true);

    try {
      const data = await checkRefCode(code);

      //TODO: need API endpoint to check refCode validity!
      if (data === '') {
        setValid(true);
        return true;
      } else {
        setValid(false);
        return false;
      }
    } catch (error) {
      console.log({error});
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    verifyRefCode,
    isValid,
    isLoading,
  };
};

export default useFormHook;
