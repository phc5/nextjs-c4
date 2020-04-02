import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import breakpoints from '../constants/breakpoints';
import colors from '../constants/colors';
import routes from '../constants/routes';

function Footer() {
  const NavigationItems = routes.map(route => (
    <Link href={route.route} key={route.name} passHref>
      <StyledNavigationLink>{route.name}</StyledNavigationLink>
    </Link>
  ));

  return (
    <StyledSection>
      <StyledInner>
        <div>
          <StyledFooterSectionName>Information</StyledFooterSectionName>
          <InfoParagraph>Sunday Service begins at 12:30pm.</InfoParagraph>
          <br />
          <InfoParagraph>
            Our church is located at{' '}
            <StyledLocationLink
              href="https://goo.gl/maps/GFDRM4vtH4MqydPm9"
              target="_blank"
              aria-label="C4 Ministry's location on Google Maps"
              rel="noreferrer"
            >
              8381 Katella Ave, Suite N, Stanton, CA 90680
            </StyledLocationLink>
            .
          </InfoParagraph>
        </div>
        <div></div>
        <StyledNavigationList>
          <StyledFooterSectionName>Navigation</StyledFooterSectionName>
          {NavigationItems}
        </StyledNavigationList>

        <StyledSocialContainer>
          <StyledSocialInner>
            <StyledFooterSectionName>Follow Us</StyledFooterSectionName>
            <Styl4edSocialIcons>
              <StyledSocialLink
                href="https://www.facebook.com/California.Christ.Community.Church"
                target="_blank"
                aria-label="C4 Ministry's Facebook"
                rel="noreferrer"
              >
                <svg
                  fill={colors.white}
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" />
                </svg>
              </StyledSocialLink>
              <StyledSocialLink
                href="https://www.instagram.com/c4ministry/"
                target="_blank"
                aria-label="C4 Ministry's Instagram"
                rel="noreferrer"
              >
                <svg
                  fill={colors.white}
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z" />
                </svg>
              </StyledSocialLink>
              <StyledSocialLink
                href="https://www.youtube.com/channel/UCRKb2u0ePuQ9t6TnKVfe1Gw"
                target="_blank"
                aria-label="C4 Ministry's YouTube"
                rel="noreferrer"
              >
                <svg
                  fill={colors.white}
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.23 7.102c-2.002-.136-6.462-.135-8.461 0-2.165.148-2.419 1.456-2.436 4.898.017 3.436.27 4.75 2.437 4.898 1.999.135 6.459.136 8.461 0 2.165-.148 2.42-1.457 2.437-4.898-.018-3.436-.271-4.75-2.438-4.898zm-6.23 7.12v-4.444l4.778 2.218-4.778 2.226zm2-12.222c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
                </svg>
              </StyledSocialLink>

              <StyledSocialLink
                href="https://www.mixcloud.com/c4ministry/"
                target="_blank"
                aria-label="C4 Ministry's MixCloud"
                rel="noreferrer"
                isMixCloud
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  width="33px"
                >
                  <title />
                  <g id="Mixcloud">
                    <g data-name="&lt;Group&gt;" id="_Group_">
                      <g data-name="&lt;Group&gt;" id="_Group_2">
                        <path
                          d="M14.5,10.5a5,5,0,0,0-9.91-.94A3.5,3.5,0,0,0,4,9.5a3.5,3.5,0,0,0,0,7H14.5a3,3,0,0,0,0-6Z"
                          data-name="&lt;Path&gt;"
                          id="_Path_"
                        />
                        <path
                          d="M1.53,10.53a3.5,3.5,0,0,1,4.95,0"
                          data-name="&lt;Path&gt;"
                          id="_Path_2"
                        />
                        <path
                          d="M11.36,5.86a5,5,0,0,1,2.79,6.5"
                          data-name="&lt;Path&gt;"
                          id="_Path_3"
                        />
                      </g>
                      <path
                        d="M19.61,16.65a5.94,5.94,0,0,0,0-6.3"
                        data-name="&lt;Path&gt;"
                        id="_Path_4"
                      />
                      <path
                        d="M22,18.5a9.08,9.08,0,0,0,0-10"
                        data-name="&lt;Path&gt;"
                        id="_Path_5"
                      />
                    </g>
                  </g>
                </svg>
              </StyledSocialLink>
            </Styl4edSocialIcons>
          </StyledSocialInner>
          <StyledSocialInner>
            <StyledFooterSectionName>Donate</StyledFooterSectionName>
            <StyledSocialLink
              href="https://venmo.com/c4ministry"
              target="_blank"
              aria-label="C4 Ministry's Venmo Page"
              rel="noreferrer"
            >
              <svg
                fill={colors.white}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2.3 484.4 611.9 117.9"
                width="130px"
              >
                <path d="M103.1 485.8c4.2 7 5.7 14 5.7 22.4 0 28-23.8 65.9-43.4 91.1H20.5L2.3 491.5l40.6-2.8 9.8 77.1c8.4-14 19.7-37.9 19.7-53.2 0-8.4-1.4-14-4.2-19.7l34.9-7.1zM154.9 533.5c7 0 25.2-2.8 25.2-14 0-5.7-2.8-7-7-7-8.3 0-18.2 8.4-18.2 21zm-1.3 21c0 12.7 7 18.2 16.8 18.2s19.7-2.8 32.2-8.4l-5.7 30.8c-8.4 4.2-22.4 7-36.4 7-33.5 0-46.2-21-46.2-46.2 0-33.5 19.7-68.6 60.2-68.6 22.4 0 35 12.7 35 30.8 1.5 26.6-35 36.4-55.9 36.4zM324.4 511c0 4.2 0 9.8-1.4 14l-11.2 74.2H274l11.2-68.6c0-1.4 1.4-5.7 1.4-7 0-5.7-2.8-5.7-7-5.7-5.7 0-9.8 2.8-12.7 4.2l-14 77.1H215l16.8-112.1h33.5v8.4c8.4-5.7 18.2-11.2 32.2-11.2 19.9 3 26.9 12.7 26.9 26.7zM437.8 498.5c11.2-8.4 21-12.7 35-12.7 19.7 0 26.7 9.8 26.7 25.2 0 4.2 0 9.8-1.4 14L487 599.3h-37.9l11.2-70v-5.7c0-5.7-2.8-7-7-7s-9.8 1.4-12.7 4.2L428 599.2h-37.9l11.2-70v-5.7c0-5.7-2.8-7-7-7-5.7 0-9.8 2.8-12.7 4.2L369 599h-37.9L348 487h32.2l1.4 9.8c7-5.7 18.2-11.2 32.2-11.2 11.4 1.7 19.7 5.9 24 12.9zM575 532.1c0-9.8-2.8-15.4-9.8-15.4-15.4 0-18.2 26.7-18.2 40.6 0 9.8 2.8 16.8 9.8 16.8 15.5-1.4 18.2-29.4 18.2-42zm-65.8 22.4c0-35 18.2-68.6 61.6-68.6 32.2 0 43.4 19.7 43.4 44.9 0 35-18.2 70-61.6 70-32.2 1.3-43.4-19.7-43.4-46.3z" />
              </svg>
            </StyledSocialLink>
          </StyledSocialInner>
          <StyledSocialInner copyright>
            <StyledCopyright>
              &copy; Copyright 2020. California Christ Community Church. All
              rights reserved.
            </StyledCopyright>
          </StyledSocialInner>
        </StyledSocialContainer>
      </StyledInner>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  background-color: ${colors.footer};
  border-top: solid 1px rgba(190, 190, 255, 0.2);
  color: ${colors.white};
  padding: 2em 0;
  position: relative;
`;

const StyledInner = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-row-gap: 4em;
  margin: 0 auto;
  max-width: 100em;
  padding: 3em;

  @media screen and (${breakpoints.medium}) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2em;
    padding: 4em;
  }
`;

const StyledFooterSectionName = styled.h4`
  font-size: 1.5em;
  margin-bottom: 1.25em;
`;

const StyledLocationLink = styled.a`
  color: ${colors.white};
  margin-bottom: 2em;
  transition: color 0.2s ease-in-out;

  :visited {
    text-decoration: none;
  }

  :hover {
    color: ${colors.primary};
  }
`;

const StyledNavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: flex-end;
`;

const StyledNavigationLink = styled.a`
  color: ${colors.white};
  margin-bottom: 2em;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  :visited {
    text-decoration: none;
  }

  :hover {
    color: ${colors.primary};
  }

  :last-child {
    margin-bottom: 0;
  }
`;

const InfoParagraph = styled.p`
  line-height: 1.5em;
`;

const StyledSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSocialInner = styled.div<{ copyright?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;

  ${props =>
    props.copyright &&
    `
    margin-top: auto;
    margin-bottom: 0;
  `}
`;

const Styl4edSocialIcons = styled.div`
  display: flex;
`;

const StyledSocialLink = styled.a<{
  href: string;
  target: string;
  isMixCloud?: boolean;
}>`
  height: 100%;
  margin-right: 1.5em;
  transition: border-color 0.2s ease-in-out;
  width: max-content;

  ${props =>
    props.isMixCloud &&
    `
    border: 4px solid ${colors.white};
    border-radius: 50%;
    padding: .25em;
  `}

  svg {
    transition: fill 0.2s ease-in-out;
  }

  :hover {
    cursor: pointer;
    border-color: ${colors.primary};

    svg {
      cursor: pointer;
      fill: ${colors.primary};
    }
  }
`;

const StyledCopyright = styled.p`
  line-height: 1.5em;
`;

export default Footer;
