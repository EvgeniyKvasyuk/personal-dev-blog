import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

type Props = {
  className?: string,
};

const NavbarWrapper = styled.nav`
  display: flex;
  justify-items: center;
`;

const NavbarItem = styled(Link)`
  margin-right: 2rem;
  text-decoration: none;
`;

export const Navbar = ({ className }: Props) => {
  return (
    <NavbarWrapper className={className}>
      <NavbarItem to="/about">About</NavbarItem>
      <NavbarItem to="/contacts">Contacts</NavbarItem>
    </NavbarWrapper>
  );
};

Navbar.displayName = 'Navbar';
