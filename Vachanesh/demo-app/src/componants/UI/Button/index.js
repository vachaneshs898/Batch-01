// @ts-nocheck
import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../Theme/theme";

const UIButton = styled.button`
  border: 1px solid #00000000;
  border-radius: 4px;
  padding: 10px 16px;
  color: #ffffff;
  cursor: pointer;

  ${({ btntype }) =>
    btntype &&
    css`
      border: 1px solid ${theme["colors"][btntype]};
      background-color: ${theme["colors"][btntype]};
      &:hover {
        background-color: ${theme["colors"]["hover"][btntype]};
        border: 1px solid ${theme["colors"]["hover"][btntype]};
      }
    `}

  ${({ size }) =>
    size &&
    css`
      padding: ${(props) => theme.button.size[props.size]};
    `}
`;

const Button = (props) => {
  const { btnType = "default", icon = "", disabled = false, size } = props;
  return (
    <UIButton type="button" btntype={btnType} size={size} disabled={disabled}>
      {props.children}
      {icon !== "" ? <span>{icon}</span> : ""}
    </UIButton>
  );
};

export default Button;
