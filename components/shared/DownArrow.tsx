import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';

function DownArrow({ isLoaded }) {
  const arrowRef = useRef(null);

  useEffect(() => {
    if (arrowRef && arrowRef.current) {
      arrowRef.current.addEventListener('click', () => {
        const contentDiv = document.querySelector('[data-scroll-js]');
        if (contentDiv !== null && contentDiv instanceof HTMLElement) {
          let start = null;
          const scrollEnd = contentDiv.offsetTop + 39;

          function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          }

          function step(timestamp) {
            if (!start) start = timestamp;
            let progress = Math.min(1, (timestamp - start) / 1000);
            const easing = easeInOutQuad(progress);
            window.scroll(0, Math.ceil(easing * scrollEnd));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          }

          window.requestAnimationFrame(step);
        }
      });
    }
  }, []);

  return (
    <StyledDownArrow isLoaded={isLoaded} ref={arrowRef}>
      <svg width="18px" height="17px" viewBox="-1 0 18 17" fill={colors.white}>
        <g>
          <polygon
            className="arrow"
            points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
            stroke={colors.white}
            strokeWidth="1"
          ></polygon>
          <polygon
            className="arrow-fixed"
            points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
            stroke={colors.white}
            strokeWidth="1"
          ></polygon>
        </g>
      </svg>
    </StyledDownArrow>
  );
}

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
      fill: ${colors.white};
      stroke: ${colors.white};
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

export default DownArrow;
