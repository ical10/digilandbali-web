import useMediaQuery from '@mui/material/useMediaQuery';

import ImageCarousel from 'src/components/ImageCarousel';
import styles from 'styles/limabeach/HomeSection.module.css';
import sharedStyles from 'styles/limabeach/SharedStyles.module.css';

const Icons = ({dimension}) => {
  const icons = [
    {
      src: '/Discord_White.svg',
      alt: 'Discord-white',
    },
    {
      src: '/Telegram_White.svg',
      alt: 'Telegram-white',
    },
    {
      src: '/Twitter_White.svg',
      alt: 'Telegram-white',
    },
    {
      src: '/Opensea_White.svg',
      alt: 'Opensea-white',
    },
  ];

  return (
    <>
      {icons.map((icon, i) => (
        <div key={`${icon.alt}-${i}`} style={{width: dimension, height: dimension}}>
          <img src={icon.src} alt={icon.alt} />
        </div>
      ))}
    </>
  );
};

const HomeSection = () => {
  const isMobile = useMediaQuery('(max-width: 425px)', {noSsr: true});
  const isDesktop = useMediaQuery('(min-width: 920px)', {noSsr: true});

  return (
    <div
      className={`${sharedStyles.flexColumnStartContainer} ${styles.sectionWrapper} ${sharedStyles.flexOrder0}`}
    >
      <div className="w-full flex flex-col gap-1 items-center tablet:items-center desktop:flex desktop:flex-row desktop:gap-14 desktop:justify-end">
        <div>
          <div className="uppercase whitespace-prewrap text-bold text-2xl desktop:text-5xl desktop:whitespace-nowrap text-center text-white">
            lima beach
            <br />
            signature {isDesktop ? <br /> : ''}nft<span className={sharedStyles.titleDot}>.</span>
          </div>
        </div>
        <div className="font-normal text-xs text-[#E2E2E2] text-center tablet:text-sm desktop:text-base desktop:font-medium desktop:text-left">
          A limited-edition NFT represents the physical property certificate and physical property
          ownership built with the Internet of Things (IoT) Technology and Web 3.0.
        </div>
        <div className={styles.iconContainer}>
          <Icons dimension={isMobile ? 16 : 24} />
        </div>
      </div>
      <div className="min-w-full tablet:grid-cols-[3fr_1fr] desktop:flex desktop:flex-row">
        <div className="desktop:w-full">
          <ImageCarousel />
        </div>
        <div className="flex flex-row justify-center items-center desktop:flex-col">
          <div className="flex flex-col justify-center items-center p-3 gap-[10px] w-[163px] h-full tablet:p-8 tablet:w-full tablet:h-[110px] desktop:px-[48px] desktop:py-[61px] desktop:h-[204px]">
            <h1 className={styles.numberBig}>1,771</h1>
            <div className="font-normal text-base text-[#AAAAAA] whitespace-nowrap">
              NFT Fragments
            </div>
          </div>
          <div className="flex flex-col justify-center items-center p-3 gap-[10px] w-[163px] h-full tablet:p-8 tablet:w-full tablet:h-[110px] desktop:px-[48px] desktop:py-[61px] desktop:h-[204px]">
            <h1 className={styles.numberBig}>253</h1>
            <div className="font-normal text-base text-[#AAAAAA]">Apartments</div>
          </div>
        </div>
      </div>
      <div>
        <img src="/Union.svg" className={sharedStyles.responsive} alt="decorative image" />
      </div>
    </div>
  );
};

export default HomeSection;
