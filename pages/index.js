import Layout from '../src/components/Layout';
import AboutSection from './homepage/aboutSection';
import AdvisorSection from './homepage/advisorSection';
import FragmentSection from './homepage/fragmentSection';
import FusionSection from './homepage/fusionSection';
import HomeSection from './homepage/homeSection';
import RevealSection from './homepage/revealSection';
import SponsorSection from './homepage/sponsorSection';
import StakingSection from './homepage/stakingSection';

import Meta from 'src/components/Meta';

export default function Home() {
  return (
    <Layout>
      <div>
        <Meta title="DigilandBali | Homepage" />
        <HomeSection />
        <SponsorSection />
        <AboutSection />
        <FusionSection />
        <StakingSection />
        <FragmentSection />
        <RevealSection />
        <AdvisorSection />
        <div className="relative w-full h-[120px] mb-12 tablet:mb-32">
          <img src="/Union.svg" className="w-full h-full relative" alt="tes" />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
