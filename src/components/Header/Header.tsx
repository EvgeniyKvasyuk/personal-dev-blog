import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Color from 'color';

import {
  PADDINGS_AND_MARGINS,
  COLORS,
  RESOLUTIONS,
  MIXINS,
} from 'src/constants';

type Props = {
  children?: ReactNode,
  className?: string,
};

const boxShadowColor = Color(COLORS.ACCENT_PALE).alpha(0.1).string();

const Header = styled.header`
  width: 100%;
  overflow-x: hidden;
  box-shadow: 0 5px 10px 2px ${boxShadowColor};
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: flex-start;
  box-sizing: border-box;
  max-width: ${RESOLUTIONS.DESKTOP_MIN};
  margin: auto;
  padding: ${PADDINGS_AND_MARGINS.VERTICAL_BLOCK_PADDING} ${PADDINGS_AND_MARGINS.HORIZONTAL_BLOCK_PADDING};
  ${MIXINS.RESPONSIVE_PADDINGS}
`;

const HeaderLogo = styled(Link)`
  margin-right: 2rem;
  color: ${COLORS.BLACK};
  text-decoration: none;
`;

export default ({ children, className }: Props) => (
  <Header className={className}>
    <HeaderWrapper>
      <HeaderLogo to="/">
        <h1>KVASIUK`S BLOG</h1>
      </HeaderLogo>
      {children}
    </HeaderWrapper>
  </Header>
);

