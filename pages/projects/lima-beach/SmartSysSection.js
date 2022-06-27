import sharedStyles from '../../../styles/limabeach/SharedStyles.module.css';
import styles from '../../../styles/limabeach/SmartSysSection.module.css';

const SmartSysSection = () => {
  return (
    <div className={`${styles.smartSystemContainer} ${sharedStyles.flexOrder6}`}>
      <div className={styles.smartSystemHeaderContainer}>
        <h1 className={sharedStyles.sectionTitleBig}>
          Smart Systems Partnered with Digitels<span className={sharedStyles.titleDot}>.</span>
        </h1>
        <div className={styles.subtitleContainer}>
          <div className={sharedStyles.subtitleWrapper}>
            Smart hotel automation solution powered by Digitels gives you personalized experience,
            <br />
            efficient operations and management
          </div>
        </div>
      </div>
      <div className={styles.smartSystemDescContainer}>
        <div className={styles.smartSystemLeftDescContainer}>
          <div className={styles.descContainer}>
            <h1>Connection</h1>
            <div>Connect automation systems.</div>
          </div>
          <div className={styles.descContainer}>
            <h1>User Friendly</h1>
            <div>Easily connect and install.</div>
          </div>
          <div className={styles.descContainer}>
            <h1>Functional</h1>
            <div>Smart integrated functions.</div>
          </div>
        </div>
        <div className={styles.smartSystemMidDescContainer}>
          <div className={styles.imageContainer}>
            <img
              src={'/Smart_System.svg'}
              className={sharedStyles.responsive}
              alt="Smart system illustration"
            />
          </div>
        </div>
        <div className={styles.smartSystemRightDescContainer}>
          <div className={styles.descContainer}>
            <h1>Smart</h1>
            <div>Smart Control and experience</div>
          </div>
          <div className={styles.descContainer}>
            <h1>Green</h1>
            <div>Response to energy saving experience</div>
          </div>
          <div className={styles.descContainer}>
            <h1>Safe</h1>
            <div>Globally certified products and services</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartSysSection;
