import {useRef} from 'react';
import {animated} from 'react-spring';

import Image from 'next/image';

import {fadeIn} from '../../src/animation';
import useIntersectionObserver from '../../src/hooks/useIntersectionObserver';
import styles from '../../styles/SponsorSection.module.css';

const SponsorSection = () => {
  // animation trigger
  const triggerAnimation = {
    sponsor: useRef(),
  };

  // visible on viewport
  const visibleAnimation = {
    sponsor: useIntersectionObserver(triggerAnimation.sponsor, {})?.isIntersecting,
  };

  return (
    <section>
      <animated.div
        className={styles.sponsorContainer}
        ref={triggerAnimation.sponsor}
        style={fadeIn(visibleAnimation.sponsor)}
      >
        <div className={styles.imageContainer}>
          <Image src="/hah.svg" layout="fill" className={styles.image} alt="HomePicture" />
        </div>
        <div className={styles.imageContainer}>
          <Image src="/ftm.svg" layout="fill" className={styles.image} alt="HomePicture" />
        </div>
        <div className={styles.imageContainer}>
          <Image src="/hah.svg" layout="fill" className={styles.image} alt="HomePicture" />
        </div>
      </animated.div>
    </section>
  );
};

export default SponsorSection;
