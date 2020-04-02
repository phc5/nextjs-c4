import React from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import breakpoints from '../../constants/breakpoints';
import leadership from '../../data/leadership';

function ProfileSection({ lastSection }: { lastSection?: boolean }) {
  const profileSections = leadership.map(
    ({ title, name, info, imagePath }, index) => (
      <StyledSection>
        <StyledInner isEven={index % 2 === 0}>
          <StyledImage
            src={imagePath}
            isEven={index % 2 === 0}
            alt={`${name}-profile-pic`}
          />
          <StyledInfo>
            <StyledTitle>
              <StyledH2>{title}</StyledH2>
              <StyledH3>{name}</StyledH3>
            </StyledTitle>

            <StyledInfoParagraph>{info}</StyledInfoParagraph>
          </StyledInfo>
        </StyledInner>
      </StyledSection>
    )
  );

  return (
    <StyledProfileContainer lastSection={lastSection}>
      {profileSections}
    </StyledProfileContainer>
  );
}

const StyledProfileContainer = styled.div<{ lastSection: boolean }>`
  background-color: ${colors.blue};
  padding-top: 4em;
  ${props => props.lastSection && 'padding-bottom: 6em;'}
`;

const StyledSection = styled.section`
  color: ${colors.white};
  position: relative;
`;

const StyledInner = styled.div<{ isEven: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 4em 0 2em 0;
  margin: 0 auto;
  max-width: 65em;
  width: calc(100% - 6em);

  @media screen and (${breakpoints.small}) {
    flex-direction: ${props => (props.isEven ? 'row' : 'row-reverse')};
  }
`;

const StyledImage = styled.img<{ isEven: boolean }>`
  margin: 0 0 4em 0;
  width: 300px;

  @media screen and (${breakpoints.small}) {
    margin: ${props => (props.isEven ? '0 4em 0 0' : '0 0 0 4em')};
  }
`;

const StyledInfo = styled.div`
  width: 100%;
`;

const StyledTitle = styled.div`
  margin: 0 0 2em 0;
`;

const StyledH2 = styled.h2`
  color: ${colors.white};
  font-family: 'OpenSans700';
  font-size: 1.5em;
  font-weight: 600;
  line-height: 1.5;
  margin: 0 0 0.5em 0;
  text-align: left;

  :after {
    background-color: ${colors.white};
    content: '';
    display: block;
    height: 1px;
    margin: 0.325em 0 0.5em 0;
  }

  @media screen and (${breakpoints.small}) {
    font-size: 2em;
    width: max-content;
  }
`;

const StyledH3 = styled.h3`
  font-size: 1.5em;
`;

const StyledInfoParagraph = styled.p`
  font-family: 'OpenSansRegular';
  font-size: 1em;
  color: ${colors.white};
  line-height: 1.65;
  margin: 0 0 1em 0;
`;

export default ProfileSection;
