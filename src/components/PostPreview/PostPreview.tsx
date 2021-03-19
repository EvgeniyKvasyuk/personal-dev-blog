import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import {
  COLORS,
  FONT_SIZES,
  PADDINGS_AND_MARGINS,
  RESOLUTIONS,
} from 'src/constants';

import { PostFragment } from '../../../graphql-types';

type Props = {
  post: PostFragment;
  className?: string,
};

const PostPreview = styled.section`
  display: flex;
  align-items: flex-start;

  @media (max-width: ${RESOLUTIONS.MOBILE_MAX}) {
    display: block;
  }
`;

const PostPreviewTitle = styled(Link)`
  display: block;
  margin-bottom: ${PADDINGS_AND_MARGINS.SMALL_VERTICAL_BLOCK_PADDING};
  font-size: ${FONT_SIZES.FONT_SIZE_L};
`;

const PostPreviewDate = styled.time`
  display: block;
  margin-bottom: ${PADDINGS_AND_MARGINS.SMALL_VERTICAL_BLOCK_PADDING};
  color: ${COLORS.PALE};
  font-size: ${FONT_SIZES.FONT_SIZE_S};
`;

const PostPreviewContent = styled.div``;

const PostPreviewImage = styled(Img)`
  width: 100%;
  max-width: 10rem;
  margin-right: ${PADDINGS_AND_MARGINS.HORIZONTAL_BLOCK_PADDING};

  @media (max-width: ${RESOLUTIONS.MOBILE_MAX}) {
    max-width: none;
    margin-right: 0;
    margin-bottom: ${PADDINGS_AND_MARGINS.HORIZONTAL_BLOCK_PADDING};
  }
`;

const PostPreviewDescription = styled.div``;

export default ({ className, post }: Props) => {
  return (
    <PostPreview className={className}>
      {post.frontmatter?.previewImage?.childImageSharp?.fluid && (
      <PostPreviewImage
        // @ts-ignore
        fluid={post.frontmatter.previewImage?.childImageSharp.fluid}
      />
      )}
      <PostPreviewContent>
        <PostPreviewTitle to={post?.fields?.slug!}>
          {post?.frontmatter?.title}
        </PostPreviewTitle>
        <PostPreviewDate>
          {post?.frontmatter?.date}
        </PostPreviewDate>
        <PostPreviewDescription>
          {post.preview}
        </PostPreviewDescription>
      </PostPreviewContent>
    </PostPreview>
  );
};
