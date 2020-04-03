// import styled from 'styled-components';
import Head from 'next/head';
import fetch from 'node-fetch';
import Layout from '../components/Layout';
import PageBanner from '../components/shared/PageBanner';
import SermonsContent from '../components/Sermons/SermonsContent';

function Sermons({ sermons }) {
  return (
    <>
      <Head>
        <title>Sermons | California Christ Community Church</title>
        <meta
          name="description"
          content="Listen to and view the sermons preached at California Christ Community Church every Sunday at 12:30pm."
        />
        <link
          rel="dns-prefetch preconnect"
          href="https://www.google-analytics.com"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
      </Head>
      <Layout>
        <PageBanner
          title="Sermons"
          subText="Listen in to our worship service and sermons!"
        />
        <SermonsContent sermons={sermons} lastSection />
      </Layout>
    </>
  );
}

/**
 * This is all done during build time
 *
 * 1. Fetch latest 10 sermons from Mixcloud
 * 2. Fetch data for each of these sermons
 * 3. Clean and select datapoints
 *     - description: this comes back in the form of "Date: 2020-01-01 | Scripture: Psalms 119 | Speaker: Pastor Daniel Park"
 *       to clean we split at | and remove labels.
 *         - date: date of sermon
 *         - passage: scripture passage
 *         - speaker: author of sermon
 *     - name: name of sermon
 *     - url: url to sermon on Mixcloud
 * 4. Returns array of sermon objects in the form of {date, passage, speaker, name, url}
 */
export async function getStaticProps() {
  const res = await fetch(
    'https://api.mixcloud.com/c4ministry/cloudcasts/?limit=5'
  );
  const mixCloudData = await res.json();
  const sermonSlugs = await mixCloudData.data.map(sermon => sermon.slug);
  const sermons = await Promise.all(
    sermonSlugs.map(async slug => {
      const sermonData = await fetch(
        `https://api.mixcloud.com/c4ministry/${slug}/`
      );
      const sermonJson = await sermonData.json();
      const { description, name, url } = sermonJson;
      const [date, passage, speaker] = description && description.split(' | ');
      return {
        date: date.replace(/Date: /g, ''),
        passage: passage.replace(/Scripture: /g, ''),
        speaker: speaker.replace(/Speaker: /g, ''),
        name,
        url,
        slug
      };
    })
  );

  return {
    props: {
      sermons
    }
  };
}

export default Sermons;
