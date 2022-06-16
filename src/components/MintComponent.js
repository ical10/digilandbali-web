import {useState} from 'react';

import {mintDigilandNFT} from '../helpers/metamask-interact';
import ContentComponent from './ContentComponent';

const MintComponent = ({walletaddress}) => {
  //State for forms
  const [referralCode, setReferralCode] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [mintedQuantity, setMintedQuantity] = useState(0);

  const [mintStatus, setMintStatus] = useState('');

  //Constant state
  const [maxQuantity] = useState(80);

  const handleMintPressed = async () => {
    if (quantity <= maxQuantity - mintedQuantity) {
      //call metamask here to mint
      console.log(`minted ${quantity} NFTs!`);
      let tempMinted = mintedQuantity + quantity;
      setMintedQuantity(tempMinted);

      const {status} = await mintDigilandNFT(quantity);
      setMintStatus(status);
    }
  };

  const handleDecrement = () => {
    if (quantity !== 0) {
      let decreasedQuantity = quantity - 1;
      setQuantity(decreasedQuantity);
    }
  };

  const handleIncrement = () => {
    let increasedQuantity = quantity + 1;
    setQuantity(increasedQuantity);
  };

  const handleChangeQuantity = e => {
    setQuantity(Number(e.target.value));
  };

  const handleChangeReferralCode = e => {
    setReferralCode(e.target.value);
  };

  return (
    <>
      <div>
        <ContentComponent
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onChangeReferralCode={handleChangeReferralCode}
          referralCode={referralCode}
          onChangeQuantity={handleChangeQuantity}
          quantity={quantity}
          mintedQuantity={mintedQuantity}
          maxQuantity={maxQuantity}
          walletAddress={walletAddress}
          mintStatus={mintStatus}
          onMintPressed={handleMintPressed}
        />
      </div>
    </>
  );
};

export default MintComponent;
