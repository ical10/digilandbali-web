import styles from '../../../styles/limabeach/BluePrintSection.module.css';
import sharedStyles from '../../../styles/limabeach/SharedStyles.module.css';

const BluePrintSection = () => {
  return (
    <div
      className={`${sharedStyles.flexColumnStartContainer} ${sharedStyles.flexOrder5} ${styles.sneakPeakContainer}`}
    >
      <div className="w-full">
        <h1 className={sharedStyles.sectionTitleBig}>
          Blue Print Sneak Peak<span className={sharedStyles.titleDot}>.</span>
        </h1>
        <div className={sharedStyles.titleBorder}></div>
      </div>
      <div className={styles.sneakPeakImageContainer}>
        <div className={styles.imageContainer}>
          <img src={'/BluePrint1.svg'} className={styles.img} />
        </div>
        <div className={styles.imageContainer}>
          <img src={'/BluePrint2.svg'} className={styles.img} />
        </div>
        <div className={styles.imageContainer}>
          <img src={'/BluePrint3.svg'} className={styles.img} />
        </div>
        <div className={styles.imageContainer}>
          <img src={'/BluePrint4.svg'} className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default BluePrintSection;
