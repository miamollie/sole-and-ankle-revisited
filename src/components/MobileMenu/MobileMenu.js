import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import IconButton from "../IconButton";

const MobileMenu = ({ isOpen, onDismiss, onOpen }) => {
  if (!isOpen) {
    return <IconButton icon="menu" label="View menu" onClick={onOpen} />;
  }

  return (
    <DialogWrapper>
      <DialogContentWrapper>
        <CloseButtonWrapper>
          <IconButton label="Dismiss menu" onClick={onDismiss} icon="close" />
        </CloseButtonWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </DialogContentWrapper>
    </DialogWrapper>
  );
};

export default MobileMenu;

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
`;

const NavLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-size: 18px;

  &:hover {
    color: var(--color-secondary);
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`;

const DialogContentWrapper = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: white;
  width: min(20rem, 80vw);
  float: right;
  padding: 32px 22px;
`;

const CloseButtonWrapper = styled.div`
  align-self: flex-end;
`;

const DialogWrapper = styled(DialogOverlay)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: hsla(220, 5%, 40%, 0.8);
`;
