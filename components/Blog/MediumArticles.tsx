import styled from 'styled-components';
import colors, { tagColors } from '../../constants/colors';

function MediumArticles({ mediumPosts }) {
  const mediumPostsElements = mediumPosts.map(
    ({ author, content, date, link, tags, title }) => {
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
            href={`https://www.medium.com/tag/${tag}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`Medium Tag - ${tag}`}
          >
            {tag}
          </StyledTag>
        );
      });

      return (
        <StyledPost key={title}>
          <StyledPostLink
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Medium Blog Post - ${title}`}
          >
            <h3>{title}</h3>
          </StyledPostLink>
          <StyledInfo>
            By {author} &middot; {date}
          </StyledInfo>
          <StyledSnippet>{content}</StyledSnippet>
          <div>Tags: {tagElements}</div>
        </StyledPost>
      );
    }
  );
  return (
    <>
      <StyledBlogType>Medium Articles</StyledBlogType>
      {mediumPostsElements}
    </>
  );
}

export default MediumArticles;

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
