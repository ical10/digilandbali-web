import {useState, useEffect} from 'react';

import {connectWallet, getCurrentWalletConnected} from '../helpers/metamask-interact';
import FooterComponent from './FooterComponent';
import NavbarComponent from './NavbarComponent';

import useMintHook from 'src/hooks/use-mint.hooks';

const Layout = ({children}) => {
  const {fetchCurrentWallet, listenToWalletChanges} = useMintHook();

  const [walletAddress, setWallet] = useState('');
  const [status, setStatus] = useState('');
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  useEffect(() => {
    listenToWalletChanges();
    fetchCurrentWallet();
  }, []);

  const handleConnect = async () => {
    const {status, address} = await connectWallet();
    setStatus(status);
    setWallet(address);
  };

  return (
    <div>
      <div className="blurTop"></div>
      <NavbarComponent
        onConnect={handleConnect}
        walletAddress={walletAddress}
        isOpenNav={setIsOpenNavbar}
      />
      <div className={`content ${isOpenNavbar ? 'overflow-hidden' : ''}`}>
        {children}

        <FooterComponent />
      </div>
    </div>
  );
};

export default Layout;
