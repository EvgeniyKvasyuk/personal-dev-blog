import React from 'react';
import styled from 'styled-components';
import {
  Gatsby,
  Github,
  Vk,
  Instagram,
  Gmail,
} from '@styled-icons/simple-icons';

import {
  COLORS,
  FONT_SIZES,
  PADDINGS_AND_MARGINS,
  RESOLUTIONS,
} from 'src/constants';
import { ROUTES } from 'src/routes';

import { Content } from '../Content';
import { IconLink } from '../IconLink';

type Props = {
  className?: string,
};

const FooterWrapper = styled.footer`
  width: 100%;
  background: ${COLORS.DARK_BACKGROUND};
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  color: ${COLORS.WHITE};
  font-size: ${FONT_SIZES.FONT_SIZE_S};

  @media (max-width: ${RESOLUTIONS.MOBILE_MAX}) {
    margin-bottom: ${PADDINGS_AND_MARGINS.PADDING_M};
  }
`;

const FooterSocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  width: 5rem;
  font-size: ${FONT_SIZES.FONT_SIZE_S};

  @media (max-width: {RESOLUTIONS.MOBILE_MAX}) {
    flex-direction: column;
  }
`;

const FooterContent = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${RESOLUTIONS.MOBILE_MAX}) {
    flex-direction: column;
    align-items: center;
  }
`;

const GatsbyLink = styled(IconLink)`
  margin-left: 0.5rem;
`;

export const Footer = ({ className }: Props) => {
  return (
    <FooterWrapper className={className}>
      <FooterContent>
        <Copyright>
          Created by Evgenii Kvasiuk with
          <GatsbyLink
            icon={Gatsby}
            href={ROUTES.GATSBY}
            target="_blank"
          />
        </Copyright>
        <FooterSocialMedia>
          <IconLink
            icon={Github}
            href={ROUTES.GITHUB}
            alt="Look at my GitHub"
            target="_blank"
          />
          <IconLink
            icon={Vk}
            href={ROUTES.VK}
            alt="Look at my Vk"
            target="_blank"
          />
          <IconLink
            icon={Instagram}
            href={ROUTES.INSTAGRAM}
            alt="Look at my Instagram"
            target="_blank"
          />
          <IconLink
            icon={Gmail}
            href={ROUTES.EMAIL}
            alt="Write me an e-mail"
            target="_blank"
          />
        </FooterSocialMedia>
      </FooterContent>
    </FooterWrapper>
  );
};

Footer.displayName = 'Footer';
