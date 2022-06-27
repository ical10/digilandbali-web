import sharedStyles from '../../../styles/limabeach/SharedStyles.module.css';
import styles from '../../../styles/limabeach/UtilityNFTSection.module.css';

const UtilityNFTSection = () => {
  return (
    <>
      <div
        className={`${sharedStyles.flexColumnStartContainer} ${sharedStyles.flexOrder2} ${styles.root}`}
      >
        <div className={sharedStyles.sectionTitleBig}>
          Decentralized NFT Developer Property with Apartments as Utility
          <span className={sharedStyles.titleDot}>.</span>
        </div>
        <div className={sharedStyles.titleBorder}></div>
        <div className={styles.imageDimension}>
          <img src={'/Videopreview.svg'} alt="video preview" />
        </div>
        <div className="flex flex-col items-start gap-[32px] w-full h-auto">
          <div className={styles.descContainer}>
            <div className={styles.descInnerContainer}>
              {' '}
              <div className={styles.titleMedium}>Property with Developer Price</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
                adipiscing lacus augue gravida et. Quam aliquet cras suspendisse in rutrum quis nisl
                at lacus. Cursus purus tristique et congue Cursus purus tristique et congue.
              </div>
            </div>
            <div className={styles.descInnerContainer}>
              <div className={styles.titleMedium}>Smart Apartment, IoT Connected</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
                adipiscing lacus augue gravida et. Quam aliquet cras suspendisse in rutrum quis nisl
                at lacus. Cursus purus tristique et congue Cursus purus tristique et congue.
              </div>
            </div>
          </div>
          <div className={styles.descContainer}>
            <div className={styles.descInnerContainer}>
              <div className={styles.titleMedium}>Free 60 Years of Hospitality Management</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
                adipiscing lacus augue gravida et. Quam aliquet cras suspendisse in rutrum quis nisl
                at lacus. Cursus purus tristique et congue Cursus purus tristique et congue.
              </div>
            </div>
            <div className={styles.descInnerContainer}>
              <div className={styles.titleMedium}>Fully Furnished, Panoramic View</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
                adipiscing lacus augue gravida et. Quam aliquet cras suspendisse in rutrum quis nisl
                at lacus. Cursus purus tristique et congue Cursus purus tristique et congue.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UtilityNFTSection;
