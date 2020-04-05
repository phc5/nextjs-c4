import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import breakpoints from '../../constants/breakpoints';

function PageBanner({ title, subText }: { title: string; subText?: string }) {
  let [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <StyledSection>
      <StyledWrapper>
        <StyledInner isLoaded={isLoaded}>
          <header>
            <StyledH1>{title}</StyledH1>
          </header>

          {subText && (
            <StyledSubtitle>
              <StyledParagraph>{subText}</StyledParagraph>
            </StyledSubtitle>
          )}
        </StyledInner>
        <StyledDownArrow isLoaded={isLoaded}>
          <svg width="18px" height="17px" viewBox="-1 0 18 17" fill="#ffffff">
            <g>
              <polygon
                className="arrow"
                points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
                stroke="#ffffff"
                strokeWidth="1"
              ></polygon>
              <polygon
                className="arrow-fixed"
                points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
                stroke="#ffffff"
                strokeWidth="1"
              ></polygon>
            </g>
          </svg>
        </StyledDownArrow>
      </StyledWrapper>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  background-image: url('/assets/misc/background-banner.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.white};
  height: 100vh;
  margin-bottom: -3.25em;
  position: relative;
  top: -3.25em;

  @media screen and (${breakpoints.large}) {
    background-attachment: fixed;
  }
`;

const StyledWrapper = styled.div`
  align-items: center;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 30%,
    rgba(0, 0, 0, 0.8) 80%,
    rgba(0, 0, 0, 0.9) 100%
  );
  display: flex;
  height: 100%;
`;

const StyledInner = styled.div<{ isLoaded: boolean }>`
  filter: ${props => (props.isLoaded ? 'none' : 'blur(0.125em)')};
  margin: 0 auto;
  max-width: 65em;
  opacity: ${props => (props.isLoaded ? 1 : 0)};
  padding: 0;
  position: relative;
  transform: ${props => (props.isLoaded ? 'none' : 'translate3d(-2em, 0, 0)')};
  transition: opacity 1.5s ease, transform 0.5s ease-out, filter 0.5s ease;
  width: calc(100% - 50px);
`;

const StyledH1 = styled.h1`
  color: ${colors.white};
  font-family: 'OpenSans700';
  font-size: 2em;
  font-weight: 600;
  line-height: 1.65;
  margin: 0 0 0.75em 0;

  :after {
    background-color: ${colors.white};
    content: '';
    display: block;
    height: 2px;
    margin: 0.325em 0 0.5em 0;
    max-width: 100%;
    width: 100%;
  }

  @media screen and (${breakpoints.small}) {
    font-size: 3.25em;
  }
`;

const StyledSubtitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledParagraph = styled.p`
  line-height: 1.5em;
`;

const StyledDownArrow = styled.span<{ isLoaded: boolean }>`
  bottom: 5em;
  opacity: ${props => (props.isLoaded ? 1 : 0)};
  position: absolute;
  right: 50%;
  transform: ${props => (props.isLoaded ? 'none' : 'translate3d(0, -4em, 0)')};
  transition: opacity 1.5s ease, transform 0.5s ease-out;

  svg {
    width: 3em;
    height: auto;
    cursor: pointer;
    overflow: visible;
    transform: rotate(90deg);

    polygon {
      transition: all 0.5s cubic-bezier(.2,1,.3,1);
    }

    &:hover polygon {
      transition: all 1s cubic-bezier(.2,1,.3,1);
      fill: ${colors.primary};
      stroke: ${colors.primary};
    }
      
    &:hover .arrow {
      animation: arrow-anim 1.5s cubic-bezier(.2,1,.3,1) infinite;
    }
    &:hover .arrow-fixed {
      animation: arrow-fixed-anim 1.5s cubic-bezier(.2,1,.3,1) infinite;
    }
  }
}

@keyframes arrow-anim {
	0% {
		opacity: 1;
		transform: translateX(0);
	}
	5% {
		transform: translateX(-0.1rem);
	}
	100% {
		transform: translateX(1rem);
		opacity: 0;
	}
}

@keyframes arrow-fixed-anim {
	5% {
		opacity: 0;
	}
	20% {
		opacity: 0.4;
	}
	100% {
		opacity: 1;
	}
`;

export default PageBanner;
