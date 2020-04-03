import Head from 'next/head';
import Layout from '../components/Layout';
import Banner from '../components/Home/Banner';
import Ministry from '../components/Home/Ministry';
import WhatWeBelieve from '../components/Home/WhatWeBelieve';

function Index() {
  return (
    <>
      <Head>
        <title>Home | California Christ Community Church</title>
        <meta
          name="description"
          content="California Christ Community Church is a congregation of the Presbyterian Church in America who submit to the Westminster Standards, along with the Nicene Creed, and see them as presenting an accurate and faithful summary of the Bible's teachings."
        />
      </Head>
      <Layout>
        <Banner />
        <Ministry />
        <WhatWeBelieve lastSection />
      </Layout>
    </>
  );
}

export default Index;
