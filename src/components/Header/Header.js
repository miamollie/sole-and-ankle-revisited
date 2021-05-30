import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader, { DecorativeLine } from "../SuperHeader";
import MobileMenu from "../MobileMenu";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  return (
    <header>
      <DecorativeLine />
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileNav />
      </MainHeader>
    </header>
  );
};

function MobileNav() {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <MobileNavWrapper>
      <UnstyledButton onClick={() => console.log("open!")}>
        <Icon id="shopping-bag" />
        <VisuallyHidden>View basket</VisuallyHidden>
      </UnstyledButton>
      <UnstyledButton onClick={() => console.log("open!")}>
        <Icon id="search" />
        <VisuallyHidden>Search</VisuallyHidden>
      </UnstyledButton>
      <MobileMenu
        onOpen={() => setShowMobileMenu(true)}
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </MobileNavWrapper>
  );
}

const MobileNavWrapper = styled.nav`
  display: none;
  gap: 16px;
  @media ${QUERIES.laptopAndUnder} {
    display: flex;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
  @media ${QUERIES.laptopAndUnder} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
