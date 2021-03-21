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

const PostPreviewWrapper = styled.section`
  display: flex;
  align-items: flex-start;

  @media (max-width: ${RESOLUTIONS.MOBILE_MAX}) {
    display: block;
  }
`;

const PostPreviewTitle = styled(Link)`
  display: block;
  margin-bottom: ${PADDINGS_AND_MARGINS.PADDING_S};
  font-size: ${FONT_SIZES.FONT_SIZE_L};
`;

const PostPreviewDate = styled.time`
  display: block;
  margin-bottom: ${PADDINGS_AND_MARGINS.PADDING_S};
  color: ${COLORS.PALE};
  font-size: ${FONT_SIZES.FONT_SIZE_S};
`;

const PostPreviewContent = styled.div``;

const PostPreviewImage = styled(Img)`
  flex-shrink: 0;
  width: 100%;
  max-width: 10rem;
  margin-right: ${PADDINGS_AND_MARGINS.PADDING_M};

  @media (max-width: ${RESOLUTIONS.MOBILE_MAX}) {
    max-width: none;
    margin-right: 0;
    margin-bottom: ${PADDINGS_AND_MARGINS.PADDING_L};
  }
`;

const PostPreviewDescription = styled.div``;

export const PostPreview = ({ className, post }: Props) => {
  return (
    <PostPreviewWrapper className={className}>
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
    </PostPreviewWrapper>
  );
};

PostPreview.displayName = 'PostPreview';
