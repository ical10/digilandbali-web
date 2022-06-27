import styles from '../../../styles/limabeach/MintingStage.module.css';
import sharedStyles from '../../../styles/limabeach/SharedStyles.module.css';

const MintingStageSection = () => {
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
              The first NFT auction will be to buy physical land to develop the property. Anyone who
              participates in the first auction will mint an NFT fragment with a price of $10,000.
              Each NFT apartment will cost $70,000 in this stage, and it is the cheapest stage to
              get the best deal.
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
              The second stage will auction NFT fragments used to fund the construction of the
              apartment foundation. It will last for six months, and participants of the auction
              will have the chance to invest $13,500/Fragment with a total NFT apartment price of
              $94,500. The auction price is 35% more than the previous one.
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
              The third stage will auction NFT fragments used to fund the apartment’s topping off.
              It will last for eight months, and participants of the auction will have the chance to
              invest $17,500 with a total NFT apartment price of $122,500. The auction price is 29%
              more than the previous one.
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
              The fourth stage will auction NFT fragments for eight months, and participants of the
              auction will have the chance to invest $22,500 with a total NFT apartment price of
              $157,500. The auction price is 22% more than the previous one.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h1 className={styles.textMintNow}>
            Are you interested? <br />
            Mint Now!
          </h1>
          <button className="min-w-max">Go to minting page</button>
        </div>
      </div>
    </div>
  );
};

export default MintingStageSection;
