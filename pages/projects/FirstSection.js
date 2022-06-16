import Image from 'next/image';

import ImageCarousel from '../../src/components/ImageCarousel';
import styles from '../../styles/limabeach/FirstSection.module.css';

const FirstSection = () => {
  return (
    <section>
      <div className={styles.root}>
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
        <div className={styles.descImageContainer}>
          <div className={styles.carouselContainer}>
            <ImageCarousel width={1059} height={400} />
          </div>
          <div>
            <div className={styles.numberContainer}>
              <h1 className={styles.numberBig}>1,771</h1>
              <label>NFT Fragments</label>
            </div>
            <div className={styles.numberContainer}>
              <h1 className={styles.numberBig}>253</h1>
              <label>Apartements</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
