import Image from 'next/image';

import styles from '../../../styles/limabeach/SecondSection.module.css';

const SixthSubSection = () => {
  return (
    <div className={styles.smartSystemContainer}>
      <div className={styles.smartSystemHeaderContainer}>
        <h1 className={styles.titleHeaderSmartSystem}>Smart Systems Partnered with Digitels.</h1>
        <div className={styles.subtitleContainer}>
          <label className={styles.subtitleWrapper}>
            Smart hotel automation solution powered by Digitels gives you personalized experience,
            <br />
            efficient operations and management
          </label>
        </div>
      </div>
      <div className={styles.smartSystemDescContainer}>
        <div className={styles.smartSystemLeftDescContainer}>
          <div className={styles.connectDescContainer}>
            <h1>Connection</h1>
            <label>Connect automation systems.</label>
          </div>
          <div className={styles.userFriendlyDescContainer}>
            <h1>User Friendly</h1>
            <label>Easily connect and install.</label>
          </div>
          <div className={styles.functionalDescContainer}>
            <h1>Functional</h1>
            <label>Smart integrated functions.</label>
          </div>
        </div>
        <div className={styles.smartSystemMidDescContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={'/Smart_System.svg'}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
        <div className={styles.smartSystemRightDescContainer}>
          <div className={styles.smartDescContainer}>
            <h1>Smart</h1>
            <label>Smart Control and experience</label>
          </div>
          <div className={styles.smartDescContainer}>
            <h1>Green</h1>
            <label>Response to energy saving experience</label>
          </div>
          <div className={styles.safeDescContainer}>
            <h1>Safe</h1>
            <label>Globally certified products and services</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthSubSection;
