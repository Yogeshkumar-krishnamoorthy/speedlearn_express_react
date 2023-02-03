import React from 'react';
import styled from "styled-components";

const ContentH2 = styled.h2`
  position: relative;
  color: #333;
  font-size: 1.5em;
`;

function BubbleHeading({innerText}) {
  return (
    <ContentH2>{innerText}</ContentH2>
  )
}

export default BubbleHeading