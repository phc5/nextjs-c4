import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import ClientOnlyPortal from './Home/ClientOnlyPortal';
import breakpoints from '../constants/breakpoints';
import colors from '../constants/colors';

function Header({ modalOpen, setModalOpen }) {
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
        <StyledMenu loaded={loaded} onClick={event => setModalOpen(true)}>
          <StyledMenuText>MENU</StyledMenuText>
          <StyledImage src="/assets/misc/hamburger.svg" alt="hamburger-icon" />
        </StyledMenu>
      </StyledNav>
      <Portal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </StyledHeader>
  );
}

function Portal({ modalOpen, setModalOpen }) {
  return (
    <ClientOnlyPortal selector="#modal">
      <StyledMenuOverlay modalOpen={modalOpen}>
        <StyledInner>
          <Link href="/" passHref>
            <StyledMenuLink>Home</StyledMenuLink>
          </Link>
          <Link href="/about" passHref>
            <StyledMenuLink>About</StyledMenuLink>
          </Link>
          <Link href="/sermons" passHref>
            <StyledMenuLink>Sermons</StyledMenuLink>
          </Link>
          <Link href="/events" passHref>
            <StyledMenuLink>Events</StyledMenuLink>
          </Link>
          <Link href="/blog" passHref>
            <StyledMenuLink>Blog</StyledMenuLink>
          </Link>
          <Link href="/members" passHref>
            <StyledMenuLink>Members</StyledMenuLink>
          </Link>
          <Link href="/contact" passHref>
            <StyledMenuLink>Contact</StyledMenuLink>
          </Link>
        </StyledInner>
        <StyledCloseButton type="button" onClick={event => setModalOpen(false)}>
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
    </ClientOnlyPortal>
  );
}

/** NAVBAR STYLES **/
const StyledHeader = styled.div`
  background-color: transparent;
  color: ${colors.white};
  display: flex;
  position: absolute;
  width: 100%;
  display: flex;
  left: 0;
  top: 0;
  z-index: 10;

  filter: ${props => (props.modalOpen ? 'blur(.75rem)' : 'blur(0)')};
  transition: filter 0.1s ease-in;
`;

const StyledLogoContainer = styled.a`
  display: inline-block;
  height: auto;
  padding: 1em 1.25em;
  transform: ${props => (props.loaded ? 'none' : 'translate3d(-1em, 0, 0)')};
  transition: opacity 1s ease, transform 1s ease-out;
  transition-delay: 1.25s;
  opacity: ${props => (props.loaded ? 1 : 0)};

  img {
    height: 31px;
    width: 50px;

    @media screen and ${breakpoints.small} {
      height: 41px;
      width: 65px;
    }
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

const StyledMenu = styled.div`
  align-items: center;
  display: flex;
  opacity: ${props => (props.loaded ? 1 : 0)};
  padding: 1em 2em;
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
const StyledMenuOverlay = styled.nav`
  align-items: center;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  background: rgba(36, 41, 67, 0.9);
  box-shadow: none;
  height: 100%;
  left: 0;
  opacity: ${props => (props.modalOpen ? 1 : 0)};
  overflow: hidden;
  position: fixed;
  top: 0;
  transition: transform 0.2s ease-in, opacity 0.2s ease-in,
    visibility 0.2s ease-in;
  visibility: ${props => (props.modalOpen ? 'visible' : 'hidden')};
  width: 100%;
  z-index: 10002;
`;

const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 20em;

  a:not(:first-child) {
    border-top: solid 1px rgba(190, 190, 255, 0.2);
  }
`;

const StyledMenuLink = styled.a`
  color: ${colors.white};
  font-family: 'OpenSans700';
  font-size: 1.75em;
  letter-spacing: 0.25em;
  line-height: 3em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s ease-in-out;

  :hover {
    color: ${colors.primary};
  }
`;

const StyledCloseButton = styled.button`
  background-color: transparent;
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
