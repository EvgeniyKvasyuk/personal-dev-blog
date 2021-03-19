import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { PADDINGS_AND_MARGINS, RESOLUTIONS, MIXINS } from 'src/constants';

type Props = {
  children: ReactNode,
  className?: string,
};

const Content = styled.div`
  ${MIXINS.RESPONSIVE_PADDINGS};
  flex: 1;
  box-sizing: border-box;
  width: 100%;
  max-width: ${RESOLUTIONS.DESKTOP_MIN};
  margin: auto;
  padding: ${PADDINGS_AND_MARGINS.VERTICAL_BLOCK_PADDING} ${PADDINGS_AND_MARGINS.HORIZONTAL_BLOCK_PADDING};
`;

export default ({ children, className }: Props) => {
  return (
    <Content className={className}>
      {children}
    </Content>
  );
};
