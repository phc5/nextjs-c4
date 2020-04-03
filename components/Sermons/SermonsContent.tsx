import React from 'react';
import styled from 'styled-components';
import YoutubeContent from './YoutubeContent';
import colors from '../../constants/colors';
import MixCloudContent from './MixcloudContent';

function SermonsContent({
  lastSection,
  sermons,
  videos
}: {
  lastSection?: boolean;
  sermons: any;
  videos: any;
}) {
  return (
    <StyledProfileContainer lastSection={lastSection}>
      <StyledSection>
        <StyledInner>
          <StyledMediaSection>
            <h3>Mixcloud Audio Sermons</h3>
            <MixCloudContent sermons={sermons} />
          </StyledMediaSection>
          <StyledMediaSection>
            <h3>YouTube Video Sermons</h3>
            <YoutubeContent videos={videos} />
          </StyledMediaSection>
        </StyledInner>
      </StyledSection>
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

const StyledInner = styled.div`
  padding: 4em 0 2em 0;
  margin: 0 auto;
  max-width: 65em;
  width: calc(100% - 6em);
`;

const StyledMediaSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 4em;
  width: 100%;

  h3 {
    align-self: flex-start;
    font-size: 1.5em;
    margin-bottom: 2em;
  }
`;

export default SermonsContent;
