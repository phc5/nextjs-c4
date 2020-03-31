import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
      </StyledWrapper>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  background-image: url('/assets/misc/background-banner.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.white};
  height: 100vh;
  margin-bottom: -6em;
  min-height: 50em;
  position: relative;
  top: -6em;
`;

const StyledWrapper = styled.div`
  align-items: center;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 30%,
    rgba(0, 0, 0, 0.8) 80%,
    rgba(0, 0, 0, 0.9) 100%
  );
  display: flex;
  height: 100%;
`;

const StyledInner = styled.div<{ isLoaded: boolean }>`
  filter: ${props => (props.isLoaded ? 'none' : 'blur(0.125em)')};
  margin: 0 auto;
  max-width: 65em;
  opacity: ${props => (props.isLoaded ? 1 : 0)};
  padding: 0;
  transform: ${props => (props.isLoaded ? 'none' : 'translate3d(-2em, 0, 0)')};
  transition: opacity 1.5s ease, transform 0.5s ease-out, filter 0.5s ease;

  max-width: 65em;
  width: calc(100% - 6em);
`;

const StyledH1 = styled.h1`
  font-family: 'OpenSans700';
  font-size: 2em;
  color: ${colors.white};
  font-weight: 600;
  line-height: 1.65;

  :after {
    content: '';
    background-color: ${colors.white};
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
  margin-bottom: 1em;
`;

export default Banner;
