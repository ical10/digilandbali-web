import {useRef} from 'react';
import {animated} from 'react-spring';

import styles from '../../../styles/limabeach/LuxuryPropertySection.module.css';
import sharedStyles from '../../../styles/limabeach/SharedStyles.module.css';

import {Import} from 'iconsax-react';
import {borderWidth, fadeIn, fadeInUpText} from 'src/animation';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';

const LuxuryPropertySection = () => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {});
  const visible = dataRef?.isIntersecting;

  return (
    <>
      <div
        className={`${sharedStyles.flexColumnStartContainer} ${sharedStyles.flexOrder3} ${styles.root}`}
      >
        <div className="overflow-hidden">
          <animated.div
            className={sharedStyles.sectionTitleBig}
            ref={triggerRef}
            style={fadeInUpText(visible)}
          >
            Luxury Property with Developer Price<span className={sharedStyles.titleDot}>.</span>
          </animated.div>
        </div>
        <div className="w-full inline-block">
          <animated.div
            className={sharedStyles.titleBorder}
            ref={triggerRef}
            style={borderWidth(visible)}
          ></animated.div>
        </div>
        <div className="flex flex-col gap-8 tablet:gap-12 desktop:gap-16">
          <div className={styles.imageDescContainer}>
            <animated.div
              className={styles.imageContainer}
              ref={triggerRef}
              style={fadeIn(visible)}
            >
              <img src={'/NFTapart.svg'} className={styles.img} alt="NFT apartment image" />
            </animated.div>
            <div className={styles.paragraphContainer}>
              {' '}
              <div className={styles.titleSmall}>NFT Apartments</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
                adipiscing lacus augue gravida et. Quam aliquet cras suspendisse in rutrum quis nisl
                at lacus. Cursus purus tristique et congue Cursus purus tristique et congue.
              </div>
              <div className={styles.labelDescContainer}>
                <div className="font-bold text-xs tablet:text-base desktop:text-2xl text-white">
                  60 m2
                </div>
                <div className="text-xs tablet:text-base desktop:text-2xl flex flex-row justify-end items-center ml-auto gap-2 max-w-[398px]">
                  <Import color="#BBCDFB" variant="Linear" size={24} />
                  <a href="" style={{color: '#BBCDFB'}}>
                    Download Blue Print
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageDescContainer}>
            <div className={styles.imageContainer}>
              <img src={'/NFTskyvila.svg'} className={styles.img} alt="NFT Skyvilla image" />
            </div>
            <div className={styles.paragraphContainer}>
              {' '}
              <div className={styles.titleSmall}>NFT Skyvilla</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
                adipiscing lacus augue gravida et. Quam aliquet cras suspendisse in rutrum quis nisl
                at lacus. Cursus purus tristique et congue Cursus purus tristique et congue.
              </div>
              <div className={styles.labelDescContainer}>
                <div className="font-bold text-xs tablet:text-base desktop:text-2xl text-white">
                  120 m2
                </div>
                <div className="text-xs tablet:text-base desktop:text-2xl flex flex-row justify-end items-center ml-auto gap-2 max-w-[398px]">
                  <Import color="#BBCDFB" variant="Linear" size={24} />
                  <a href="" style={{color: '#BBCDFB'}}>
                    Download Blue Print
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LuxuryPropertySection;
