import React from "react";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

function IconButton({ icon, onClick, label }) {
  return (
    <UnstyledButton onClick={onClick}>
      <Icon id={icon} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </UnstyledButton>
  );
}

export default IconButton;
