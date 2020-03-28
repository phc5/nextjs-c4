import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import breakpoints from '../constants/breakpoints';

function Banner() {
  return (
    <StyledSection>
      <StyledC4Info>
        <StyledSubtitle>
          <StyledParagraph>
            Come join us for worship on Sundays at 12:30pm.
          </StyledParagraph>
          <StyledParagraph>
            We are located at 8381 Katella Ave, Suite N, Stanton, CA 90680.
          </StyledParagraph>
        </StyledSubtitle>
      </StyledC4Info>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  background-color: #2a2f4a;
  color: ${colors.white};
  position: relative;
`;

const StyledC4Info = styled.div``;

const StyledSubtitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledParagraph = styled.p`
  margin-bottom: 1em;
`;

export default Banner;
