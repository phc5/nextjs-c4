import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Layout = props => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <StyledWrapper>
      <Header setModalOpen={setModalOpen} modalOpen={modalOpen} />
      <StyledContainer modalOpen={modalOpen}>{props.children}</StyledContainer>
      <Footer />
    </StyledWrapper>
  );
};

const StyledContainer = styled.div<{ modalOpen: boolean }>`
  font-family: 'OpenSansRegular', sans-serif;
  margin: 0 auto;
  filter: ${props => (props.modalOpen ? 'blur(.75rem)' : 'blur(0)')};
  transition: filter 0.1s ease-in;
`;

const StyledWrapper = styled.div`
  position: relative;
  padding-top: 6em;
`;

export default Layout;
