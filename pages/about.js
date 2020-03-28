import styled from 'styled-components';
import Head from 'next/head';
import Layout from '../components/Layout';
import AboutBanner from '../components/About/AboutBanner';
import ProfileSection from '../components/About/ProfileSection';
import leadership from '../data/leadership';

function Index() {
  const profileSections = leadership.map(
    ({ title, name, info, imagePath }, index) => (
      <ProfileSection
        title={title}
        name={name}
        info={info}
        imagePath={imagePath}
        key={name}
        isEven={index % 2 === 0}
      />
    )
  );

  return (
    <>
      <Head>
        <title>California Christ Community Church</title>
      </Head>
      <Layout>
        <div>
          <AboutBanner />
          <div>{profileSections}</div>
        </div>
      </Layout>
    </>
  );
}

const StyledDiv = styled.div`
  height: 1000px;
`;
export default Index;
