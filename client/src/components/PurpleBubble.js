import React from "react";
import styled from "styled-components";

const Btns = styled.a`
  position: absolute;
  right: -120px;
  bottom: 0;
  width: 120px;
  height: 120px;
  background: #c61dff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  line-height: 1.2em;
  letter-spacing: 0.1em;
  font-size: 0.9em;
  transition: 1s;
  text-align: center;
  box-shadow: inset 10px 10px 10px rgba(190, 1, 254, 0.05),
    15px 25px 10px rgba(190, 1, 254, 0.1), 15px 20px 20px rgba(190, 1, 254, 0.1),
    inset -10px -10px 15px rgba(255, 255, 255, 0.5);
  border-radius: 31% 69% 64% 36% / 52% 58% 42% 48%;
  word-break: break-word;
  &:hover {
    border-radius: 50%;
  }
  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 30px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    opacity: 0.45;
  }
`;

function PurpleBubble({ href = "#", innerText }) {
  return <Btns href={href}>{innerText}</Btns>;
}

export default PurpleBubble;
