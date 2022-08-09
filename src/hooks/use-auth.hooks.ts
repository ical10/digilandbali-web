import {useState, useEffect} from 'react';

import Cookies from 'js-cookie';
import {getChallengeAndSignIn} from 'src/lib/api/auth';

const useAuthHook = () => {
  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('access_token');
      const user = Cookies.get('user');
      if (token) {
        setUser(user);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }
    loadUserFromCookies();
  }, []);

  const [currentUser, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const login = async (user: string) => {
    const token = await getChallengeAndSignIn(user);

    if (token) {
      Cookies.set('access_token', token);
      Cookies.set('user', JSON.stringify(user));
      setUser(user);
    }
  };

  const logout = () => {
    Cookies.remove('access_token');
    setUser('');
  };

  return {
    isAuthenticated: !!currentUser,
    currentUser,
    isLoading,
    login,
    logout,
  };
};

export default useAuthHook;
