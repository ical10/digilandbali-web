import SectionGroup from './lima-beach/SectionGroup';

import Layout from 'src/components/Layout';

const LimaBeachPage = () => {
  return (
    <Layout>
      <div>
        <SectionGroup />
      </div>
    </Layout>
  );
};

export default LimaBeachPage;

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
