import SocialHandles from 'src/components/SocialHandles';
import styles from 'styles/ContentComponent.module.css';

const ContentComponent = ({
  onIncrement,
  onDecrement,
  onChangeReferralCode,
  referralCode,
  onChangeQuantity,
  quantity,
  mintedQuantity,
  maxQuantity,
  walletAddress = '',
  mintStatus,
  onMintPressed,
  onConnectWallet,
}) => {
  return (
    <div id="content">
      <div className="flex flex-col content-center justify-center min-w-fit">
        <div className="flex flex-col items-center p-6 gap-[10px] text-center bg-[#edf4f7] rounded-t-lg">
          <img src="/Hexagon.svg" alt="NFT image illustration" className="w-45 h-45" />
          <h3 className="font-bold text-xl">LIMA BEACH NFT</h3>
          <div>
            <p className="font-bold">Mint Price</p>
            <p className="font-normal">2000 USDC</p>
          </div>
          <div>
            <p className="font-bold">Total Supply</p>
            <p className="font-normal">250/250</p>
          </div>
          <div className="flex flex-row gap-2">
            <SocialHandles />
          </div>
        </div>
        <div className="bg-[#fff] rounded-b-lg p-6">
          <div className="flex flex-col gap-2 mb-8">
            <h1 className="font-bold text-2xl">PUBLIC SALE STAGE 1</h1>
            <h3 className="font-semibold text-xl">Physical Land Stage</h3>
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
              onChange={onChangeReferralCode}
            />

            <div className="flex flex-row items-center gap-5">
              <div className="flex">
                <button className={styles.incrementorButton} onClick={onDecrement}>
                  <span style={{color: 'black'}}>−</span>
                </button>
                <input
                  type="number"
                  name="input-mint-quantity"
                  className={styles.inputQuantity}
                  value={quantity}
                  onChange={onChangeQuantity}
                ></input>
                <button className={styles.incrementorButton} onClick={onIncrement}>
                  <span style={{color: 'black'}}>+</span>
                </button>
              </div>
              <div className="whitespace-nowrap">
                <h4 className="font-bold text-base">
                  Total <span className="font-normal text-sm">7,000 USDC</span>
                </h4>
              </div>
            </div>

            <div className="flex flex-row gap-1">
              <input type="checkbox" id="tnc" name="tnc" value="Agreed" />
              <label htmlFor="tos">
                I agree with{' '}
                <a href="" style={{color: '#406aff'}}>
                  terms and conditions
                </a>
              </label>
            </div>
          </div>

          {
            //<div className={styles.walletStatus}>
            //<label>Minted supply : {mintedQuantity}</label>
            //</div>
          }

          <div>
            {walletAddress.length > 0 ? (
              <>
                <button>
                  <span>Allow Digilandbali to trade your USDC</span>
                </button>
                <button
                  className="w-full"
                  onClick={onMintPressed}
                  disabled={quantity > 0 ? false : true}
                >
                  <span>Mint Now</span>
                </button>
              </>
            ) : (
              <button className="w-full" onClick={onConnectWallet}>
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
