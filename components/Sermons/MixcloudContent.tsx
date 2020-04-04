import React, { useRef } from 'react';
import styled from 'styled-components';

import MixcloudTable from './MixcloudTable';
import colors from '../../constants/colors';

function MixcloudContent({ sermons }) {
  const iframeRef = useRef(null);

  if (sermons.length === 0) {
    return (
      <StyledListenMore isError>
        Oops...There was an error getting the sermons.
        <br />
        <br />
        Click{' '}
        <a
          href="https://www.mixcloud.com/c4ministry/"
          target="_blank"
          rel="noreferrer"
          aria-label="C4 Ministry's Mixcloud page"
        >
          here
        </a>{' '}
        to listen to the sermons on MixCloud!
      </StyledListenMore>
    );
  } else {
    const slug = sermons[0].slug;
    return (
      <>
        <StyledIframeContainer>
          <iframe
            ref={iframeRef}
            width="100%"
            height="60"
            src={`https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=/c4ministry/${slug}/`}
            title={slug}
          ></iframe>
        </StyledIframeContainer>

        <MixcloudTable sermons={sermons} iframeRef={iframeRef} />
        <StyledListenMore>
          Listen to more audio sermons{' '}
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
      </>
    );
  }
}

const StyledIframeContainer = styled.div`
  background-color: ${colors.white};
  height: 60px;
  margin-bottom: 2em;
  width: 100%;
`;

const StyledListenMore = styled.p<{ isError?: boolean }>`
  ${props =>
    !props.isError &&
    `
    align-self: flex-end;
    margin-top: 1.5em;
  `};

  a {
    color: white;
    transition: color 0.2 ease-in-out;

    :hover {
      color: ${colors.primary};
    }
  }
`;

export default MixcloudContent;
