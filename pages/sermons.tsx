import Head from 'next/head';
import fetch from 'node-fetch';
import parseISO from 'date-fns/parseISO';
import formatISO from 'date-fns/formatISO';
import Layout from '../components/Layout';
import PageBanner from '../components/shared/PageBanner';
import SermonsContent from '../components/Sermons/SermonsContent';

function Sermons({ sermons, videos }) {
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
        <SermonsContent sermons={sermons} videos={videos} lastSection />
      </Layout>
    </>
  );
}

/**
 * This is all done during build time
 *
 * ---Mixcloud---
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
 * 4. Returns array of sermon objects in the form of { date, passage, speaker, name, url }
 * ---Mixcloud---
 *
 * ---YouTube---
 * 1. fetch videos from c4 youtube page
 * 2. Clean and select datapoints
 *    - id: video id to use for embded player
 *    - title: title to use for table
 *    - date: date returned from api is ISO 8601 format...parse and format to YYYY-MM-DD
 * 3. Return array of video objects in the form of { id, title, date }
 * ---YouTube---
 */
export async function getStaticProps() {
  const mixCloudResponse = await fetch(
    'https://api.mixcloud.com/c4ministry/cloudcasts/?limit=5'
  );
  const mixCloudData = await mixCloudResponse.json();
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

  const youtubeResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.youtubeApiKey}&channelId=${process.env.youtubeChannelId}&part=snippet,id&order=date&type=video&maxResults=5`
  );
  const youtubeJson = await youtubeResponse.json();
  const videos =
    youtubeJson &&
    youtubeJson.items &&
    youtubeJson.items.map(video => {
      return {
        id: video.id.videoId,
        title: video.snippet.title,
        date: formatISO(parseISO(video.snippet.publishedAt), {
          representation: 'date'
        })
      };
    });

  return {
    props: {
      sermons: sermons || [],
      videos: videos || []
    }
  };
}

export default Sermons;
