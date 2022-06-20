import Image from 'next/image';

import {FirstIcon, SecondIcon, ThirdIcon} from '../../../src/components/icons/FacilityIcons';
import styles from '../../../styles/limabeach/SecondSection.module.css';

const TenthSubSection = () => {
  return (
    <>
      <div className={styles.investContainer}>
        <div className={styles.investHeaderContainer}>
          <h1 className={styles.titleBig}>How to Invest.</h1>
        </div>
        <div className={styles.investStepsContainer}>
          <div className={styles.investStepsDescContainer}>
            <div className={styles.investStepDetailDescContainer}>
              <div className={styles.investFirstStepHeaderContainer}>
                <FirstIcon />
                <h1 className={styles.titleSmall}>Prepare your wallet</h1>
              </div>
              <div className={styles.investFirstStepLabelContainer}>
                <label className={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor
                  proin adipiscing lacus augue gravida et.
                </label>
              </div>
            </div>
            <div className={styles.investStepDetailDescContainer}>
              <div className={styles.investFirstStepHeaderContainer}>
                <SecondIcon />
                <h1 className={styles.titleSmall}>Get USDC</h1>
              </div>
              <div className={styles.investFirstStepLabelContainer}>
                <label className={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor
                  proin adipiscing lacus augue gravida et.
                </label>
              </div>
            </div>
            <div className={styles.investStepDetailDescContainer}>
              <div className={styles.investFirstStepHeaderContainer}>
                <ThirdIcon />
                <h1 className={styles.titleSmall}>Go To Minting Page</h1>
              </div>
              <div className={styles.investFirstStepLabelContainer}>
                <label className={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor
                  proin adipiscing lacus augue gravida et.
                </label>
              </div>
            </div>
          </div>
          <div className={styles.investStepsImageContainer}>
            <div className={styles.imageRawLayoutContainer}>
              <Image src={'/NFTInvest.svg'} width="524px" height="338px" layout="raw" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TenthSubSection;
