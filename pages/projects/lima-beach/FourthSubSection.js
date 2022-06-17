import Image from 'next/image';

import styles from '../../../styles/limabeach/SecondSection.module.css';

const FourthSubSection = () => {
  return (
    <>
      <div className={styles.fourthSubSection}>
        <h1 className={styles.titleBig}>Luxury Property with Developer Price.</h1>
        <div className={styles.imageDescContainer}>
          <div className={styles.imageRawLayoutContainer}>
            <Image src={'/NFTapart.svg'} width="524px" height="280px" layout="raw" />
          </div>
          <div className={styles.paragraphContainer}>
            {' '}
            <div className={styles.titleSmall}>NFT Apartments</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
              adipiscing lacus augue gravida et. Quam aliquet cras suspendisse in rutrum quis nisl
              at lacus. Cursus purus tristique et congue Cursus purus tristique et congue.
            </p>
            <div className={styles.labelDescContainer}>
              <label>60 m2</label>
              <label>Download blueprint</label>
            </div>
          </div>
        </div>
        <div className={styles.imageDescContainer}>
          <div className={styles.imageRawLayoutContainer}>
            <Image src={'/NFTSkyvila.svg'} width="524px" height="280px" layout="raw" />
          </div>
          <div className={styles.paragraphContainer}>
            {' '}
            <div className={styles.titleSmall}>NFT Skyvilla</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
              adipiscing lacus augue gravida et. Quam aliquet cras suspendisse in rutrum quis nisl
              at lacus. Cursus purus tristique et congue Cursus purus tristique et congue.
            </p>
            <div className={styles.labelDescContainer}>
              <label>120 m2</label>
              <label>Download blueprint</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthSubSection;
