import useMediaQuery from '@mui/material/useMediaQuery';

import styles from 'styles/limabeach/RoadmapSection.module.css';
import sharedStyles from 'styles/limabeach/SharedStyles.module.css';

const RoadmapSection = () => {
  const isMobile = useMediaQuery('(max-width: 425px)', {noSsr: true});

  return (
    <div className={styles.root}>
      <div className={styles.headerContainer}>
        <h1 className={sharedStyles.sectionTitleBig}>
          Lima Beach Signature NFT Roadmap<span className={sharedStyles.titleDot}>.</span>
        </h1>
        <div className="font-normal text-xs text-[#e2e2e2] text-center desktop:text-sm">
          We are guided by a simple yet precise vision of Lima Beach Signature NFTs roadmap. We
          Build together, We Own Together
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={isMobile ? '/RoadmapMobile.svg' : '/Roadmap.svg'}
          className={sharedStyles.responsive}
          alt="Roadmap image"
        />
      </div>
    </div>
  );
};

export default RoadmapSection;
