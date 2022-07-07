import AboutLimaBeachSection from './AboutLimaBeachSection';
import BluePrintSection from './BluePrintSection';
import FacilitySection from './FacilitySection';
import HomeSection from './HomeSection';
import LuxuryPropertySection from './LuxuryPropertySection';
import MintSection from './MintSection';
import MintingStageSection from './MintingStageSection';
import NFTFragmentSection from './NFTFragmentSection';
import PermissiveDocSection from './PermissiveDocSection';
import RoadmapSection from './RoadmapSection';
import SmartSysSection from './SmartSysSection';
import TokenDistSection from './TokenDistSection';
import UtilityNFTSection from './UtilityNFTSection';

import styles from 'styles/limabeach/SectionGroup.module.css';

const SectionGroup = () => {
  return (
    <div className={styles.root}>
      <HomeSection />
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

export default SectionGroup;
