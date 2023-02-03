import React from "react";
import "../components/css/common.css";
import styled from "styled-components";
import BubbleHeading from "../components/BubbleHeading";
import InputBoxElement from "../components/InputBoxElement";
import InputBoxSubmitElement from "../components/InputBoxSubmitElement";
import PurpleBubble from "../components/PurpleBubble";
import BlueBubble from "../components/BlueBubble";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  left: -80px;
`;

const Drop = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  box-shadow: inset 20px 20px 20px rgba(0, 0, 0, 0.05),
    25px 35px 20px rgba(0, 0, 0, 0.05), 25px 30px 30px rgba(0, 0, 0, 0.05),
    inset -20px -20px 25px rgba(255, 255, 255, 0.9);
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 59% 41% 30% 70% / 30% 41% 59% 70%;
  &:hover {
    border-radius: 50%;
  }
  &::before {
    content: "";
    position: absolute;
    top: 40px;
    left: 75px;
    width: 25px;
    height: 25px;
    border-radius: 50px;
    background: #fff;
    opacity: 0.9;
  }
  &::after {
    content: "";
    position: absolute;
    top: 65px;
    left: 100px;
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background: #fff;
    opacity: 0.9;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 40px;
  gap: 15px;
`;

const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

function Login() {
  return (
    <Container>
      <Drop>
        <Content>
          <BubbleHeading innerText="login" />
          <ContentForm action="#" method="get">
            <InputBoxElement type="text" placeholder="username" />
            <InputBoxElement type="password" placeholder="password" />
            <InputBoxSubmitElement value="Login" />
          </ContentForm>
        </Content>
      </Drop>
      <PurpleBubble innerText="Forgot Password" />
      <BlueBubble innerText="Signup" />
    </Container>
  );
}

export default Login;
