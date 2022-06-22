import {
  ConservancyFeeIcon,
  DailyRoomServiceIcon,
  ElectricityIcon,
  FreeParkingIcon,
  InternetIcon,
  PropertyTaxIcon,
  SinkingFundsIcon,
  WaterServiceIcon,
} from '../../../src/components/icons/FacilityIcons';
import styles from '../../../styles/limabeach/FacilitySection.module.css';
import sharedStyles from '../../../styles/limabeach/SharedStyles.module.css';

const FacilitySection = () => {
  return (
    <>
      <div className={`${styles.flexColumnCenter} ${styles.root} ${sharedStyles.flexOrder4}`}>
        <div className={`${styles.flexColumnCenter} ${styles.descriptionWrapper}`}>
          <div className={styles.titleWrapper}>
            <h1 className={sharedStyles.sectionTitleBig}>
              Free 58 Years Hospitality Managements<span className={sharedStyles.titleDot}>.</span>
            </h1>
          </div>
          <div className={styles.subtitle}>
            Hospitality management has done the accounting and marketing of the units as luxury
            rooms with a smart hotel experience that will cover the entire cost of management for
            the next 58 years.
          </div>
        </div>
        <div className={styles.facilitiesContainer}>
          <div className={styles.rowFacilitiesContainer}>
            <div className={styles.facilityCardContainer}>
              <ConservancyFeeIcon />
              <div className={styles.cardText}>Conservancy Fee</div>
            </div>
            <div className={styles.facilityCardContainer}>
              <WaterServiceIcon />
              <div className={styles.cardText}>Water Service</div>
            </div>
            <div className={styles.facilityCardContainer}>
              <InternetIcon />
              <div className={styles.cardText}>Internet or Wifi</div>
            </div>
            <div className={styles.facilityCardContainer}>
              <DailyRoomServiceIcon />
              <div className={styles.cardText}>Daily Room Service</div>
            </div>
          </div>
          <div className={styles.rowFacilitiesContainer}>
            <div className={styles.facilityCardContainer}>
              <ElectricityIcon />
              <div className={styles.cardText}>Electricity Fee</div>
            </div>
            <div className={styles.facilityCardContainer}>
              <SinkingFundsIcon />
              <div className={styles.cardText}>Sinking Funds</div>
            </div>
            <div className={styles.facilityCardContainer}>
              <PropertyTaxIcon />
              <div className={styles.cardText}>Property Tax</div>
            </div>
            <div className={styles.facilityCardContainer}>
              <FreeParkingIcon />
              <div className={styles.cardText}>Free Parking</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacilitySection;
