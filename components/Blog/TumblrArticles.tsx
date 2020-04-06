import styled from 'styled-components';
import colors, { tagColors } from '../../constants/colors';

function TumblrArticles({ tumblrPosts }) {
  const tumblrPostElements = tumblrPosts.map(
    ({ body, date, post_url, tags, title }) => {
      let tagColorArray = [...tagColors];

      const tagElements = tags.map(tag => {
        const randomIndex = Math.floor(
          Math.random() * tagColorArray.length
        ).toString();

        const randomColor = tagColorArray[randomIndex];
        tagColorArray.splice(parseInt(randomIndex), 1);

        return (
          <StyledTag
            key={tag}
            color={randomColor}
            aria-label={`Medium Tag - ${tag}`}
          >
            {tag}
          </StyledTag>
        );
      });

      return (
        <StyledPost key={title}>
          <StyledPostLink
            href={post_url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Tumblr Blog Post - ${title}`}
          >
            <h3>{title}</h3>
          </StyledPostLink>
          <StyledInfo>By Daniel Park &middot; {date}</StyledInfo>
          <StyledSnippet>{body}</StyledSnippet>
          <div>Tags: {tagElements}</div>
        </StyledPost>
      );
    }
  );
  return (
    <>
      <StyledBlogType>Tumblr Articles</StyledBlogType>
      {tumblrPostElements}
    </>
  );
}

export default TumblrArticles;

const StyledBlogType = styled.h2`
  font-size: 2em;
  margin-bottom: 0.75em;
`;

const StyledPostLink = styled.a`
  color: ${colors.white};

  h3 {
    font-size: 1.75em;
    margin-bottom: 0.75em;
  }
`;

const StyledPost = styled.div`
  border-bottom: 1px solid ${colors.paleblue};
  margin-bottom: 3em;
  padding-bottom: 3em;
`;

const StyledInfo = styled.span`
  display: block;
  margin-bottom: 1em;
`;

const StyledSnippet = styled.p`
  font-size: 1.25em;
  line-height: 1.25em;
  margin-bottom: 0.5em;
`;

const StyledTag = styled.span`
  display: inline-block;
  margin: 0.5em 0.25em;
  padding: 0.5em 1em;
  color: #fff;
  background: ${props => props.color || '#999'};
  font-size: 80%;
  text-decoration: none;
  text-transform: uppercase;
`;
