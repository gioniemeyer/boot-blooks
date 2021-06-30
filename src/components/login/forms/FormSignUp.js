import React from "react";
import { StyledForm } from "../styledComponents/StyledForm";

export default function FormSignUp({children, onSubmit}) {
  
  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        {children}
      </StyledForm>
    </>
  );
}
