import Carousel from 'react-material-ui-carousel';

import Image from 'next/image';

const ImageCarousel = props => {
  var items = [
    {
      src: '/Discord_White.svg',
      width: props.width,
      height: props.height,
    },
    {
      src: '/Telegram_White.svg',
      width: props.width,
      height: props.height,
    },
    {
      src: '/Twitter_White.svg',
      width: props.width,
      height: props.height,
    },
    {
      src: '/Opensea_White.svg',
      width: props.width,
      height: props.height,
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

const Item = ({item}, i) => {
  return <Image src={item.src} width={item.width} height={item.height} alt={`${item.src}-${i}`} />;
};

export default ImageCarousel;
