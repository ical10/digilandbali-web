import Carousel from 'react-material-ui-carousel';

import sharedStyles from '../../styles/limabeach/SharedStyles.module.css';

const ImageCarousel = props => {
  const item = {
    src: '/Headerslide.svg',
    width: props.width,
    height: props.height,
    alt: 'image illustration',
  };

  const items = [item, item, item, item];

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
