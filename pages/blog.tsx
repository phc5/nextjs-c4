import Head from 'next/head';
import fetch from 'node-fetch';
import Layout from '../components/Layout';
import PageBanner from '../components/shared/PageBanner';
import BlogContent from '../components/Blog/BlogContent';

function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog | California Christ Community Church</title>
        <meta
          name="description"
          content="Read the writings and thoughts of California Christ Community Church's lead pastor Daniel Park."
        />
      </Head>
      <Layout>
        <PageBanner
          title="Blog"
          subText="Read the writings and thoughts of our lead pastor Daniel Park."
        />
        <BlogContent posts={posts} lastSection />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const mediumData = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@browncoatsdp'
  );

  const mediumJson = await mediumData.json();
  const posts = mediumJson.items.map(
    ({ title, pubDate, author, description, categories, link }) => {
      const trimmedString = description
        .replace(/(<([^>]+)>)/g, '')
        .substr(0, 240);
      const finalString =
        trimmedString.substr(
          0,
          Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
        ) + '...';

      return {
        author,
        content: finalString,
        date: pubDate.split(' ')[0],
        link,
        tags: categories,
        title
      };
    }
  );

  return {
    props: {
      posts: posts || []
    }
  };
}

export default Blog;
