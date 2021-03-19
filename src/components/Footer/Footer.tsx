import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { COLORS, FONT_SIZES } from 'src/constants';

import { Content } from '../Content';

type Props = {
  className?: string,
};

const Footer = styled.footer`
  width: 100%;
  background: ${COLORS.DARK_BACKGROUND};
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  color: ${COLORS.WHITE};
  font-size: ${FONT_SIZES.FONT_SIZE_S};
`;

const GatsbyLogo = styled.a`
  margin-left: 0.5rem;
`;

export default ({ className }: Props) => {
  const data = useStaticQuery(graphql`
    query Footer {
      gatsbyIcon: file(name: {eq: "gatsby-icon"}) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }  
      }
    }
  `);

  const logo = data.gatsbyIcon?.childImageSharp?.fixed;

  return (
    <Footer className={className}>
      <Content>
        <Copyright>
          Created by Evgenii Kvasiuk with Gatsby
          {logo && (
            <GatsbyLogo href="https://www.gatsbyjs.com/">
              <Img fixed={logo} />
            </GatsbyLogo>
          )}
        </Copyright>
      </Content>
    </Footer>
  );
};
