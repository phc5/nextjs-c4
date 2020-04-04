import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import YoutubeTable from './YoutubeTable';
import colors from '../../constants/colors';

declare global {
  interface Window {
    gapi: any;
  }
}

function YoutubeContent({ videos }) {
  if (videos.length === 0) {
    return (
      <StyledViewMore isError>
        Oops...There was an error getting the videos.
        <br />
        <br />
        Click{' '}
        <a
          href="https://www.youtube.com/channel/UCRKb2u0ePuQ9t6TnKVfe1Gw/videos"
          target="_blank"
          rel="noreferrer"
          aria-label="C4 Ministry's Mixcloud page"
        >
          here
        </a>{' '}
        to view the sermons on Youtube!
      </StyledViewMore>
    );
  } else {
    const iframeRef = useRef(null);

    const [lazyLoad, setLazyLoad] = useState(false);
    const triggerLazyLoad = () => setLazyLoad(true);
    useEffect(() => {
      window.addEventListener('scroll', triggerLazyLoad, { once: true });
    }, []);

    return (
      <>
        {lazyLoad && (
          <iframe
            width="100%"
            height="315"
            style={{ marginBottom: '1.5em' }}
            src={`https://www.youtube-nocookie.com/embed/${videos[0].id}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title={videos[0].title}
            ref={iframeRef}
          ></iframe>
        )}

        <YoutubeTable videos={videos} iframeRef={iframeRef} />
        <StyledViewMore>
          Watch more video sermons{' '}
          <a
            href="https://www.youtube.com/channel/UCRKb2u0ePuQ9t6TnKVfe1Gw/videos"
            target="_blank"
            aria-label="C4 Ministry's Youtube"
            rel="noreferrer"
          >
            here
          </a>
          .
        </StyledViewMore>
      </>
    );
  }
}

const StyledViewMore = styled.p<{ isError?: boolean }>`
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

export default YoutubeContent;
