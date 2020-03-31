import styled from 'styled-components';
import Layout from '../components/Layout';

function Blog() {
  return (
    <Layout>
      <StyledDiv />
    </Layout>
  );
}

const StyledDiv = styled.div`
  height: 1000px;
`;
export default Blog;
