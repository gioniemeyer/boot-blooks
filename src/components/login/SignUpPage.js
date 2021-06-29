import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  let history = useHistory();

 console.log(name, password, email, gender)
  function SaveRegister(event) {
    event.preventDefault();
    if (name && email && password && confirmPassword) {
      setIsDisabled(true);
      const body = {
        name: name,
        email,
        password,
      };
      const request = axios.post("http://localhost:4000/sign-up", body);
      request.then(() => {
        setIsDisabled(false);
        alert("sucesso no cadastro!");
        history.push("/");
      });
      request.catch(() => {
        setIsDisabled(false);
        alert("Não foi possível realizar o cadastro.");
      });
    }
  }
  return (
    <>
      <Container>
        <SignIn>oi</SignIn>
        <Division></Division>
        <SignUp>
          <h1>Criar novo cadastro</h1>
          <p>
            Use o formulário abaixo para cadastrar-se na loja.
            <br/> É rápido e fácil.
          </p>
          <Form onSubmit={SaveRegister}>
            <h2>Nome completo:</h2>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              disabled={isDisabled}
              required
            ></input>
            <h2>E-mail:</h2>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled={isDisabled}
              required
            ></input>
            <h2>Digite sua Senha:</h2>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              disabled={isDisabled}
              required
            ></input>
            <h2>Confirme a senha:</h2>
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              disabled={isDisabled}
              required
            ></input>

            <h2>Gênero:</h2>
            <form className="genderForm">
              <input type="radio" 
               name="gender"
               value ="feminino"
               onClick={() => setGender('Feminino')}
               required />
              <label for="feminino">Feminino</label>
              <input type="radio"
               name="gender"
               value="masculino"
               onClick={() => setGender('Masculino')}
               required />
              <label for="masculino">Masculino</label>
            </form>
            <button type="submit" onClick={SaveRegister}>
              Cadastrar
            </button>
          </Form>
        </SignUp>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  margin: 0 auto;
`;

const Division = styled.div`
  width: 0.5px;
  height: 500px;
  background-color: gray;
`;

const SignUp = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: black;
  .genderForm {
    display: flex;
    align-items: center;
    label {
      margin-bottom: 5px;
    }
  }

  h1 {
    font-size: 30px;
    margin-bottom: 20px;
    color: #8e1a0a;
  }
  p {
    font-size: 14px;
    line-height: 18px;
    color: gray;
  }
`;

const SignIn = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
