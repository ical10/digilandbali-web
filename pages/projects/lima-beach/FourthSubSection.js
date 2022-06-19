import Image from 'next/image';

import {
  ConservancyFeeIcon,
  DailyRoomServiceIcon,
  ElectricityIcon,
  FreeParkingIcon,
  InternetIcon,
  PlayButtonIcon,
  PropertyTaxIcon,
  SinkingFundsIcon,
  WaterServiceIcon,
} from '../../../src/components/icons/FacilityIcons';
import styles from '../../../styles/limabeach/SecondSection.module.css';

const FourthSubSection = () => {
  return (
    <>
      <div className={styles.fourthSubSection}>
        <div className={styles.descriptionWrapper}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.titleBig}>Free 58 Years Hospitality Managements.</h1>
          </div>
          <div className={styles.subtitleWrapper}>
            <label>
              Hospitality management has done the accounting and marketing of the units as luxury
              rooms with a smart hotel experience that will cover the entire cost of management for
              the next 58 years.
            </label>
          </div>
        </div>
        <div className={styles.facilitiesContainer}>
          <div className={styles.rowFacilitiesContainer}>
            <div className={styles.facilityCardContainer}>
              <ConservancyFeeIcon />
              <label className={styles.cardLabel}>Conservancy Fee</label>
            </div>
            <div className={styles.facilityCardContainer}>
              <WaterServiceIcon />
              <label className={styles.cardLabel}>Water Service</label>
            </div>
            <div className={styles.facilityCardContainer}>
              <InternetIcon />
              <label className={styles.cardLabel}>Internet or Wifi</label>
            </div>
            <div className={styles.facilityCardContainer}>
              <DailyRoomServiceIcon />
              <label className={styles.cardLabel}>Daily Room Service</label>
            </div>
          </div>
          <div className={styles.rowFacilitiesContainer}>
            <div className={styles.facilityCardContainer}>
              <ElectricityIcon />
              <label className={styles.cardLabel}>Electricity Fee</label>
            </div>
            <div className={styles.facilityCardContainer}>
              <SinkingFundsIcon />
              <label className={styles.cardLabel}>Sinking Funds</label>
            </div>
            <div className={styles.facilityCardContainer}>
              <PropertyTaxIcon />
              <label className={styles.cardLabel}>Property Tax</label>
            </div>
            <div className={styles.facilityCardContainer}>
              <FreeParkingIcon />
              <label className={styles.cardLabel}>Free Parking</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthSubSection;
