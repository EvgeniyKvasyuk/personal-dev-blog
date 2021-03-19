import { graphql } from 'gatsby';

export const postPreviewImageFragment = graphql`
  fragment PostPreviewImage on ImageSharp {
    fluid(maxWidth: 250, quality: 100) {
      ...GatsbyImageSharpFluid_noBase64
    }
  }
`;

export const postImageFragment = graphql`
  fragment PostImage on ImageSharp {
    fluid(quality: 100) {
      ...GatsbyImageSharpFluid_noBase64
    }
  }
`;

export const postFragment = graphql`
  fragment Post on MarkdownRemark {
    id
    frontmatter {
      title
      date(locale: "RU", formatString: "DD MMMM YYYY")
      previewImage {
        childImageSharp {
          ...PostPreviewImage
        }
      }
      image {
        childImageSharp {
          ...PostImage
        }
      }
    }
    content: html
    preview: excerpt(pruneLength: 120)
    fields {
      slug
    }
  }
`;

export const pageFragment = graphql`
  fragment Page on MarkdownRemark {
    html
  }
`;
