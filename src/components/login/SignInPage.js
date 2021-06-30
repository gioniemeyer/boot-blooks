import { SignIn } from "./styledComponents/StyledSignInPage";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ErrorSignIn from "./ErrorSignIn.js";
import UserContext from "../../contexts/UserContext.js";
import Input from "../globalComponents/Input";
import FormBox from "../globalComponents/FormBox";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const { setUser } = useContext(UserContext);
  let history = useHistory();

  function Login(event) {
    event.preventDefault();
    if (email && password) {
      setIsDisabled(true);
      const body = {
        email,
        password,
      };
      const request = axios.post("http://localhost:4000/sign-in", body);
      request.then((response) => {
        setIsDisabled(false);
        setUser(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
        history.push("/");
      });
      request.catch((error) => {
        setIsDisabled(false);
        alert("Não foi possível realizar o login.");
        <ErrorSignIn error />;
      });
    }
  }
  return (
    <>
      <SignIn>
        <h1>Já tem cadastro na loja?</h1>
        <p>
          Se você já tem seu cadastro na loja, informe nos campos
          <br />
          abaixo seu email e sua senha de acesso à loja.
        </p>

        <FormBox onSubmit={Login}>
          <h2>E-mail:</h2>
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isDisabled}
            isDisabled={isDisabled}
          />
          <h2>Sua Senha:</h2>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isDisabled}
            isDisabled={isDisabled}
          />
          <button type="submit" onClick={Login}>
            Entrar
          </button>
        </FormBox>
      </SignIn>
    </>
  );
}
