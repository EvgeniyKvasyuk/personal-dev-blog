import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import { PADDINGS_AND_MARGINS } from 'src/constants';
import { Layout } from 'src/components/Layout';
import { PostPreview } from 'src/components/PostPreview';

import { PostsListPageQuery, SitePageContext } from '../../../graphql-types';

type Props = {
  data: PostsListPageQuery,
  pageContext: SitePageContext
};

const PostsListItem = styled(PostPreview)`
  margin-bottom: ${PADDINGS_AND_MARGINS.PADDING_M};
`;

const PostsList = ({ data, pageContext }: Props) => {
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.posts.map(({ post }: any) => (
          <PostsListItem post={post} key={post.id} />
        ))}
      </div>
      <div>
        {!!pageContext.nextPagePath && <Link to={pageContext.nextPagePath}>Назад в будущее</Link>}
        {!!pageContext.previousPagePath && <Link to={pageContext.previousPagePath}>Вперед в прошлое</Link>}
      </div>
    </Layout>
  );
};

export const postsListQuery = graphql`
  query PostsListPage ($skip: Int!, $limit: Int!) {
    allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "\\/posts/"}}
      sort: {fields: frontmatter___date, order: DESC}
      skip: $skip
      limit: $limit
    ) {
      posts: edges {
        post: node {
          ...Post
        }
      }
    }
  }`;

export default PostsList;
