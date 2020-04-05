import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';

function EventsContent({ lastSection }: { lastSection?: boolean }) {
  const iframeRef = useRef(null);
  const [isIframeLoaded, setIframeLoaded] = useState(false);
  const triggerLoaded = () => setIframeLoaded(true);

  useEffect(() => {
    if (iframeRef && iframeRef.current) {
      iframeRef.current.onload = () => {
        setTimeout(() => {
          triggerLoaded();
        }, 500);
      };
    }
  }, []);

  return (
    <StyledEventsContainer lastSection={lastSection} data-scroll-js>
      <StyledSection>
        <StyledInner>
          <StyledLoader viewBox="25 25 50 50" isIframeLoaded={isIframeLoaded}>
            <circle cx="50" cy="50" r="20"></circle>
          </StyledLoader>
          <StyledIframe
            src="https://calendar.google.com/calendar/embed?height=400&amp;wkst=1&amp;ctz=America%2FLos_Angeles&amp;src=MHJtMnRwZzJtYWc5azI4b2JrMmIyZGVpbjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%238E24AA&amp;color=%23795548&amp;showTitle=1&amp;title=C4%20Ministry%20Calendar&amp;showTz=1&amp;showCalendars=1&amp;showPrint=0&amp;showDate=1"
            width="100%"
            height="400"
            scrolling="no"
            ref={iframeRef}
            isIframeLoaded={isIframeLoaded}
          ></StyledIframe>
        </StyledInner>
      </StyledSection>
    </StyledEventsContainer>
  );
}

const StyledEventsContainer = styled.div<{ lastSection: boolean }>`
  background-color: ${colors.blue};
  border-top: solid 2px rgba(190, 190, 255, 0.2);
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
  text-align: center;
  width: calc(100% - 6em);
`;

const StyledLoader = styled.svg<{ isIframeLoaded?: boolean }>`
  ${props => props.isIframeLoaded && 'display: none;'}
  height: 400px;
  width: 3.75em;
  transform-origin: center;
  animation: rotate 2s linear infinite;

  circle {
    fill: none;
    stroke: ${colors.primary};
    stroke-width: 2;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dashoffset: -125px;
    }
  }
`;

const StyledIframe = styled.iframe<{ isIframeLoaded?: boolean }>`
  ${props => (props.isIframeLoaded ? 'display: block;' : 'display: none;')}
`;

export default EventsContent;
