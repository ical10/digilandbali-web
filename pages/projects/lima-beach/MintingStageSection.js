import useMediaQuery from '@mui/material/useMediaQuery';

import styles from 'styles/limabeach/MintingStage.module.css';
import sharedStyles from 'styles/limabeach/SharedStyles.module.css';

const MintingStageSection = () => {
  const isDesktop = useMediaQuery('(min-width:920px)', {noSsr: true});
  return (
    <div className={`${styles.root} ${sharedStyles.flexOrder9}`}>
      <div className={styles.headerContainer}>
        <h1 className={sharedStyles.sectionTitleBig}>Lima Beach Minting Stage</h1>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            Currently, the market price of a luxury apartment is $210,000. If you enter the project
            early, each NFT fragment will cost $10,000, making the total cost of seven NFT fragments
            around $70,000, a third (33%) of the current market price.
          </div>
        </div>
      </div>
      <div className={styles.imageDescContainer}>
        <div className={styles.rowImageDescContainer}>
          <div className={styles.imageContainer}>
            <img
              src={'/NFTStage1_1.svg'}
              className={sharedStyles.responsive}
              alt="NFT Stage 1 illustration"
            />
          </div>
          <div className={styles.rowDescContainer}>
            <h1 className={styles.descTitle}>Physical Land Stage, with $10,000 each Fragment</h1>
            <div className={sharedStyles.titleBorder}></div>
            <div className={styles.descText}>
              The first NFT auction will be to purchase physical land on which to build the
              property. Anyone who participates in the first auction will mint an $US10,000 NFT
              fragment. In this stage, each NFT apartment will cost $US70,000, and it is the lowest
              stage to get the best price.
            </div>
          </div>
        </div>
        <div className={styles.rowImageDescContainer}>
          <div className={styles.imageContainer}>
            <img
              src={'/NFTStage2_1.svg'}
              className={sharedStyles.responsive}
              alt="NFT Stage 2 illustration"
            />
          </div>
          <div className={styles.rowDescContainer}>
            <h1 className={styles.descTitle}>
              Apartment Foundation Stage, with $13,500 each Fragment
            </h1>
            <div className={sharedStyles.titleBorder}></div>
            <div className={styles.descText}>
              In the second stage, NFT fragments will be auctioned off to fund the development of
              the apartment foundation. It will run six months, and participants will be able to
              invest $US13,500/Fragment for a total NFT apartment price of $US94,500. The current
              auction price is 35% more than the previous one.
            </div>
          </div>
        </div>
        <div className={styles.rowImageDescContainer}>
          <div className={styles.imageContainer}>
            <img
              src={'/NFTStage3_1.svg'}
              className={sharedStyles.responsive}
              alt="NFT Stage 3 illustration"
            />
          </div>
          <div className={styles.rowDescContainer}>
            <h1 className={styles.descTitle}>
              Apartment Topping-Off Stage, with $17,500 each Fragment
            </h1>
            <div className={sharedStyles.titleBorder}></div>
            <div className={styles.descText}>
              In the third stage, NFT fragments will be auctioned off to fund the apartment's
              topping off. It will run eight months, and participants will be able to invest
              $US17,500 with a total NFT apartment pricing of $US122,500. The current auction price
              is 29% higher than the previous one.
            </div>
          </div>
        </div>
        <div className={styles.rowImageDescContainer}>
          <div className={styles.imageContainer}>
            <img
              src={'/NFTStage4.svg'}
              className={sharedStyles.responsive}
              alt="NFT Stage 4 illustration"
            />
          </div>
          <div className={styles.rowDescContainer}>
            <h1 className={styles.descTitle}>Soft Opening Stage, with $22,500 each Fragment</h1>
            <div className={sharedStyles.titleBorder}></div>
            <div className={styles.descText}>
              The fourth stage will auction off NFT fragments for eight months, with participants
              able to invest $US22,500 for a total NFT apartment price of $US157,500. The current
              auction price is 22% higher than the previous one.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h1 className={styles.textMintNow}>
            Are you interested? {isDesktop ? '' : <br />}Mint Now!
          </h1>
          <button className="min-w-max">Go to minting page</button>
        </div>
      </div>
    </div>
  );
};

export default MintingStageSection;
