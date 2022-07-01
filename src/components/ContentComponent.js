import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import {useState} from 'react';

import {MinusCirlce, AddCircle, TickCircle, InfoCircle} from 'iconsax-react';
import SocialHandles from 'src/components/SocialHandles';
import {mintDigilandNFT, connectWallet} from 'src/helpers/metamask-interact';
import styles from 'styles/ContentComponent.module.css';

const ContentComponent = () => {
  //TODO: add selector here from state management to read walletAddress

  const [referralCode, setReferralCode] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [mintedQuantity, setMintedQuantity] = useState(0);

  const [, setMintStatus] = useState('');

  const [walletAddress, setWalletAddress] = useState('');

  const [isUSDCAllowed, setIsUSDCAllowed] = useState(false);

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

  const handleConnectWallet = async () => {
    const walletResponse = await connectWallet();

    //TODO: set walletAddress to the state management instead
    setWalletAddress(walletResponse.address);
  };

  const handleAllowUSDC = () => {
    //TODO: perform USDCAllowance extrinsic using Metamask first
    setIsUSDCAllowed(!isUSDCAllowed);
  };

  return (
    <div id="content">
      <div className="flex flex-col content-center justify-center min-w-fit">
        <div className="flex flex-col items-center p-6 gap-[10px] text-center bg-[#edf4f7] rounded-t-lg">
          <img src="/Hexagon.svg" alt="NFT image illustration" className="w-45 h-45" />
          <h3 className="font-bold text-xl">5 DAYS LEFT!</h3>
          <div>
            <p className="font-bold">Mint Price</p>
            <p className="font-normal">2000 USDC</p>
          </div>
          <div>
            <p className="font-bold">Total Supply</p>
            <p className="font-normal">1,771</p>
          </div>
          <div className="flex flex-row gap-2">
            <SocialHandles />
          </div>
        </div>
        <div className="bg-[#fff] rounded-b-lg p-6">
          <div className="flex flex-col gap-2 mb-8">
            <h1 className="font-bold text-2xl uppercase">physical land stage</h1>
            <h3 className="font-semibold text-lg uppercase">lima beach signature nft</h3>
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <input
              className="rounded-lg border border-[#d0d5dd] p-2 shadow-[0px_1px_2px_rgba(16,24,40,0.05)]"
              type="text"
              name="referral-code"
              id="referral-code"
              placeholder="Input Referral Code (Optional)"
              alt="Input Referral Code (Optional)"
              value={referralCode}
              onChange={handleChangeReferralCode}
            />

            <div className={styles.container}>
              <div className="flex py-1 px-2 rounded-lg border border-[#d0d5dd]">
                <div>
                  <IconButton onClick={handleDecrement}>
                    <MinusCirlce size="20" color="#8f98aa" />
                  </IconButton>
                </div>
                <input
                  type="number"
                  name="input-mint-quantity"
                  className={styles.inputQuantity}
                  value={quantity}
                  onChange={handleChangeQuantity}
                ></input>
                <div>
                  <IconButton onClick={handleIncrement}>
                    <AddCircle size="20" color="#8f98aa" />
                  </IconButton>
                </div>
              </div>
              <div className="flex items-center rounded-lg border border-[#d0d5dd] py-2 px-4">
                <h4 className="font-bold text-sm whitespace-nowrap">50,000 USDC</h4>
              </div>
            </div>

            <div className="flex flex-row gap-1">
              <input type="checkbox" id="tnc" name="tnc" value="Agreed" />
              <label htmlFor="tos">
                I agree with{' '}
                <a href="https://google.com" style={{color: '#406aff'}}>
                  terms and conditions
                </a>
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {walletAddress.length > 0 ? (
              <>
                <button
                  className={isUSDCAllowed ? 'outlinedActive' : 'outlined'}
                  onClick={handleAllowUSDC}
                >
                  Allow to trade {(quantity * 50000).toLocaleString()} USDC
                  {isUSDCAllowed ? (
                    <TickCircle size="16" color="#76CE8A" />
                  ) : (
                    <InfoCircle size="16" color="#1F50FF" />
                  )}
                </button>
                <button
                  className="w-full"
                  onClick={handleMintPressed}
                  disabled={quantity > 0 ? false : true}
                >
                  <span>Mint Now</span>
                </button>{' '}
              </>
            ) : (
              <button className="w-full" onClick={handleConnectWallet}>
                <span>Connect Wallet</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentComponent;
