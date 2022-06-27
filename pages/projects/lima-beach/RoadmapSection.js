import styles from '../../../styles/limabeach/RoadmapSection.module.css';
import sharedStyles from '../../../styles/limabeach/SharedStyles.module.css';

const RoadmapSection = () => {
  return (
    <div className={styles.root}>
      <div className={styles.headerContainer}>
        <h1 className={sharedStyles.sectionTitleBig}>
          Lima Beach Signature NFT Roadmap<span className={sharedStyles.titleDot}>.</span>
        </h1>
        <div className={sharedStyles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
          adipiscing lacus augue gravida et. Vulputate nunc tortor proin adipiscing lacus augue
          gravida et.
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={'/Roadmap.svg'} className={sharedStyles.responsive} alt="Roadmap image" />
      </div>
    </div>
  );
};

export default RoadmapSection;
