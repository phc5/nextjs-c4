import React, { useRef } from 'react';
import styled from 'styled-components';
import SermonsTable from './SermonsTable';
import colors from '../../constants/colors';

function ProfileSection({
  lastSection,
  sermons
}: {
  lastSection?: boolean;
  sermons: any;
}) {
  const iframeRef = useRef(null);
  const slug = sermons[0].slug;

  return (
    <StyledProfileContainer lastSection={lastSection}>
      <StyledSection>
        <StyledInner>
          <StyledIframeContainer>
            <iframe
              ref={iframeRef}
              width="100%"
              height="60"
              src={`https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=/c4ministry/${slug}/`}
              title={slug}
            ></iframe>
          </StyledIframeContainer>

          <SermonsTable sermons={sermons} iframeRef={iframeRef} />
          <StyledListenMore>
            Listen to more sermons like these{' '}
            <a
              href="https://www.mixcloud.com/c4ministry/"
              target="_blank"
              aria-label="C4 Ministry's Mixcloud"
              rel="noreferrer"
            >
              here
            </a>
            .
          </StyledListenMore>
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
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 4em 0 2em 0;
  margin: 0 auto;
  max-width: 65em;
  width: calc(100% - 6em);
`;

const StyledIframeContainer = styled.div`
  background-color: ${colors.white};
  height: 60px;
  margin-bottom: 2em;
  width: 100%;
`;

const StyledListenMore = styled.p`
  align-self: flex-end;
  margin-top: 1.5em;

  a {
    color: white;
    transition: color 0.2 ease-in-out;

    :hover {
      color: ${colors.primary};
    }
  }
`;

export default ProfileSection;
