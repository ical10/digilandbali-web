import {useRef} from 'react';
import {animated} from 'react-spring';

import {borderWidth, fadeIn, fadeInUpText} from 'src/animation';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver';
import styles from 'styles/limabeach/BluePrintSection.module.css';
import sharedStyles from 'styles/limabeach/SharedStyles.module.css';

const BluePrintSection = () => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {});
  const visible = dataRef?.isIntersecting;

  return (
    <div
      className={`${sharedStyles.flexColumnStartContainer} ${sharedStyles.flexOrder5} ${styles.root}`}
    >
      <div className="overflow-hidden">
        <animated.div
          className={sharedStyles.sectionTitleBig}
          ref={triggerRef}
          style={fadeInUpText(visible)}
        >
          Blue Print Sneak Peak<span className={sharedStyles.titleDot}>.</span>
        </animated.div>
      </div>
      <div className="w-full inline-block">
        <animated.div
          className={sharedStyles.titleBorder}
          ref={triggerRef}
          style={borderWidth(visible)}
        ></animated.div>
      </div>
      <animated.div
        className={styles.sneakPeakImageContainer}
        ref={triggerRef}
        style={fadeIn(visible)}
      >
        <div className={styles.imageContainer}>
          <img src={'/BluePrint1.svg'} className={styles.img} alt="Blueprint 1 illustration" />
        </div>
        <div className={styles.imageContainer}>
          <img src={'/BluePrint2.svg'} className={styles.img} alt="BluePrint 2 illustration" />
        </div>
        <div className={styles.imageContainer}>
          <img src={'/BluePrint3.svg'} className={styles.img} alt="Blueprint 3 illustration" />
        </div>
        <div className={styles.imageContainer}>
          <img src={'/BluePrint4.svg'} className={styles.img} alt="Blueprint 4 illustration" />
        </div>
      </animated.div>
    </div>
  );
};

export default BluePrintSection;
