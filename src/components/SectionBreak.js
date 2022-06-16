import Image from 'next/image';

import styles from '../../styles/limabeach/SectionBreak.module.css';

const SectionBreak = ({width, height}) => {
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
        <Image src={image.src} width={width} height={height} />
      ))}
    </div>
  );
};

export default SectionBreak;
