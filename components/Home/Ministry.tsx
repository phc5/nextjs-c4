import React from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import breakpoints from '../../constants/breakpoints';

function Ministry() {
  return (
    <StyledSection>
      <StyledMission first>
        <h3>Who We Are</h3>
        <p>
          C4 is a congregation of the Presbyterian Church in America. We submit
          to the Westminster Standards along with the Nicene Creed, and see them
          as presenting an accurate and faithful summary of the Bible's
          teachings.
        </p>
      </StyledMission>

      <StyledMission>
        <h3>Mission to the City</h3>
        <p>
          We are providentially located in the city of Stanton, Orange County,
          California. And as part of the city, we want to be faithful followers
          of God; because God cares for the city of Stanton -- and the world for
          that matter -- we should care for them as well! That is our purpose.
          Therefore at C4, we are not seeking to just occupy a building, but to
          engage the city with the Gospel; trying to be an example of what a
          community is to look like for the city.
        </p>
      </StyledMission>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  align-items: stretch;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;

  @media screen and (${breakpoints.medium}) {
    flex-direction: row;
  }
`;

const StyledMission = styled.div<{ first?: boolean }>`
  background-color: ${props =>
    props.first ? `${colors.primary}` : `${colors.green}`};
  flex: 1;
  opacity: 0.95;
  padding: 3em;

  @media screen and (${breakpoints.medium}) {
    flex: ${props => (props.first ? '40%' : '60%')};
    padding: 5.5em;
  }

  h3 {
    font-family: 'OpenSans700';
    font-size: 1.5em;
    margin-bottom: 0.5em;
    text-transform: uppercase;

    @media screen and (${breakpoints.small}) {
      font-size: 1.75em;
    }
  }

  p {
    font-size: 1.1em;
    line-height: 1.65;
  }
`;

export default Ministry;
