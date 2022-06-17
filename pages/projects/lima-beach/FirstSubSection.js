import Image from 'next/image';

import SectionBreak from '../../../src/components/SectionBreak';
import styles from '../../../styles/limabeach/SecondSection.module.css';

import {Location} from 'iconsax-react';

const FirstSubSection = () => {
  return (
    <>
      <SectionBreak width={328} height={70} />
      <div className={styles.firstSubSection}>
        <div className={styles.imageContainer}>
          <Image
            src={'/Whatislimabeach.svg'}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className={styles.descriptionContainer}>
          <h1 className={styles.titleBig}>What is Lima Beach NFT</h1>

          <div className={styles.locationContainer}>
            <Location color="#fff" variant="Bold" size={20} />
            <label>Canggu, Bali, Indonesia</label>
          </div>
          <p className={styles.description}>
            Lima Beach Signature is ProperBlock’s first decentralized property project. Each Lima
            Beach Signature NFT represents the physical ownership of an apartment that leaseholders
            can use for living in Pantai Lima, Canggu, Bali. Each physical apartment in Lima Beach
            Signature is a luxury service smart apartment that uses IoT Technology.
          </p>
          <p className={styles.description}>
            The benefits of having affordable housing lie within the communities' development.
            Communities with more affordable houses are more sustainable, and the neighborhood is
            also more secure as the significant economic impacts increase local purchasing power and
            job creation.
          </p>
        </div>
      </div>
    </>
  );
};

export default FirstSubSection;
