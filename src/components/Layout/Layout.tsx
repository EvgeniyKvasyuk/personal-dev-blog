import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import { COLORS } from 'src/constants';

import { Header } from '../Header';
import { Navbar } from '../Navbar';
import { Content } from '../Content';
import { Footer } from '../Footer';

deckDeckGoHighlightElement();

type Props = {
  children: ReactNode,
  className?: string,
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  min-height: 100vh;
`;

const LayoutFooter = styled(Footer)`
  justify-self: flex-end;
`;

const LayoutHeader = styled(Header)`
  flex: 0;
`;

const Global = createGlobalStyle`
  ${normalize}

  a {
    color: ${COLORS.ACCENT_PALE};
  }

  a:hover {
    color: ${COLORS.ACCENT};
  }
`;

export default ({ children, className }: Props) => {
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
    <Layout className={className}>
      <Global />
      <LayoutHeader>
        <Navbar />
      </LayoutHeader>
      <Content>{children}</Content>
      <LayoutFooter />
    </Layout>
  );
};
