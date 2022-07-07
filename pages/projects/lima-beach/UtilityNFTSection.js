import {useRef} from 'react';
import {animated} from 'react-spring';

import {borderWidth, fadeIn, fadeInUpText} from 'src/animation';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';
import sharedStyles from 'styles/limabeach/SharedStyles.module.css';
import styles from 'styles/limabeach/UtilityNFTSection.module.css';

const UtilityNFTSection = () => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {});
  const visible = dataRef?.isIntersecting;

  return (
    <>
      <div
        className={`${sharedStyles.flexColumnStartContainer} ${sharedStyles.flexOrder2} ${styles.root}`}
      >
        <div className="overflow-hidden">
          <animated.div
            className={sharedStyles.sectionTitleBig}
            ref={triggerRef}
            style={fadeInUpText(visible)}
          >
            Decentralized NFT Developer Property with Apartments as Utility
            <span className={sharedStyles.titleDot}>.</span>
          </animated.div>
        </div>
        <div className="w-full inline-block">
          <animated.div
            className={sharedStyles.titleBorder}
            ref={triggerRef}
            style={borderWidth(visible)}
          ></animated.div>
        </div>

        <animated.div className={styles.imageDimension} ref={triggerRef} style={fadeIn(visible)}>
          <img src={'/Videopreview.svg'} alt="video preview" />
        </animated.div>
        <div className="flex flex-col items-start gap-[32px] w-full h-auto">
          <div className={styles.descContainer}>
            <div className="flex flex-col items-start gap-4 desktop:max-w-[524px]">
              {' '}
              <div className={styles.titleMedium}>
                Increasing participation in property investment with developer prices
              </div>
              <div className={styles.text}>
                Digilandbali's Lima Beach Signature NFT project reduces ownership expenses and
                broadens its attractiveness. As a property's price rises, so does its value. Since
                the property project was built by the community working together, everyone can
                access property’s luxury services at a developer price instead of market price.
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 desktop:max-w-[524px]">
              <div className={styles.titleMedium}>Smart Apartment with IoT Technology Adoption</div>
              <div className={styles.text}>
                Digilandbali create a smart 4.0 digital hospitality and advanced building management
                system, where you don't need a physical key to get in. This also will surely
                improves the customer experience and perceptions.
              </div>
            </div>
          </div>
          <div className={styles.descContainer}>
            <div className="flex flex-col items-start gap-4 desktop:max-w-[524px]">
              <div className={styles.titleMedium}>Free 60 Years of Hospitality Management</div>
              <div className={styles.text}>
                The hotel management will rent out to the public 65 of the 253 units. The rent from
                65 units will cover the costs of the renters. Hence, NFT owners may having his or
                her own property at ease without needing to worry anything.
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 desktop:max-w-[524px]">
              <div className={styles.titleMedium}>
                Fully Furnished Apartments with Panoramic View
              </div>
              <div className={styles.text}>
                Luxurious smart service apartments strategically situated in Canggu, Bali with perks
                such as fully-furnished, IoT Technology enabled, and etc. You may enjoy one of the
                world's most spectacular sunsets which is able be seen from the property. The
                beachfront, seaview, or lush garden view are all possibilities for the
                accommodations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UtilityNFTSection;
