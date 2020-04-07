import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DownArrow from '../shared/DownArrow';
import colors from '../../constants/colors';
import breakpoints from '../../constants/breakpoints';

function Banner() {
  let [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <>
      <StyledSection>
        <StyledWrapper>
          <StyledInner isLoaded={isLoaded}>
            <header>
              <StyledH1>
                Welcome to <br />
                California Christ Community Church
              </StyledH1>
            </header>

            <StyledSubtitle>
              <StyledParagraph>
                Come join us for worship on Sundays at 12:30pm.
              </StyledParagraph>
              <StyledParagraph>
                We are located at 8381 Katella Ave, Suite N, Stanton, CA 90680.
              </StyledParagraph>
            </StyledSubtitle>
          </StyledInner>
          <DownArrow isLoaded={isLoaded} />
        </StyledWrapper>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  align-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 30%,
      rgba(0, 0, 0, 0.8) 80%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url('/assets/misc/background-banner.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.white};
  display: flex;
  height: 100vh;
  margin-bottom: -3.25em;
  padding: 6em 0 2em 0;
  position: relative;
  top: -3.25em;

  @media screen and (${breakpoints.large}) {
    background-attachment: fixed;
  }
`;

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  margin: 0 auto;
`;

const StyledInner = styled.div<{ isLoaded: boolean }>`
  filter: ${props => (props.isLoaded ? 'none' : 'blur(0.125em)')};
  margin: 0 auto;
  max-width: 65em;
  opacity: ${props => (props.isLoaded ? 1 : 0)};
  padding: 3em;
  transform: ${props => (props.isLoaded ? 'none' : 'translate3d(-2em, 0, 0)')};
  transition: opacity 1.5s ease, transform 0.5s ease-out, filter 0.5s ease;
`;

const StyledH1 = styled.h1`
  font-family: 'OpenSans700';
  font-size: 2em;
  color: ${colors.white};
  font-weight: 600;
  line-height: 1.65;

  :after {
    background-color: ${colors.white};
    content: '';
    display: block;
    height: 2px;
    margin: 0.25em 0 0.75em 0;
    max-width: 100%;
    width: 100%;
  }

  @media screen and (${breakpoints.small}) {
    font-size: 3.25em;
  }
`;

const StyledSubtitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledParagraph = styled.p`
  line-height: 1.5em;
  margin-bottom: 1em;
`;

export default Banner;
