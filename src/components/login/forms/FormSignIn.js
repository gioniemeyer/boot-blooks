  
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
//import ErrorSignIn from "../../errorAlerts/ErrorSignIn.js";
import UserContext from "../../../contexts/UserContext";
import Input from "../Input";
import { StyledForm } from "../styledComponents/StyledForm";

export default function FormSignIn() {
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
        console.log("sucess");
        setIsDisabled(false);
        setUser(responsedata);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.username);
        history.push("/");
      });
      request.catch((error) => {
        setIsDisabled(false);
        alert("Não foi possível realizar o login.");
        if (error.response.status === 401) {
          alert("Senha incorreta! Tente novamente.");
          return;
        }
       else  if (error.response.status === 400) {
          alert("Preencha os campos corretamente.");
          return;
        }
       else if (error.response.status === 409) {
          alert("Não encontramos um registro de usuário para esse e-mail.");
          return;
        }
        });
    }
  }
  return (
    <>
      <StyledForm onSubmit={Login}>
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
      </StyledForm>
    </>
  );
}
