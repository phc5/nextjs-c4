import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ClientOnlyPortal from './Home/ClientOnlyPortal';
import colors from '../constants/colors';

function Header({ modalOpen, setModalOpen }) {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <StyledHeader modalOpen={modalOpen}>
      <Link href="/" passHref>
        <StyledLogoContainer loaded={loaded}>
          <img src="/assets/misc/c4-logo.png" alt="c4-logo" />
        </StyledLogoContainer>
      </Link>
      <StyledNav>
        <StyledMenu loaded={loaded} onClick={() => setModalOpen(true)}>
          <StyledMenuText>MENU</StyledMenuText>
          <StyledImage src="/assets/misc/hamburger.svg" alt="hamburger-icon" />
        </StyledMenu>
      </StyledNav>
      <Portal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        route={router.route}
      />
    </StyledHeader>
  );
}

function Portal({ modalOpen, setModalOpen, route }) {
  return (
    <ClientOnlyPortal selector="#modal">
      <StyledModal modalOpen={modalOpen}>
        <StyledMenuOverlay>
          <StyledInner>
            <Link href="/" passHref>
              <StyledMenuLink isMatchingRoute={route === '/'}>
                Home
              </StyledMenuLink>
            </Link>
            <Link href="/about" passHref>
              <StyledMenuLink isMatchingRoute={route === '/about'}>
                About
              </StyledMenuLink>
            </Link>
            <Link href="/sermons" passHref>
              <StyledMenuLink isMatchingRoute={route === '/sermons'}>
                Sermons
              </StyledMenuLink>
            </Link>
            <Link href="/events" passHref>
              <StyledMenuLink isMatchingRoute={route === '/events'}>
                Events
              </StyledMenuLink>
            </Link>
            <Link href="/blog" passHref>
              <StyledMenuLink isMatchingRoute={route === '/blog'}>
                Blog
              </StyledMenuLink>
            </Link>
            <Link href="/members" passHref>
              <StyledMenuLink isMatchingRoute={route === '/members'}>
                Members
              </StyledMenuLink>
            </Link>
            <Link href="/contact" passHref>
              <StyledMenuLink isMatchingRoute={route === '/contact'}>
                Contact
              </StyledMenuLink>
            </Link>
          </StyledInner>
          <StyledCloseButton type="button" onClick={() => setModalOpen(false)}>
            <svg
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" />
            </svg>
          </StyledCloseButton>
        </StyledMenuOverlay>
      </StyledModal>
    </ClientOnlyPortal>
  );
}

/** NAVBAR STYLES **/
const StyledHeader = styled.header<{ modalOpen: boolean }>`
  background-color: transparent;
  color: ${colors.white};
  display: flex;
  filter: ${props => (props.modalOpen ? 'blur(.75rem)' : 'blur(0)')};
  height: 3.25em;
  left: 0;
  letter-spacing: 0.25em;
  line-height: 3.25em;
  position: absolute;
  top: 0;
  transition: filter 0.1s ease-in;
  width: 100%;
  z-index: 10;
`;

const StyledLogoContainer = styled.a<{ loaded: boolean }>`
  display: inline-block;
  height: auto;
  opacity: ${props => (props.loaded ? 1 : 0)};
  padding: 1em 1.25em 0 1.25em;
  transform: ${props => (props.loaded ? 'none' : 'translate3d(-1em, 0, 0)')};
  transition: opacity 1s ease, transform 1s ease-out;
  transition-delay: 1.25s;

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

const StyledMenu = styled.div<{ loaded: boolean }>`
  align-items: center;
  display: flex;
  opacity: ${props => (props.loaded ? 1 : 0)};
  padding: 2em 2em 0 2em;
  transform: ${props => (props.loaded ? 'none' : 'translate3d(1em, 0, 0)')};
  transition: opacity 1s ease, transform 1s ease-out;
  transition-delay: 1.25s;

  > * {
    :hover {
      cursor: pointer;
    }
  }
`;

const StyledMenuText = styled.p`
  font-family: 'OpenSans700';
  font-size: 1em;
  margin: 0 0.75em 0 0;
`;

const StyledImage = styled.img`
  height: 20px;
  width: 20px;
`;

/** MODAL STYLES **/
const StyledModal = styled.nav<{ modalOpen: boolean }>`
  align-items: center;
  background: ${colors.blue};
  box-shadow: none;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  height: 100%;
  left: 0;
  opacity: ${props => (props.modalOpen ? 1 : 0)};
  overflow: hidden;
  padding: 3em 2em;
  position: absolute;
  top: 0;
  transition: transform 0.35s ease, opacity 0.35s ease, visibility 0.35s;
  visibility: ${props => (props.modalOpen ? 'visible' : 'hidden')};
  width: 100%;
  z-index: 10002;
`;

const StyledMenuOverlay = styled.div`
  max-width: 100%;
  max-height: 100vh;
  overflow: auto;
  text-align: center;
  width: 18em;
`;

const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 18em;

  a:not(:first-child) {
    border-top: solid 1px rgba(190, 190, 255, 0.2);
  }
`;

const StyledMenuLink = styled.a<{ isMatchingRoute: boolean }>`
  color: ${colors.white};
  font-family: 'OpenSans700';
  font-size: em;
  letter-spacing: 0.25em;
  line-height: 4em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s ease-in-out;

  :hover {
    color: ${colors.primary};
  }

  ${props =>
    props.isMatchingRoute &&
    `
    color: ${colors.disabled};
    pointer-events: none;
    user-select: none;
  `}
`;

const StyledCloseButton = styled.button`
  background-color: ${colors.transparent};
  border: none;
  padding: 2rem;
  position: absolute;
  right: 0;
  top: 0;

  svg {
    transition: fill 0.2s ease-in-out;
  }

  svg:hover {
    cursor: pointer;
    fill: ${colors.primary};
  }
`;

export default Header;
