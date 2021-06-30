import SignInPage from "./SignInPage";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Input from "../globalComponents/Input";
import HomePage from "../home/HomePage";
import FormBox from "../globalComponents/FormBox";
import {
  Container,
  SignUp,
  Division,
} from "./styledComponents/StyledSignUpPage";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  let history = useHistory();

  const equalPassword = (password === confirmPassword ? true : false);

  function SaveRegister(event) {
    event.preventDefault();
    if (!equalPassword) {
      alert("Senhas não conferem. Preencha corretamente.");
      return;
    } else if (!name || !email || !gender) {
      alert("Preencha todos os campos.");
      return;
    } else setIsDisabled(true);
    const body = {
      name,
      email,
      password,
    };
    const request = axios.post(
      "https://boot-blooks-back.herokuapp.com/sign-up",
      body
    );
    request.then(() => {
      setIsDisabled(false);
      alert("sucesso no cadastro!");
      history.push("/");
    });
    request.catch((error) => {
      setIsDisabled(false);
      if (error.response.status === 409) {
        alert(
          "Esse e-mail nao está disponível. Outro usuário já é cadastrado com o respectivo endereço."
        );
        return;
      } else if (error.response.status === 400) {
        alert("Preencha os campos corretamente.");
        return;
      }
    });
  }
  return (
    <>
      <HomePage />
      <Container>
        <SignInPage />
        <Division></Division>
        <SignUp>
          <h1>Criar novo cadastro</h1>
          <p>
            Use o formulário abaixo para cadastrar-se na loja.
            <br /> É rápido e fácil.
          </p>
          <FormBox onSubmit={SaveRegister}>
            <h2>Nome completo:</h2>
            <Input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              isDisabled={isDisabled}
            />
            <h2>E-mail:</h2>
            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              isDisabled={isDisabled}
            />
            <h2>Digite sua Senha:</h2>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              isDisabled={isDisabled}
            />
            <h2>Confirme a senha:</h2>
            <Input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              isDisabled={isDisabled}
            />
            <h2>Gênero:</h2>
            <div>
              <Input
                type="radio"
                radioName="gender"
                value="feminino"
                onChange={(e) => setGender(e.target.value)}
                isDisabled={isDisabled}
              />
              <label htmlFor="feminino">Feminino</label>
              <Input
                type="radio"
                radioName="gender"
                value="masculino"
                onChange={(e) => setGender(e.target.value)}
                isDisabled={isDisabled}
              />
              <label htmlFor="masculino">Masculino</label>
            </div>
            <button type="submit" onClick={SaveRegister}>
              Cadastrar
            </button>
          </FormBox>
        </SignUp>
      </Container>
    </>
  );
}
