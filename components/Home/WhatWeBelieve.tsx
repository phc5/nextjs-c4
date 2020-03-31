import React from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import breakpoints from '../../constants/breakpoints';
import whatWeBelieveData from '../../data/whatWeBelieve';

function WhatWeBelieve() {
  const content = whatWeBelieveData.map(({ title, description }, i) => {
    return (
      <StyledInnerDiv first={i === 0} key={title}>
        <h3>{title}</h3>
        {description.map((paragraph, i) => (
          <StyledParagraph key={i}>{paragraph}</StyledParagraph>
        ))}
      </StyledInnerDiv>
    );
  });

  return (
    <StyledSection>
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
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const StyledInner = styled.div`
  color: ${colors.white};
  display: flex;
  flex-wrap: wrap;
  padding: 3em;

  @media screen and (${breakpoints.medium}) {
    padding: 5.5em;
  }

  h3 {
    font-family: 'OpenSans700';
    font-size: 1.75em;
    text-transform: uppercase;
    width: 100%;

    :after {
      background-color: ${colors.white};
      content: '';
      display: block;
      height: 2px;
      margin: 0.325em 0 0.75em 0;
      width: 100%;
    }

    @media screen and (${breakpoints.medium}) {
      font-size: 2em;
      width: fit-content;
    }
  }
`;

const StyledInnerDiv = styled.div<{ first: boolean }>`
  flex: 100%;
  margin-bottom: 1.5em;
  padding: 1.5em;

  @media screen and (${breakpoints.medium}) {
    flex: ${props => (props.first ? '100%' : '33%')};
  }
`;

const StyledParagraph = styled.p`
  color: ${colors.white};
  font-size: 1.15em;
  line-height: 1.65;
  margin-bottom: 1em;
`;

export default WhatWeBelieve;
