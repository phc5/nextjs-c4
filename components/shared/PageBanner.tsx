import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import breakpoints from '../../constants/breakpoints';

function PageBanner({ title, subText }: { title: string; subText?: string }) {
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
            <StyledH1>{title}</StyledH1>
          </header>

          {subText && (
            <StyledSubtitle>
              <StyledParagraph>{subText}</StyledParagraph>
            </StyledSubtitle>
          )}
        </StyledInner>
      </StyledWrapper>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  background-image: url('/assets/misc/background-banner.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.white};
  height: 75vh;
  margin-bottom: -6em;
  min-height: 40em;
  position: relative;
  top: -6em;

  @media screen and (${breakpoints.large}) {
    background-attachment: fixed;
  }
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
  position: relative;
  transform: ${props => (props.isLoaded ? 'none' : 'translate3d(-2em, 0, 0)')};
  transition: opacity 1.5s ease, transform 0.5s ease-out, filter 0.5s ease;
  width: calc(100% - 50px);
`;

const StyledH1 = styled.h1`
  color: ${colors.white};
  font-family: 'OpenSans700';
  font-size: 2em;
  font-weight: 600;
  line-height: 1.65;
  margin: 0 0 0.75em 0;

  :after {
    background-color: ${colors.white};
    content: '';
    display: block;
    height: 2px;
    margin: 0.325em 0 0.5em 0;
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
`;

export default PageBanner;
