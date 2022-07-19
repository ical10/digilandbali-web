import ContentComponent from 'src/components/ContentComponent';
import Layout from 'src/components/Layout';
import Meta from 'src/components/Meta';

const MintPage = () => {
  return (
    <Layout>
      <Meta title="DigilandBali | Mint Lima Beach NFT" />
      <ContentComponent />
    </Layout>
  );
};

export default MintPage;

export async function getStaticPaths() {
  return {
    paths: [{params: {id: 'lima-beach'}}],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
