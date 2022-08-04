import ContentComponent from 'src/components/ContentComponent';
import Layout from 'src/components/Layout';
import Meta from 'src/components/Meta';
import SafeHydrate from 'src/components/SafeHydrate';

const MintPage = () => {
  return (
    <Layout>
      <Meta title="DigilandBali | Mint Lima Beach NFT" />
      <SafeHydrate>
        <ContentComponent />
      </SafeHydrate>
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
