import Head from 'next/head';
import Layout from '../components/Layout';
import PageBanner from '../components/shared/PageBanner';
import EventsContent from '../components/Events/EventsContent';

function Events() {
  return (
    <>
      <Head>
        <title>Events | California Christ Community Church</title>
        <meta
          name="description"
          content="View past and future events happening at California Christ Community Church!"
        />
        <link
          rel="dns-prefetch preconnect"
          href="https://www.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch preconnect"
          href="https://apis.google.com"
          crossOrigin="anonymous"
        />
      </Head>
      <Layout>
        <PageBanner
          title="Events"
          subText="See past and future events happening at C4!"
        />
        <EventsContent lastSection />
      </Layout>
    </>
  );
}

export default Events;
