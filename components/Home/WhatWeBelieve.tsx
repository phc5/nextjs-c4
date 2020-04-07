import React from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import breakpoints from '../../constants/breakpoints';
import whatWeBelieveData from '../../data/whatWeBelieve';

function WhatWeBelieve() {
  const content = whatWeBelieveData.map(
    ({ title, description }, contentIndex) => {
      return (
        <StyledInnerDiv third={contentIndex === 2} key={title}>
          <h3>{title}</h3>
          {description.map((paragraph, paragraphIndex) => (
            <StyledParagraph
              third={contentIndex === 2}
              key={`${title}-paragraph-${paragraphIndex}`}
            >
              {paragraph}
            </StyledParagraph>
          ))}
        </StyledInnerDiv>
      );
    }
  );

  return (
    <StyledSection data-scroll-js>
      <StyledInner>{content}</StyledInner>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.6) 30%,
      rgba(0, 0, 0, 0.7) 80%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url('/assets/misc/background-nature.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4em 0;
  position: relative;

  @media screen and (${breakpoints.large}) {
    background-attachment: fixed;
  }
`;

const StyledInner = styled.div`
  color: ${colors.white};
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 0 auto;
  max-width: 100em;
  padding: 3em;

  @media screen and (${breakpoints.medium}) {
    grid-template-columns: repeat(3, 1fr);
    padding: 4em;
  }

  h3 {
    font-family: 'OpenSans700';
    font-size: 1.5em;
    margin-bottom: 0.5em;
    text-transform: uppercase;
    width: 100%;

    @media screen and (${breakpoints.medium}) {
      font-size: 1.75em;
    }
  }

  @media screen and (${breakpoints.medium}) {
    & > div:nth-child(2) {
      grid-column: 2 / 4;
    }

    & > div:nth-child(3) {
      grid-column: 1 / -1;
    }
  }
`;

const StyledInnerDiv = styled.div<{ third: boolean }>`
  margin-bottom: 3em;
  justify-content: space-between;
`;

const StyledParagraph = styled.p<{ third?: boolean }>`
  color: ${colors.white};
  font-size: 1.1em;
  line-height: 1.65;
  ${props => props.third && 'padding-bottom: 1em;'}
  

  @media screen and (${breakpoints.medium}) {
    ${props => !props.third && 'padding-right: 2em;'}
  }
`;

export default WhatWeBelieve;
