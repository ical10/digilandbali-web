import Carousel from 'react-material-ui-carousel';

import sharedStyles from '../../styles/limabeach/SharedStyles.module.css';

const ImageCarousel = props => {
  const items = [
    {
      src: '/Headerslide.svg',
      width: props.width,
      height: props.height,
    },
    {
      src: '/Headerslide.svg',
      width: props.width,
      height: props.height,
    },
    {
      src: '/Headerslide.svg',
      width: props.width,
      height: props.height,
    },
    {
      src: '/Headerslide.svg',
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
  return (
    <div className={sharedStyles.responsive}>
      <img src={item.src} alt={`${item.src}-${i}`} />
    </div>
  );
};

export default ImageCarousel;
