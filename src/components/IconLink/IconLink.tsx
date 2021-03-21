import React from 'react';
import styled from 'styled-components';
import { StyledIcon } from '@styled-icons/styled-icon';

import { COLORS } from 'src/constants';

type IconLinkWrapperType = {
  href: string,
  size?: string | number,
  color?: string,
  className?: string,
  alt?: string,
  target?: '_blank' | '_self' | '_parent' | '_top',
};

type Props = {
  icon: StyledIcon,
} & IconLinkWrapperType;

const IconLinkWrapper = styled.a<IconLinkWrapperType>`
  color: ${(props) => props.color};

  &:hover {
    color: ${(props) => props.color};
  }
`;

export const IconLink = ({
  icon: Icon,
  href,
  size = '1rem',
  className,
  color = COLORS.WHITE,
  alt = '',
  target = '_self',
}: Props) => (
  <IconLinkWrapper
    alt={alt}
    href={href}
    className={className}
    color={color}
    title={alt}
    target={target}
  >
    <Icon size={size} />
  </IconLinkWrapper>
);

IconLink.displayName = 'IconLink';
