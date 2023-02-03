import React from "react";
import styled from "styled-components";

const Btns = styled.a`
  position: absolute;
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
  word-break: break-word;
  bottom: 150px;
  right: -120px;
  width: 80px;
  height: 80px;
  border-radius: 44% 56% 47% 53% / 64% 58% 42% 36%;
  background: #01b4ff;
  box-shadow: inset 10px 10px 10px rgb(1 180 255 / 5%),
    15px 25px 10px rgb(1 180 255 / 10%), 15px 20px 20px rgb(1 180 255 / 10%),
    inset -10px -10px 15px rgb(255 255 255 / 50%);
  &:hover {
    border-radius: 50%;
  }
  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 20px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #fff;
    opacity: 0.45;
  }
`;

function PurpleBubble({ href = "#", innerText }) {
  return <Btns href={href}>{innerText}</Btns>;
}

export default PurpleBubble;
