import React from 'react';
import styled from 'styled-components';
import MediumArticles from './MediumArticles';
import TumblrArticles from './TumblrArticles';
import colors, { tagColors } from '../../constants/colors';
// import breakpoints from '../../constants/breakpoints';

function BlogContent({
  lastSection,
  mediumPosts,
  tumblrPosts
}: {
  lastSection?: boolean;
  mediumPosts: any[];
  tumblrPosts: any[];
}) {
  return (
    <StyledProfileContainer lastSection={lastSection} data-scroll-js>
      <StyledSection>
        <StyledInner>
          <StyledBlogTypeSection>
            <StyledPost>
              <h3>Remembering Manny Ortiz, Westminster Theological Seminary</h3>
              <StyledInfo>By Daniel Park</StyledInfo>
              <StyledSnippet>
                An influential professor of mine, once stated this about grace,
                "A lone fellow could take a grouping of words and thoughts of
                very profound experience and put it onto paper and let the world
                recognize it and enjoy it and that’s genius. Someone else can
                take a number of metals and place it together into fine
                machinery and we call that skill. An artist can see scenery, put
                that onto a canvas and make it lovelier than we can see with our
                naked eye and we call that art. But God can take you and I,
                sinners that shook our fist against God, save us by the grace of
                the Lord, cleanse us by the blood of Christ, fill us with the
                Holy Spirit, send us into the mission field and make us a
                blessing to all of humanity and we call that grace."
              </StyledSnippet>
              <div>
                Tags: <StyledTag color={tagColors[0]}>Grace</StyledTag>
                <StyledTag color={tagColors[2]}>Christianity</StyledTag>
                <StyledTag color={tagColors[3]}>Gospel</StyledTag>
                <StyledTag color={tagColors[9]}>Westminster (PA)</StyledTag>
              </div>
            </StyledPost>
          </StyledBlogTypeSection>
          <StyledBlogTypeSection>
            <MediumArticles mediumPosts={mediumPosts} />
          </StyledBlogTypeSection>
          <StyledBlogTypeSection>
            <TumblrArticles tumblrPosts={tumblrPosts} />
          </StyledBlogTypeSection>
        </StyledInner>
      </StyledSection>
    </StyledProfileContainer>
  );
}

const StyledProfileContainer = styled.div<{ lastSection: boolean }>`
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
  display: flex;
  flex-direction: column;
  padding: 4em 0 2em 0;
  margin: 0 auto;
  max-width: 65em;
  width: calc(100% - 6em);

  h3 {
    font-size: 1.75em;
    margin-bottom: 1em;
  }
`;

const StyledBlogTypeSection = styled.div`
  margin-bottom: 5em;
`;

const StyledPost = styled.div`
  border-bottom: 1px solid ${colors.paleblue};
  margin-bottom: 3em;
  padding-bottom: 2em;
`;

const StyledInfo = styled.span`
  display: block;
  margin-bottom: 1em;
`;

const StyledSnippet = styled.p`
  font-size: 1.1em;
  line-height: 1.25em;
  margin-bottom: 0.5em;
`;

const StyledTag = styled.a`
  display: inline-block;
  margin: 0.5em 0.25em;
  padding: 0.5em 1em;
  color: #fff;
  background: ${props => props.color || '#999'};
  font-size: 80%;
  text-decoration: none;
  text-transform: uppercase;
`;

export default BlogContent;
