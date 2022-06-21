import Image from 'next/image';

import ImageCarousel from '../../../src/components/ImageCarousel';
import styles from '../../../styles/limabeach/HomeSection.module.css';
import sharedStyles from '../../../styles/limabeach/SharedStyles.module.css';

const HomeSection = () => {
  return (
    <section>
      <div
        className={`${sharedStyles.flexColumnStartContainer} ${sharedStyles.sectionWrapper} ${styles.rootHeight} ${sharedStyles.flexOrder0}`}
      >
        <div className="flex flex-col p-0 gap-4 w-[339px] h-[137px] tablet:items-center tablet:gap-2 tablet:w-[674px] tablet:h-[310px] desktop:flex-row desktop:gap-0 desktop:w-full desktop:h-[251px]">
          <div className="flex flex-row justify-center items-center p-0 h-[76px] desktop:w-[604px] desktop:h-[251px]">
            <h1 className={styles.titleBig}>
              LIMA BEACH SIGNATURE NFT<span className={sharedStyles.titleDot}>.</span>
            </h1>
          </div>
          <div className="desktop:flex desktop:flex-column">
            <div
              className={`${styles.descriptionContainer} ${sharedStyles.flexAllCenteredContainer}`}
            >
              <div className={styles.subtitle}>
                A limited-edition NFT represents the physical property certificate and physical
                property ownership built with the Internet of Things (IoT) Technology and Web 3.0.
              </div>
            </div>
            <div className={styles.iconContainer}>
              <Image src="/Discord_White.svg" width={24} height={24} alt="Discord-white" />
              <Image src="/Telegram_White.svg" width={24} height={24} alt="Discord-white" />
              <Image src="/Twitter_White.svg" width={24} height={24} alt="Discord-white" />
              <Image src="/Opensea_White.svg" width={24} height={24} alt="Discord-white" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-start gap-4 h-[276px] tablet:flex-row tablet:justify-center tablet:items-center tablet:h-[240px] desktop:h-[440px]">
          <div className="w-full h-full">
            <ImageCarousel width={1059} height={400} />
          </div>
          <div className="flex flex-row items-start gap-4 w-full h-[80px] tablet:flex-col tablet:gap-5 tablet:w-[156px] tablet:h-[240px] desktop:w-[205px] desktop:h-full">
            <div className="flex flex-col justify-center items-center p-3 gap-[10px] w-[163px] h-full tablet:p-8 tablet:w-full tablet:h-[110px] desktop:px-[48px] desktop:py-[61px] desktop:h-[204px]">
              <h1 className={styles.numberBig}>1,771</h1>
              <label>NFT Fragments</label>
            </div>
            <div className="flex flex-col justify-center items-center p-3 gap-[10px] w-[163px] h-full tablet:p-8 tablet:w-full tablet:h-[110px] desktop:px-[48px] desktop:py-[61px] desktop:h-[204px]">
              <h1 className={styles.numberBig}>253</h1>
              <label>Apartements</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
