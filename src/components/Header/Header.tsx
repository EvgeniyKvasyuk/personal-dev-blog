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

const HeaderWrapper = styled.header`
  width: 100%;
  overflow-x: hidden;
  ${MIXINS.BOX_SHADOWS}
`;

const HeaderContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: flex-start;
  box-sizing: border-box;
  max-width: ${RESOLUTIONS.DESKTOP_MIN};
  margin: auto;
  padding: ${PADDINGS_AND_MARGINS.PADDING_M} ${PADDINGS_AND_MARGINS.PADDING_XL};
  ${MIXINS.RESPONSIVE_PADDINGS}
`;

const HeaderLogo = styled(Link)`
  margin-right: 2rem;
  color: ${COLORS.BLACK};
  text-decoration: none;
`;

export const Header = ({ children, className }: Props) => (
  <HeaderWrapper className={className}>
    <HeaderContent>
      <HeaderLogo to="/">
        <h1>KVASIUK`S BLOG</h1>
      </HeaderLogo>
      {children}
    </HeaderContent>
  </HeaderWrapper>
);

Header.displayName = 'Header';
