import Head from 'next/head';
import Layout from '../components/Layout';
import PageBanner from '../components/shared/PageBanner';
import MembersContent from '../components/Members/MembersContent';

function Members() {
  return (
    <>
      <Head>
        <title>Members | California Christ Community Church</title>
        <meta
          name="description"
          content="View documents and information relevant to the members at California Christ Community Church."
        />
      </Head>
      <Layout>
        <PageBanner
          title="Members"
          subText="Documents and information relevant for those who are a part of the C4 community."
        />
        <MembersContent lastSection />
      </Layout>
    </>
  );
}

export default Members;
