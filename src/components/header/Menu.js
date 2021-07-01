import React from "react";
import styled from "styled-components";
import InputSearch from "./InputSearch";
import { useHistory } from "react-router";

import {AiOutlineShoppingCart,AiOutlineUser
} from "react-icons/ai";

export default function Menu() {
  let history = useHistory();
  const { name } = localStorage;

  function signOut(){
    return name
  }
  return (
      <StyledMenuBox>
          <InputSearch />
      <Options>
       <p>Olá, {name === undefined ? name : "visitante"} </p>
      <button onClick={()=> signOut}> {name === undefined ? "Sair": "Entrar"} </button>
      <button  onClick={()=> history.push("/sign-up")}><UserIcon />Minha conta</button >
      <button  onClick={()=> history.push("/")}><MarketIcon />Meu carrinho</button >
      </Options>
      
  </StyledMenuBox>
    
  );
}
const StyledMenuBox = styled.form`
background-color: pink;
width: 100%;
height: 40px;
margin-bottom: 10px;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 13px;

`;
const Options = styled.div`
width: 50%;
display: flex;
text-align: center;
align-items: center;
justify-content: space-between;
button{
background-color: pink;
display: flex;
cursor: pointer;
display: flex;
text-align: center;
align-items: center;
border:none;
}

`;
const MarketIcon = styled(AiOutlineShoppingCart)`
  font-size: 13px;
  cursor: pointer;
  margin-right: 5px;
`;
const UserIcon = styled(AiOutlineUser)`
  font-size: 13px;
  cursor: pointer;
  margin-right: 5px;
`;

