import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import { COLORS, MIXINS, PADDINGS_AND_MARGINS } from 'src/constants';

import { Header } from '../Header';
import { Navbar } from '../Navbar';
import { Content } from '../Content';
import { Footer } from '../Footer';

deckDeckGoHighlightElement();

type Props = {
  children: ReactNode,
  className?: string,
};

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  min-height: 100vh;
  background: ${COLORS.BASE_BACKGROUND};
`;

const LayoutFooter = styled(Footer)`
  justify-self: flex-end;
`;

const LayoutHeader = styled(Header)`
  flex: 0;
  margin-bottom: ${PADDINGS_AND_MARGINS.PADDING_M};
`;

const Global = createGlobalStyle`
  ${normalize}

  a {
    color: ${COLORS.ACCENT_PALE};
  }

  a:hover {
    color: ${COLORS.ACCENT};
  }

  .deckgo-highlight-code-carbon {
    ${MIXINS.BOX_SHADOWS}
  }
`;

export const Layout = ({ children, className }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <LayoutWrapper className={className}>
      <Global />
      <LayoutHeader>
        <Navbar />
      </LayoutHeader>
      <Content>{children}</Content>
      <LayoutFooter />
    </LayoutWrapper>
  );
};

Layout.displayName = 'Layout';
