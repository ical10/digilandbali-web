import {Text} from '@chakra-ui/react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import SvgIcon from '@mui/material/SvgIcon';

import {useState} from 'react';

import styles from './NFTCard.module.css';

import {Triangle} from 'iconsax-react';

type NFTCardProps = {
  imageUrl: string;
  qty: string;
};

const NFTCard = ({imageUrl, qty}: NFTCardProps) => {
  const [selectedCard, setSelectedCard] = useState<null | string>(null);
  const [isSelected, setSelected] = useState(false);

  const handleSelectCard = (selectedCardKey: string) => {
    setSelected(!isSelected);
    setSelectedCard(selectedCardKey);
  };

  return (
    <Card
      key={imageUrl}
      className={isSelected && `${imageUrl}` === selectedCard ? styles.selected : styles.default}
    >
      <CardActionArea onClick={() => handleSelectCard(`${imageUrl}`)}>
        <CardMedia style={{padding: 12}} component="img" image={imageUrl} alt="NFT image" />
        <div className="flex px-6 py-2 justify-center items-center gap-1">
          <div>
            <Triangle size="16" color="#131736" />
          </div>
          <Text>NFT Owned</Text>
          <Text>({qty})</Text>
        </div>
        <div
          id="fake-button"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            width: '100%',
            padding: '9px 12px',
            color: 'white',
            backgroundColor: isSelected && `${imageUrl}` === selectedCard ? '#406AFF' : '#161336',
            fontFamily: 'Syne',
          }}
        >
          <Text className="text-sm font-semibold normal-case">View Certificate</Text>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default NFTCard;