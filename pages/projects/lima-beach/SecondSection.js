import Image from 'next/image';

import styles from '../../../styles/limabeach/SecondSection.module.css';
import sharedStyles from '../../../styles/limabeach/SharedStyles.module.css';
import AboutLimaBeachSection from './AboutLimaBeachSection';
import BluePrintSection from './BluePrintSection';
import FacilitySection from './FacilitySection';
import LuxuryPropertySection from './LuxuryPropertySection';
import MintSection from './MintSection';
import MintingStageSection from './MintingStageSection';
import NFTFragmentSection from './NFTFragmentSection';
import PermissiveDocSection from './PermissiveDocSection';
import RoadmapSection from './RoadmapSection';
import SmartSysSection from './SmartSysSection';
import TokenDistSection from './TokenDistSection';
import UtilityNFTSection from './UtilityNFTSection';

const SecondSection = () => {
  return (
    <div className={styles.root}>
      <AboutLimaBeachSection />
      <UtilityNFTSection />
      <LuxuryPropertySection />
      <FacilitySection />
      <BluePrintSection />
      <SmartSysSection />
      <PermissiveDocSection />
      <NFTFragmentSection />
      <MintingStageSection />
      <MintSection />
      <TokenDistSection />
      <RoadmapSection />
    </div>
  );
};

export default SecondSection;
