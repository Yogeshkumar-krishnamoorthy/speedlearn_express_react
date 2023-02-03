import React from "react";
import styled from "styled-components";

const InputBox = styled.div`
  position: relative;
  width: 180px;
  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.1),
    inset -2px -5px 10px rgba(255, 255, 255, 1),
    15px 15px 10px rgba(0, 0, 0, 0.05), 15px 10px 15px rgba(0, 0, 0, 0.025);
  border-radius: 25px;
  &::before {
    content: "";
    position: absolute;
    top: 4px;
    left: 10%;
    width: 80%;
    height: 4px;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 1px 1px 3px 1px rgb(255 255 255 / 80%);
    border-radius: 5px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 1em;
  padding: 10px 15px;
`;

function InputBoxElement({type, placeholder}) {
  return (
    <InputBox>
      <Input type={type} placeholder={placeholder} />
    </InputBox>
  );
}

export default InputBoxElement;
