import React, { useState } from 'react';
import Header from './Header';
// import Footer from './Footer';
import styled from 'styled-components';

const Layout = props => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <StyledWrapper>
      <Header setModalOpen={setModalOpen} modalOpen={modalOpen} />
      <div>{props.children}</div>
      {/* <Footer /> */}
    </StyledWrapper>
  );
};

// const StyledContainer = styled.div<{ modalOpen: boolean }>`
//   font-family: 'OpenSansRegular', sans-serif;
//   margin: 0 auto;
//   filter: ${props => (props.modalOpen ? 'blur(.75rem)' : 'blur(0)')};
//   transition: filter 0.1s ease-in;
// `;

const StyledWrapper = styled.div`
  padding-top: 3.25em;
  position: relative;
`;

export default Layout;
