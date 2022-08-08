import {useState} from 'react';

import FooterComponent from './FooterComponent';
import NavbarComponent from './NavbarComponent';

const Layout = ({children}) => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  return (
    <div>
      <div className="blurTop"></div>
      <NavbarComponent isOpenNav={setIsOpenNavbar} />
      <div className={`content ${isOpenNavbar ? 'overflow-hidden' : ''}`}>
        {children}

        <FooterComponent />
      </div>
    </div>
  );
};

export default Layout;
