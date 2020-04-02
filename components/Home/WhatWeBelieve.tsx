import React from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import breakpoints from '../../constants/breakpoints';
import whatWeBelieveData from '../../data/whatWeBelieve';

function WhatWeBelieve({ lastSection }: { lastSection?: boolean }) {
  const content = whatWeBelieveData.map(
    ({ title, description }, contentIndex) => {
      return (
        <StyledInnerDiv first={contentIndex === 0} key={title}>
          <h3>{title}</h3>
          {description.map((paragraph, paragraphIndex) => (
            <StyledParagraph
              first={contentIndex === 0}
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
    <StyledSection lastSection={lastSection}>
      <StyledInner>{content}</StyledInner>
    </StyledSection>
  );
}

const StyledSection = styled.section<{ lastSection: boolean }>`
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
  padding-top: 6em;
  position: relative;

  ${props => props.lastSection && `padding-bottom: 6em;`}

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

  & > div:first-child {
    grid-column: 1 / -1;
  }
`;

const StyledInnerDiv = styled.div<{ first: boolean }>`
  margin-bottom: 2.5em;
  justify-content: space-between;
`;

const StyledParagraph = styled.p<{ first?: boolean }>`
  color: ${colors.white};
  font-size: 1.1em;
  line-height: 1.65;
  ${props => props.first && 'padding-bottom: 1em;'}
  

  @media screen and (${breakpoints.medium}) {
    ${props => !props.first && 'padding-right: 2em;'}
  }
`;

export default WhatWeBelieve;
