import Layout from 'src/components/Layout';
import MintComponent from 'src/components/MintComponent';

const MintPage = () => {
  return (
    <Layout>
      <MintComponent />
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
