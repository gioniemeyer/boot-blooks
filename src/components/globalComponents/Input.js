import React from "react";
import styled from "styled-components";

export default function Input({type, onChange, value, isDisabled, radioName}) {
  return (
    <>
            <StyledInput
              type={type}
              onChange={onChange}
              value={value}
              name = {radioName? radioName : ""}
              disabled={isDisabled}
              required
            ></StyledInput>
    </>
  );}

const StyledInput = styled.input` 
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
    }`;
  


 


