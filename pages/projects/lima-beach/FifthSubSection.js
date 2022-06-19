import Image from 'next/image';

import styles from '../../../styles/limabeach/SecondSection.module.css';

const FifthSubSection = () => {
  return (
    <div className={styles.sneakPeakContainer}>
      <h1 className={styles.titleBig}>Blue Print Sneak Peak.</h1>
      <div className={styles.sneakPeakImageContainer}>
        <div className={styles.singleImageContainer}>
          <Image
            src={'/BluePrint1.svg'}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className={styles.singleImageContainer}>
          <Image
            src={'/BluePrint2.svg'}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className={styles.singleImageContainer}>
          <Image
            src={'/BluePrint3.svg'}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className={styles.singleImageContainer}>
          <Image
            src={'/BluePrint4.svg'}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FifthSubSection;
