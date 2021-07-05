import SignInPage from "./SignInPage";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Input from "../globalComponents/Input";
import FormBox from "../globalComponents/FormBox";
import UserContext from "../../contexts/UserContext";
import {
  Container,
  SignUp,
  Division,
  ContainerLogin
} from "./styledComponents/StyledSignUpPage";
import Menu from "../header/Menu";
import Slogan from "../globalComponents/Slogan";
import styled from "styled-components";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const { setUser } = useContext(UserContext);
  let history = useHistory();

  const equalPassword = (password === confirmPassword ? true : false);
  
  function SaveRegister(event) {
    event.preventDefault();
    if (!equalPassword) {
      alert("Senhas não conferem. Preencha corretamente.");
      return;
    } else if (!name || !email) {
      alert("Preencha todos os campos.");
      return;
    } else setIsDisabled(true);
    const body = {
      name,
      email,
      password
    };
    const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-up`, body);
    request.then(() => {
      setIsDisabled(false);
      setUser(name);
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
      <Container>
        <Header>
          <Menu />
          <Slogan />
        </Header>
        <ContainerLogin>
        <SignInPage />
        <Division></Division>
        <SignUp>
          <div><h1>Criar novo cadastro</h1>
          <p>
            Use o formulário abaixo para cadastrar-se na loja.
            <br /> É rápido e fácil.
          </p></div>
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
            
            <button type="submit" onClick={SaveRegister}>
              Cadastrar
            </button>
          </FormBox>
        </SignUp>

        </ContainerLogin>
      </Container>
    </>
  );
}

const Header = styled.div`
    height: 100%;
    width: 70vw;
    margin: 100px auto 0 auto;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    font-family: 'Roboto', sans-serif;
    margin: 0 auto;
   
    @media(max-width: 614px) {
        width: 90%;
        margin: 50px auto 0px auto;
    }
`