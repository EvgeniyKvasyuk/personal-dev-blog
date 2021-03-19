import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { COLORS } from 'src/constants';
import { Layout } from 'src/components/Layout';

import { PostPageQuery } from '../../../graphql-types';

type Props = {
  data: PostPageQuery,
};

const PostHeader = styled.div`
  display: flex;
  align-items: center;
`;

const PostTitle = styled.h1`
  color: ${COLORS.ACCENT};
`;

const PostDate = styled.time`
  color: ${COLORS.ACCENT_PALE};
`;

const Post = ({ data }: Props) => {
  const content = data?.markdownRemark?.content;
  const title = data?.markdownRemark?.frontmatter?.title;
  const date = data?.markdownRemark?.frontmatter?.date;

  return (
    <Layout>
      <PostHeader>
        <PostTitle>
          {title}
        </PostTitle>
        &nbsp;
        &mdash;
        &nbsp;
        <PostDate>
          {date}
        </PostDate>
      </PostHeader>
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
    </Layout>
  );
};

export const postQuery = graphql`
  query PostPage ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...Post
    }
  }
`;

export default Post;

