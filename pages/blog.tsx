import Head from 'next/head';
import fetch from 'node-fetch';
import Layout from '../components/Layout';
import PageBanner from '../components/shared/PageBanner';
import BlogContent from '../components/Blog/BlogContent';

function Blog({ mediumPosts, tumblrPosts }) {
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
        <BlogContent mediumPosts={mediumPosts} tumblrPosts={tumblrPosts} lastSection />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const mediumData = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@browncoatsdp'
  );

  const mediumJson = await mediumData.json();
  const mediumPosts = mediumJson.items.map(
    ({ title, pubDate, author, description, categories, link }) => {
      const trimmedString = description
        .replace(/(<([^>]+)>)/g, '')
        .substr(0, 240);
      const snippet =
        trimmedString.substr(
          0,
          Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
        ) + '...';

      return {
        author,
        content: snippet,
        date: pubDate.split(' ')[0],
        link,
        tags: categories,
        title
      };
    }
  );

  const tumblrData = await fetch(
    `https://api.tumblr.com/v2/blog/c4ministry-blog.tumblr.com/posts/text?filter=text&api_key=${process.env.tumblrApiKey}`
  );

  const tumblrJson = await tumblrData.json();
  const tumblrPosts = await tumblrJson.response.posts.map(
    ({ title, body, tags, post_url, date }) => {
      const trimmedString = body
      .replace(/(<([^>]+)>)/g, '')
      .substr(0, 240);
    const snippet =
      trimmedString.substr(
        0,
        Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
      ) + '...';

      return {
        title,
        body: snippet,
        tags,
        post_url,
        date: date.split(' ')[0]
      };
    }
  );

  return {
    props: {
      mediumPosts: mediumPosts || [],
      tumblrPosts: tumblrPosts || []
    }
  };
}

export default Blog;
