import Head from 'next/head';
import Layout from '../components/Layout';
import AboutBanner from '../components/About/AboutBanner';
import ProfileSection from '../components/About/ProfileSection';

function Index() {
  return (
    <>
      <Head>
        <title>About | California Christ Community Church</title>
      </Head>
      <Layout>
        <div>
          <AboutBanner />
          <ProfileSection lastSection />
        </div>
      </Layout>
    </>
  );
}

export default Index;
