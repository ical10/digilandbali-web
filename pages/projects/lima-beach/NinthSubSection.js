import Image from 'next/image';

import styles from '../../../styles/limabeach/SecondSection.module.css';

const NinthSubSection = () => {
  return (
    <div className={styles.mintingStageContainer}>
      <div className={styles.mintingStageHeaderContainer}>
        <h1 className={styles.mintingStageTitle}>Lima Beach Minting Stage</h1>
        <div className={styles.mintingStageLabelContainer}>
          <label className={styles.mintingStageLabel}>
            Currently, the market price of a luxury apartment is $210,000. If you enter the project
            early, each NFT fragment will cost $10,000,
            <br /> making the total cost of seven NFT fragments around $70,000, a third (33%) of the
            current market price.
          </label>
        </div>
      </div>
      <div className={styles.mintingStageImageDescContainer}>
        <div className={styles.mintingStageFirstRowImageDescContainer}>
          <div className={styles.imageContainer}>
            <Image src={'/NFTStage1_1.svg'} width="320px" height="196px" layout="raw" />
          </div>
          <div className={styles.mintingStageFirstRowDescContainer}>
            <h1 className={styles.mintingStageDescTitle}>
              Physical Land Stage, with $10,000 each Fragment
            </h1>
            <label className={styles.mintingStageDescLabel}>
              The first NFT auction will be to buy physical land to develop the property. Anyone who
              participates in the first auction will mint an NFT fragment with a price of $10,000.
              Each NFT apartment will cost $70,000 in this stage, and it is the cheapest stage to
              get the best deal.
            </label>
          </div>
        </div>
        <div className={styles.mintingStageSecondRowImageDescContainer}>
          <div className={styles.imageContainer}>
            <Image src={'/NFTStage2_1.svg'} width="320px" height="196px" layout="raw" />
          </div>
          <div className={styles.mintingStageSecondRowDescContainer}>
            <h1 className={styles.mintingStageDescTitle}>
              Apartment Foundation Stage, with $13,500 each Fragment
            </h1>
            <label className={styles.mintingStageDescLabel}>
              The second stage will auction NFT fragments used to fund the construction of the
              apartment foundation. It will last for six months, and participants of the auction
              will have the chance to invest $13,500/Fragment with a total NFT apartment price of
              $94,500. The auction price is 35% more than the previous one.
            </label>
          </div>
        </div>
        <div className={styles.mintingStageThirdRowImageDescContainer}>
          <div className={styles.imageContainer}>
            <Image src={'/NFTStage3_1.svg'} width="320px" height="196px" layout="raw" />
          </div>
          <div className={styles.mintingStageThirdRowDescContainer}>
            <h1 className={styles.mintingStageDescTitle}>
              Apartment Topping-Off Stage, with $17,500 each Fragment
            </h1>
            <label className={styles.mintingStageDescLabel}>
              The third stage will auction NFT fragments used to fund the apartment’s topping off.
              It will last for eight months, and participants of the auction will have the chance to
              invest $17,500 with a total NFT apartment price of $122,500. The auction price is 29%
              more than the previous one.
            </label>
          </div>
        </div>
        <div className={styles.mintingStageFourthRowImageDescContainer}>
          <div className={styles.mintingStageNftImageContainer}>
            <div className={styles.imageContainer}>
              <Image src={'/NFTStage4.svg'} width="320px" height="196px" layout="raw" />
            </div>
          </div>
          <div className={styles.mintingStageFourthRowDescContainer}>
            <h1 className={styles.mintingStageDescTitle}>
              Soft Opening Stage, with $22,500 each Fragment
            </h1>
            <label className={styles.mintingStageDescLabel}>
              The fourth stage will auction NFT fragments for eight months, and participants of the
              auction will have the chance to invest $22,500 with a total NFT apartment price of
              $157,500. The auction price is 22% more than the previous one.
            </label>
          </div>
        </div>
      </div>
      <div className={styles.mintingStageCard}>
        <div className={styles.mintingStageCardContent}>
          <h1 className={styles.mintingStageTextMintNow}>Are you interested? Mint Now!</h1>
          <button>Go to minting page</button>
        </div>
      </div>
    </div>
  );
};

export default NinthSubSection;
