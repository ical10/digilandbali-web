import {FirstIcon, SecondIcon, ThirdIcon} from '../../../src/components/icons/FacilityIcons';
import styles from '../../../styles/limabeach/MintSection.module.css';
import sharedStyles from '../../../styles/limabeach/SharedStyles.module.css';

const MintSection = () => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.headerContainer}>
          <div className="w-full">
            <h1 className={sharedStyles.sectionTitleBig}>
              How to Mint<span className={sharedStyles.titleDot}>.</span>
            </h1>
            <div className={sharedStyles.titleBorder}></div>
          </div>
        </div>
        <div className={styles.descContainer}>
          <div className={styles.detailContainer}>
            <img
              src={'/NFTInvest.svg'}
              className={sharedStyles.responsive}
              alt="How to mint illustration"
            />
          </div>
          <div className={styles.stepsContainer}>
            <div className={styles.detailContainer}>
              <div className={styles.stepHeaderContainer}>
                <FirstIcon />
                <h1 className={sharedStyles.titleSmall}>Prepare your wallet</h1>
              </div>
              <div className={styles.stepTextContainer}>
                <div className={sharedStyles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor
                  proin adipiscing lacus augue gravida et.
                </div>
              </div>
            </div>
            <div className={styles.detailContainer}>
              <div className={styles.stepHeaderContainer}>
                <SecondIcon />
                <h1 className={sharedStyles.titleSmall}>Get USDC</h1>
              </div>
              <div className={styles.stepTextContainer}>
                <div className={sharedStyles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor
                  proin adipiscing lacus augue gravida et.
                </div>
              </div>
            </div>
            <div className={styles.detailContainer}>
              <div className={styles.stepHeaderContainer}>
                <ThirdIcon />
                <h1 className={sharedStyles.titleSmall}>Go To Minting Page</h1>
              </div>
              <div className={styles.stepTextContainer}>
                <div className={sharedStyles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor
                  proin adipiscing lacus augue gravida et.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MintSection;
