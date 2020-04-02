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
