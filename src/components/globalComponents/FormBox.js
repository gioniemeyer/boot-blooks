import React from "react";
import styled from "styled-components";

export default function FormBox({ children, onSubmit }) {
  return (
    <>
      <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  z-index: 0;

  h2 {
    margin: 15px 0px 10px 0px;
  }

  button {
    height: 35px;
    width: 65%;
    background-color: #8e1a0a;
    border-radius: 5px;
    border: none;
    outline: transparent;
    color: #ffffff;
    font-size: 20px;
    line-height: 23px;
    cursor: pointer;
    margin-top: 20px;
  }

  input {
    height: 35px;
    background: #ffffff;
    border-radius: 5px;
    border: 1px solid gray;
    margin-bottom: 10px;
    outline: transparent;
    padding-left: 15px;
    color: #000000;
    font-size: 15px;
    line-height: 23px;
    ::-webkit-input-placeholder {
      color: #000000;
      font-size: 15px;
      line-height: 23px;
    }
  }
  div {
    display: flex;
    label {
      height: 20px;
      align-items: center;
      margin-top: 15px;
    }
  }
  @media (max-width: 614px) {
    width: 100%;
  }
`;
