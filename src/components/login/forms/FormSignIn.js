import React from "react";
import { StyledForm } from "../styledComponents/StyledForm";

export default function FormSignIn({ children, onSubmit }) {
  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        {children}
      </StyledForm>
    </>
  );
}
