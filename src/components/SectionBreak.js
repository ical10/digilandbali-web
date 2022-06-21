import styles from '../../styles/limabeach/SectionBreak.module.css';

const SectionBreak = () => {
  const images = [
    {
      src: '/Tendermint.svg',
    },
    {
      src: '/Fanthom.svg',
    },
    {
      src: '/Tendermint.svg',
    },
  ];
  return (
    <div className={styles.root}>
      {images.map(image => (
        <div>
          <img src={image.src} />
        </div>
      ))}
    </div>
  );
};

export default SectionBreak;
