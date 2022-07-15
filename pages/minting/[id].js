import {createAlchemyWeb3} from '@alch/alchemy-web3';

import contractABI from 'public/contracts/LBSFragment.json';
import ContentComponent from 'src/components/ContentComponent';
import Layout from 'src/components/Layout';
import {
  getActiveStage,
  getMaxSaleSupply,
  getNFTImage,
  getPrice,
  getTokenToMintedQty,
} from 'src/helpers/metamask-interact';

const MintPage = ({price, activeStage, maxSupply, mintedQty, image}) => {
  return (
    <Layout>
      <ContentComponent
        price={price}
        activeStage={activeStage}
        maxSupply={maxSupply}
        mintedQty={mintedQty}
        image={image}
      />
    </Layout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{params: {id: 'lima-beach'}}],
    fallback: false,
  };
}

export async function getStaticProps() {
  const contractAddress = '0x38843520A521c72FD35DFAf0E0595553fe7ed0D9';

  const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;

  const web3 = createAlchemyWeb3(alchemyKey);

  const price = await getPrice(web3, contractAddress, contractABI);
  const activeStage = await getActiveStage(web3, contractAddress, contractABI);
  const maxSupply = await getMaxSaleSupply(web3, contractAddress, contractABI);
  const mintedQty = await getTokenToMintedQty(web3, contractAddress, contractABI);
  const image = await getNFTImage(web3, contractAddress, contractABI);

  return {
    props: {
      price,
      activeStage,
      maxSupply,
      mintedQty,
      image,
    },
  };
}

export default MintPage;
