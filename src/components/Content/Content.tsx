import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { PADDINGS_AND_MARGINS, RESOLUTIONS, MIXINS } from 'src/constants';

type Props = {
  children: ReactNode,
  className?: string,
};

const ContentWrapper = styled.div`
  ${MIXINS.RESPONSIVE_PADDINGS};
  flex: 1;
  box-sizing: border-box;
  width: 100%;
  max-width: ${RESOLUTIONS.DESKTOP_MIN};
  margin: auto;
  padding: ${PADDINGS_AND_MARGINS.PADDING_M} ${PADDINGS_AND_MARGINS.PADDING_XL};
`;

export const Content = ({ children, className }: Props) => {
  return (
    <ContentWrapper className={className}>
      {children}
    </ContentWrapper>
  );
};

Content.displayName = 'Content';
