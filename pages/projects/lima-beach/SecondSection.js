import Image from 'next/image';

import styles from '../../../styles/limabeach/SecondSection.module.css';
import FirstSubSection from './FirstSubSection';
import SecondSubSection from './SecondSubSection';
import ThirdSubSection from './ThirdSubSection';

import {Location} from 'iconsax-react';

const SecondSection = () => {
  return (
    <div className={styles.root}>
      <FirstSubSection />
      <SecondSubSection />
      <ThirdSubSection />
    </div>
  );
};

export default SecondSection;
