import styles from '../../../styles/limabeach/LuxuryPropertySection.module.css';
import sharedStyles from '../../../styles/limabeach/SharedStyles.module.css';

const LuxuryPropertySection = () => {
  return (
    <>
      <div
        className={`${sharedStyles.flexColumnStartContainer} ${sharedStyles.flexOrder3} ${styles.root}`}
      >
        <div className="w-full">
          <h1 className={sharedStyles.sectionTitleBig}>
            Luxury Property with Developer Price<span className={sharedStyles.titleDot}>.</span>
          </h1>
          <div className={sharedStyles.titleBorder}></div>
        </div>
        <div className="flex flex-col gap-8 tablet:gap-12 desktop:gap-16">
          <div className={styles.imageDescContainer}>
            <div className={styles.imageContainer}>
              <img src={'/NFTapart.svg'} className={styles.img} alt="NFT apartment image" />
            </div>
            <div className={styles.paragraphContainer}>
              {' '}
              <div className={styles.titleSmall}>NFT Apartments</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
                adipiscing lacus augue gravida et. Quam aliquet cras suspendisse in rutrum quis nisl
                at lacus. Cursus purus tristique et congue Cursus purus tristique et congue.
              </div>
              <div className={styles.labelDescContainer}>
                <div>60 m2</div>
                <div>Download blueprint</div>
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
                <label>120 m2</label>
                <label>Download blueprint</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LuxuryPropertySection;
