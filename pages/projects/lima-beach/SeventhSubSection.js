import Image from 'next/image';

import styles from '../../../styles/limabeach/SecondSection.module.css';

import {Import} from 'iconsax-react';

const SeventhSubSection = () => {
  return (
    <div className={styles.permissiveDocSectionContainer}>
      <div className={styles.permissiveDocHeaderContainer}>
        <div className={styles.permissiveDocTopHeaderContainer}>
          <h1 className={styles.permissiveDocHeaderTitle}>Permissive Document.</h1>
          <div className={styles.permissiveDocLinkWrapper}>
            <Import color="#BBCDFB" variant="Linear" size={24} />
            <a href="" style={{color: '#BBCDFB'}}>
              Download Set of Document
            </a>
          </div>
        </div>
        <label className={styles.permissiveDocHeaderLabel}>
          An Indonesian company is set up as a Special Purpose Vehicle (SPV) to hold the physical
          apartment certificate. SPV will put the certificate in the Safe Deposit Box for 60 years
          (the SPV will have a 30 years leasehold rights for the first license and renew/extend the
          leasehold rights for 30 years). All the NFT Buyers can cross-check the legal proof with
          the public notary.
        </label>
      </div>
      <div className={styles.permissiveDocImageDescContainer}>
        <div className={styles.permissiveDocFirstImageContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={'/Certif1.svg'}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <h1 className={styles.permissiveDocImageTitle}>Leasehold Documents</h1>
          <label className={styles.permissiveDocImageLabel}>
            The fourth stage will auction NFT fragments for eight months, and participants of the
            auction will have
          </label>
        </div>
        <div className={styles.permissiveDocSecondImageContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={'/Certif1.svg'}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <h1 className={styles.permissiveDocImageTitle}>Land Certificate</h1>
          <label className={styles.permissiveDocImageLabel}>
            The fourth stage will auction NFT fragments for eight months, and participants of the
            auction will have
          </label>
        </div>
        <div className={styles.permissiveDocThirdImageContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={'/Certif1.svg'}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <h1 className={styles.permissiveDocImageTitle}>Time Share</h1>
          <label className={styles.permissiveDocImageLabel}>
            The fourth stage will auction NFT fragments for eight months, and participants of the
            auction will have
          </label>
        </div>
      </div>
    </div>
  );
};

export default SeventhSubSection;
