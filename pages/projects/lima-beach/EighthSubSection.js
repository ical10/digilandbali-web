import Image from 'next/image';

import styles from '../../../styles/limabeach/SecondSection.module.css';

const EighthSubSection = () => {
  return (
    <div className={styles.nftFragmentContainer}>
      <h1 className={styles.titleBig}>Lima Beach NFT Fragments.</h1>
      <div className={styles.nftFragmentImageDescContainer}>
        <div className={styles.nftFragmentImageOuterContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={'/image-removebg-preview_1_1.svg'}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
        <div className={styles.nftFragmentImageDescTextContainer}>
          <h1 className={styles.nftFragmentDescTitle}>
            7 NFT fragments would equal 1 luxury service apartment with a 58-years leasehold.
          </h1>
          <label className={styles.nftFragmentDescLabel}>
            One NFT Fragment will represent a one-seventh (1/7) ownership of the apartment leasehold
            that when collected can be fusioned. To get one whole leasehold, a leaseholder would
            need to have seven NFT fragments to combine into one NFT Apartment or one NFT Skyvilla.
          </label>
        </div>
      </div>
    </div>
  );
};

export default EighthSubSection;
