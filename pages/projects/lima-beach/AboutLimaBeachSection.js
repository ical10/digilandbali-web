import SectionBreak from '../../../src/components/SectionBreak';
import styles from '../../../styles/limabeach/AboutLimaBeachSection.module.css';
import sharedStyles from '../../../styles/limabeach/SharedStyles.module.css';

import {Location} from 'iconsax-react';

const AboutLimaBeachSection = () => {
  return (
    <>
      <SectionBreak />
      <div className={styles.root}>
        <div className={styles.imageContainer}>
          <img src={'/Whatislimabeach.svg'} alt="Lima Beach illustration" />
        </div>
        <div className={styles.descriptionContainer}>
          <h1 className={styles.titleBig}>
            What is Lima Beach NFT<span className={sharedStyles.titleDot}>.</span>
          </h1>

          <div className={styles.locationContainer}>
            <Location color="#fff" variant="Bold" size={20} />

            <div className="font-normal text-base text-[#E2E2E2] whitespace-nowrap">
              Canggu, Bali, Indonesia
            </div>
          </div>
          <div className={styles.description}>
            Lima Beach Signature is ProperBlock’s first decentralized property project. Each Lima
            Beach Signature NFT represents the physical ownership of an apartment that leaseholders
            can use for living in Pantai Lima, Canggu, Bali. Each physical apartment in Lima Beach
            Signature is a luxury service smart apartment that uses IoT Technology.
          </div>
          <div className={styles.description}>
            The benefits of having affordable housing lie within the communities' development.
            Communities with more affordable houses are more sustainable, and the neighborhood is
            also more secure as the significant economic impacts increase local purchasing power and
            job creation.
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutLimaBeachSection;
