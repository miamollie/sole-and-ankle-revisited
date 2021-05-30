/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss, onOpen }) => {
  if (!isOpen) {
    return (
      <UnstyledButton onClick={onOpen}>
        <Icon id="menu" />
        <VisuallyHidden>View menu</VisuallyHidden>
      </UnstyledButton>
    );
  }

  return (
    <div>
      <button onClick={onDismiss}>Dismiss menu</button>
      <nav>
        <a href="/sale">Sale</a>
        <a href="/new">New&nbsp;Releases</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
        <a href="/collections">Collections</a>
      </nav>
      <footer>
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </footer>
    </div>
  );
};

export default MobileMenu;
