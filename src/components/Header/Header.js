import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader, { DecorativeLine } from "../SuperHeader";
import MobileMenu from "../MobileMenu";

import IconButton from "../IconButton";

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
      <IconButton
        icon="shopping-bag"
        label="View Basket"
        onClick={() => console.log("open!")}
      />
      <IconButton
        icon="search"
        label="Search"
        onClick={() => console.log("open!")}
      />
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
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;
  @media ${QUERIES.laptopAndUnder} {
    padding: 16px 24px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9vw - 4.2rem, 3.5rem);
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
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
