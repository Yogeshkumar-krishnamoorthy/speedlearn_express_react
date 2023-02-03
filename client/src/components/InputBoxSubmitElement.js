import React from "react";
import styled from "styled-components";

const InputBoxSubmit = styled.div`
  width: 100px;
  background: ${props => props.background};
  box-shadow: inset 2px 5px 10px rgb(0 0 0 / 10%),
    10px 10px 10px rgb(0 0 0 / 25%), 10px 5px 10px rgb(0 0 0 / 25%);
  transition: 0.5s;
  position: relative;
  border-radius: 25px;
  &:hover {
    width: 150px;
    transition: 0.5s;
  }
`;

const InputSubmit = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 1em;
  padding: 10px 15px;
  color: ${props => props.color};
  font-size: 0.75em;
  cursor: pointer;
  letter-spacing: 0.1em;
  font-weight: 600;
  transition: 1s;
`;

function InputBoxSubmitElement({ value, color="#fff", background="#ff0f5b" }) {
  return (
    <InputBoxSubmit background={background}>
      <InputSubmit type="submit" value={value} color={color} />
    </InputBoxSubmit>
  );
}

export default InputBoxSubmitElement;
