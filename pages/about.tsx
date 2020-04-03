import Head from 'next/head';
import Layout from '../components/Layout';
import PageBanner from '../components/shared/PageBanner';
import ProfileSection from '../components/About/ProfileSection';

function Index() {
  return (
    <>
      <Head>
        <title>About | California Christ Community Church</title>
        <meta
          name="description"
          content="Meet the leaders and staff of California Christ Community Church."
        />
      </Head>
      <Layout>
        <div>
          <PageBanner
            title="Leadership"
            subText="The purpose of the Leadership Team is to work with the lead pastor
              to establish the strategic direction of the church and to provide
              accountability so that the ongoing ministries of the church are
              properly established and performed."
          />
          <ProfileSection lastSection />
        </div>
      </Layout>
    </>
  );
}

export default Index;
