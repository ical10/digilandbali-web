import Image from 'next/image';

import styles from '../../../styles/limabeach/SecondSection.module.css';
import EighthSubSection from './EighthSubSection';
import FifthSubSection from './FifthSubSection';
import FirstSubSection from './FirstSubSection';
import FourthSubSection from './FourthSubSection';
import NinthSubSection from './NinthSubSection';
import SecondSubSection from './SecondSubSection';
import SeventhSubSection from './SeventhSubSection';
import SixthSubSection from './SixthSubSection';
import TenthSubSection from './TenthSubSection';
import ThirdSubSection from './ThirdSubSection';

const SecondSection = () => {
  return (
    <div className={styles.root}>
      <FirstSubSection />
      <SecondSubSection />
      <ThirdSubSection />
      <FourthSubSection />
      <FifthSubSection />
      <SixthSubSection />
      <SeventhSubSection />
      <EighthSubSection />
      <NinthSubSection />
      <TenthSubSection />
      <div className={styles.tokenDistributionContainer}>
        <div className={styles.tokenDistributionHeaderContainer}>
          <h1 className={styles.titleBig}>Token Distribution.</h1>
          <label className={styles.tokenDistributionLabel}>1,771 NFT Fragment</label>
        </div>
        <div style={{width: '1140px', height: '646px', position: 'relative'}}>
          <Image src={'/Chart.svg'} layout="fill" />
        </div>
      </div>
      <div className={styles.roadmapContainer}>
        <div className={styles.roadmapHeaderContainer}>
          <h1 className={styles.titleBig}>Lima Beach Signature NFT Roadmap.</h1>
          <label className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc tortor proin
            adipiscing lacus augue gravida et. Vulputate nunc tortor proin adipiscing lacus augue
            gravida et.
          </label>
        </div>
        <div className={styles.imageContainer}>
          <div style={{width: '100%', height: '1368px', position: 'relative'}}>
            <Image src={'/Roadmap.svg'} layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
