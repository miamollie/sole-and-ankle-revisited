/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES } from "../../constants";

import IconButton from "../IconButton";

const MobileMenu = ({ isOpen, onDismiss, onOpen }) => {
  if (!isOpen) {
    return <IconButton icon="menu" label="View menu" onClick={onOpen} />;
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
