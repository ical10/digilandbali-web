import Image from 'next/image';

import styles from '../../../styles/limabeach/SecondSection.module.css';

const SecondSubSection = () => {
  return (
    <>
      <div className={styles.secondSubSection}>
        <h1 className={styles.titleBig}>
          Decentralized NFT Developer Property with Apartments as Utility.
        </h1>
        <div>
          <Image src={'/Videopreview.svg'} width={1280} height={412} />
        </div>
        <div className={styles.descContainer}>
          <div className={styles.descInnerContainer}>
            {' '}
            <div className={styles.titleMedium}>Property with Developer Price</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
              adipiscing lacus augue gravida et. Quam aliquet cras suspendisse in rutrum quis nisl
              at lacus. Cursus purus tristique et congue Cursus purus tristique et congue.
            </p>
          </div>
          <div className={styles.descInnerContainer}>
            <div className={styles.titleMedium}>Smart Apartment, IoT Connected</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
              adipiscing lacus augue gravida et. Quam aliquet cras suspendisse in rutrum quis nisl
              at lacus. Cursus purus tristique et congue Cursus purus tristique et congue.
            </p>
          </div>
        </div>
        <div className={styles.descContainer}>
          <div className={styles.descInnerContainer}>
            <div className={styles.titleMedium}>Free 60 Years of Hospitality Management</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
              adipiscing lacus augue gravida et. Quam aliquet cras suspendisse in rutrum quis nisl
              at lacus. Cursus purus tristique et congue Cursus purus tristique et congue.
            </p>
          </div>
          <div className={styles.descInnerContainer}>
            <div className={styles.titleMedium}>Fully Furnished, Panoramic View</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
              adipiscing lacus augue gravida et. Quam aliquet cras suspendisse in rutrum quis nisl
              at lacus. Cursus purus tristique et congue Cursus purus tristique et congue.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSubSection;
