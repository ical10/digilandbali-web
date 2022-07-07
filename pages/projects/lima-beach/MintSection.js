import {useRef} from 'react';
import {animated} from 'react-spring';

import {borderWidth, fadeIn, fadeInUpText} from 'src/animation';
import {FirstIcon, SecondIcon, ThirdIcon} from 'src/components/icons/FacilityIcons';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';
import styles from 'styles/limabeach/MintSection.module.css';
import sharedStyles from 'styles/limabeach/SharedStyles.module.css';

const MintSection = () => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {});
  const visible = dataRef?.isIntersecting;

  return (
    <>
      <div className={styles.root}>
        <div className={styles.headerContainer}>
          <div className="w-full overflow-hidden">
            <animated.div
              className={sharedStyles.sectionTitleBig}
              ref={triggerRef}
              style={fadeInUpText(visible)}
            >
              <div className={sharedStyles.sectionTitleBig}>
                How to Invest<span className={sharedStyles.titleDot}>.</span>
              </div>
            </animated.div>
            <div className="w-full inline-block">
              <animated.div
                className={sharedStyles.titleBorder}
                ref={triggerRef}
                style={borderWidth(visible)}
              ></animated.div>
            </div>
          </div>
        </div>
        <div className={styles.descContainer}>
          <animated.div className={styles.detailContainer} ref={triggerRef} style={fadeIn(visible)}>
            <img
              src={'/NFTInvest.svg'}
              className={sharedStyles.responsive}
              alt="How to mint illustration"
            />
          </animated.div>
          <div className={styles.stepsContainer}>
            <div className={styles.detailContainer}>
              <div className={styles.stepHeaderContainer}>
                <FirstIcon />
                <h1 className={sharedStyles.titleSmall}>Prepare your crypto wallet</h1>
              </div>
              <div className={styles.stepTextContainer}>
                <div className={sharedStyles.description}>
                  Pick a platform that you can trust. Set up an account. Specify your personal
                  information and pick a strong password. Utilizing 2-step verification, also known
                  as 2FA, adds an additional degree of protection and is advised.
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
                  Ready to purchase USDC once you have selected the ideal exchange. Ensure to only
                  deposit funds into your account that you will not need for daily expenses or
                  emergencies. Enter the USDC amount you wish to purchase.Choose the order type
                  (market, limit, etc.).Complete the trade.
                </div>
              </div>
            </div>
            <div className={styles.detailContainer}>
              <div className={styles.stepHeaderContainer}>
                <ThirdIcon />
                <h1 className={sharedStyles.titleSmall}>Go to our minting page</h1>
              </div>
              <div className={styles.stepTextContainer}>
                <div className={sharedStyles.description}>
                  Preview and mint your NFT fragment, mint it, sign it, approve the gas fee, wait
                  for your NFT fragment to be minted, and minting complete! Your minted NFT fragment
                  will be visible on your profile once the transaction has been approved. After
                  completing this process, you are now the rightful owner of the physical property!
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
