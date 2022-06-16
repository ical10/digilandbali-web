import Image from 'next/image';

import styles from '../../styles/limabeach/FirstSection.module.css';

const FirstSection = () => {
  return (
    <section>
      <div className={styles.sectionContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.titleBig}>LIMA BEACH SIGNATURE NFT.</h1>
        </div>
        <div className={styles.outerContainer}>
          <div className={styles.descriptionContainer}>
            <label className={styles.descriptionLabel}>
              A limited-edition NFT represents the physical property certificate and physical
              property ownership built with the Internet of Things (IoT) Technology and Web 3.0.
            </label>
          </div>
          <div className={styles.iconContainer}>
            <Image src="/Discord_White.svg" width={24} height={24} alt="Discord-white" />
            <Image src="/Telegram_White.svg" width={24} height={24} alt="Discord-white" />
            <Image src="/Twitter_White.svg" width={24} height={24} alt="Discord-white" />
            <Image src="/Opensea_White.svg" width={24} height={24} alt="Discord-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
