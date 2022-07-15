import {useState, useEffect} from 'react';

import {connectWallet, getCurrentWalletConnected} from '../helpers/metamask-interact';
import FooterComponent from './FooterComponent';
import NavbarComponent from './NavbarComponent';

const Layout = ({children}) => {
  const [walletAddress, setWallet] = useState('');
  const [status, setStatus] = useState('');
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  const fetchCurrentWallet = async () => {
    const {address, status} = await getCurrentWalletConnected();
    return {address, status};
  };

  const addWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', accounts => {
        if (accounts.length > 0) {
          window.currentAccount = accounts[0];
          setWallet(accounts[0]);
          setStatus('👆🏽 write a message in the text-field above.');
        } else {
          setWallet('');
          setStatus('🦊 connect to metamask using the top right button.');
        }
      });
    } else {
      setStatus(
        <p>
          {' '}
          🦊{' '}
          <a target="_blank" rel="noopener noreferrer" href={`https://metamask.io/download.html`}>
            you must install metamask, a virtual ethereum wallet, in your browser.
          </a>
        </p>,
      );
    }
  };

  useEffect(() => {
    (async () => {
      const {address, status} = await fetchCurrentWallet();
      setWallet(address);
      setStatus(status);

      addWalletListener();
    })();
  }, []);

  const handleConnect = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
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
