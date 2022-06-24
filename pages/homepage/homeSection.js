import {useRef} from 'react';
import {animated} from 'react-spring';

import Image from 'next/image';

import {fadeInLeft, fadeInRight} from '../../src/animation';
import useIntersectionObserver from '../../src/hooks/useIntersectionObserver';
import styles from '../../styles/HomeSection.module.css';

const HomeSection = () => {
  // animation trigger
  const triggerAnimation = {
    floatText: useRef(),
  };

  // visible on viewport
  const visibleAnimation = {
    floatText: useIntersectionObserver(triggerAnimation.floatText, {rootMargin: '-50%'})
      ?.isIntersecting,
  };

  return (
    <section>
      <div>
        <div className={styles.titleBig}>DIGILANDBALI</div>
        <div className={styles.subtitle}>WE BUILD TOGETHER, WE OWN TOGETHER</div>
        <div className={`${styles.buttonContainer} ${styles.top}`}>
          <button className={`${styles.button} ${styles.buttonWhite}`}>About Digilandbali</button>
          <button className={styles.button}>Visit Lima Beach Project</button>
        </div>
      </div>
      <div className="relative">
        <animated.div
          className={`${styles.floatingTextContainer} ${styles.floatingText} ${styles.top}`}
          style={fadeInLeft(visibleAnimation.floatText)}
        >
          <div className={styles.title}>NFT Developer Property</div>
          <div className={styles.subtitle}>
            Build decentralized property with developer price on Bali, build with community for
            community
          </div>
        </animated.div>
        <div className={styles.imageMainContainer} ref={triggerAnimation.floatText}>
          <Image src="/Home.svg" layout="fill" className={styles.imageMain} alt="HomePicture" />
        </div>
        <animated.div
          className={`${styles.floatingTextContainer} ${styles.floatingText} ${styles.bottom}`}
          style={fadeInRight(visibleAnimation.floatText)}
        >
          <div className={styles.title}>NFT Developer Property</div>
          <div className={styles.subtitle}>
            Build decentralized property with developer price on Bali, build with community for
            community
          </div>
        </animated.div>
      </div>
      <div className={`${styles.buttonContainer} ${styles.bottom}`}>
        <button className={`${styles.button} ${styles.buttonWhite}`}>About Digilandbali</button>
        <button className={styles.button}>Visit Lima Beach Project</button>
      </div>
      <div className={styles.imageUnionContainer}>
        <Image src="/Union.svg" layout="fill" className={styles.imageUnion} alt="HomePicture" />
      </div>
    </section>
  );
};

export default HomeSection;
