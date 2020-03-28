
import styled from 'styled-components';
import Layout from '../components/Layout';
import Banner from '../components/Home/Banner';
import Ministry from '../components/Home/Ministry';
import WhatWeBelieve from '../components/Home/WhatWeBelieve';

function Index() {
  return (
    <Layout>
      <Banner />
      <Ministry />
      <WhatWeBelieve />
    </Layout>
  );
}

export default Index;
