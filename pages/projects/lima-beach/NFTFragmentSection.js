import styles from '../../../styles/limabeach/NFTFragmentSection.module.css';
import sharedStyles from '../../../styles/limabeach/SharedStyles.module.css';

const NFTFragmentSection = () => {
  return (
    <div className={`${styles.root} ${sharedStyles.flexOrder8}`}>
      <div className="w-full">
        <h1 className={sharedStyles.sectionTitleBig}>
          Lima Beach NFT Fragments<span className={sharedStyles.titleDot}>.</span>
        </h1>
        <div className={sharedStyles.titleBorder}></div>
      </div>
      <div className={styles.imageDescContainer}>
        <div className={styles.imageContainer}>
          <img src={'/image-removebg-preview_1_1.svg'} className={sharedStyles.responsive} />
        </div>
        <div className={styles.imageDescTextContainer}>
          <h1 className={styles.descTitle}>
            7 NFT fragments would equal 1 luxury service apartment with a 58-years leasehold.
          </h1>
          <div className={styles.descText}>
            One NFT Fragment will represent a one-seventh (1/7) ownership of the apartment leasehold
            that when collected can be fusioned. To get one whole leasehold, a leaseholder would
            need to have seven NFT fragments to combine into one NFT Apartment or one NFT Skyvilla.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTFragmentSection;
