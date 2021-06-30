import { SignIn} from "./styledComponents/StyledSignInPage"; 
import FormSignIn  from "./forms/FormSignIn.js";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ErrorSignIn from "./errorAlerts/ErrorSignIn.js";
import UserContext from "../../contexts/UserContext";

export default function SignInPage() {

  return (
    <>
      <SignIn>
        <h1>Já tem cadastro na loja?</h1>
        <p>
          Se você já tem seu cadastro na loja, informe nos campos
          <br />
          abaixo seu email e sua senha de acesso à loja.
        </p>
        <FormSignIn/>
      </SignIn>
    </>
  );
}
