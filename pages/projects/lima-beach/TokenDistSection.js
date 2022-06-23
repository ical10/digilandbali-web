import sharedStyles from '../../../styles/limabeach/SharedStyles.module.css';
import styles from '../../../styles/limabeach/TokenDistSection.module.css';

const TokenDistSection = () => {
  return (
    <div className={styles.root}>
      <div className={styles.headerContainer}>
        <h1 className={sharedStyles.sectionTitleBig}>Token Distribution.</h1>
        <div className={styles.text}>1,771 NFT Fragment</div>
      </div>
      <div>
        <img src={'/Chart.svg'} className={sharedStyles.responsive} />
      </div>
    </div>
  );
};

export default TokenDistSection;
