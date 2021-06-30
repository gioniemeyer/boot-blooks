import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  let history = useHistory();
  console.log(password, email);

  function Login(event) {
    event.preventDefault();
    if (email && password) {
      setIsDisabled(true);
      const body = {
        email,
        password,
      };
      const request = axios.post("http://localhost:4000/sign-in", body);
      request.then(() => {
        setIsDisabled(false);
        alert("sucesso no cadastro!");
        history.push("/");
      });
      request.catch((error) => {
        setIsDisabled(false);
        alert("Não foi possível realizar o login.");
        if (error.message === "Request failed with status code 401") {
          alert("Senha incorreta! Tente novamente.");
          return;
        }
        if (error.message === "Request failed with status code 400") {
          alert("Preencha os campos corretamente.");
          return;
        }
        if (error.message === "Request failed with status code 404") {
          alert("Não encontramos um registro de usuário para esse e-mail.");
          return;
        }
      });
    }
  }
  return (
    <>
        <SignIn>
          <h1>Já tem cadastro na loja?</h1>
          <p>
            Se você já tem seu cadastro na loja, informe nos campos 
            <br/>
            abaixo seu email e sua senha de acesso à loja.
          </p>
          <Form onSubmit={Login}>
            <h2>E-mail:</h2>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled={isDisabled}
              required
            ></input>
            <h2>Sua Senha:</h2>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              disabled={isDisabled}
              required
            ></input>
            <button type="submit" onClick={Login}>
              Entrar
            </button>
          </Form>
        </SignIn>
    </>
  );
}

const SignIn = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  color: black;

  h1 {
    font-size: 30px;
    margin-bottom: 20px;
    color: #8e1a0a;
  }
  p {
    font-size: 13px;
    line-height: 18px;
    color: gray;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;

  h2 {
    margin: 15px 0px 10px 0px;
  }

  button {
    height: 35px;
    width: 65%;
    background-color: #8e1a0a;
    border-radius: 5px;
    border: none;
    margin-bottom: 30px;
    outline: transparent;
    color: #ffffff;
    font-size: 20px;
    line-height: 23px;
    cursor: pointer;
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
`;
