import React, { useContext, useState } from "react";
import styled from "styled-components";
import InputSearch from "./InputSearch";
import axios from "axios";
import { useHistory } from "react-router";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { FaBars, FaUserAlt, FaShoppingBag, FaShoppingCart } from "react-icons/fa";

export default function Menu() {
  let history = useHistory();
  const { name, token } = localStorage;
  const { user } = useContext(UserContext);
  const [showNavMobile, setShowNavMobile] = useState(0);
  console.log(localStorage);
  console.log(user, name);
  function toggleMenu() {
    showNavMobile === 0 ? setShowNavMobile(1) : setShowNavMobile(0);
  }
  function signOut() {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const request = axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/sign-out`,
      {},
      config
    );
    request.then(() => {
      localStorage.clear();
      console.log(localStorage);
      history.push("/");
    });
  }
  return (
    <StyledMenuBox>
      <InputSearch />
      <Options>
        <p>Olá, {name === undefined ? "visitante" : name} </p>
        <button
          onClick={name ? () => signOut() : () => history.push("/sign-up")}
        >
          {name ? "Sair" : "Entrar"}
        </button>
        <Link to="/sign-up">
          <UserIcon />
          Minha conta
        </Link>
        {name ? (
          <Link to="/sign-up">
            <BuyIcon />
            Meus pedidos
          </Link>
        ) : (
          ""
        )}
        <Link to="/">
          <MarketIcon />
          Meu carrinho
        </Link>
      </Options>

      <BarIcon onClick={toggleMenu} />

      {showNavMobile === 1 && (
        <NavMobile>
          <button
            onClick={name ? () => signOut() : () => history.push("/sign-up")}
          >
            {name ? "Sair" : "Entrar"}
          </button>
          <Link to="/sign-up">
            <UserIcon />
            Minha conta
          </Link>
          {name ? (
            <Link to="/sign-up">
              <BuyIcon />
              Meus pedidos
            </Link>
          ) : (
            ""
          )}
          <Link to="/">
            <MarketIcon />
            Meu carrinho
          </Link>
        </NavMobile>
      )}
    </StyledMenuBox>
  );
}
const StyledMenuBox = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  z-index: 99;
  color:black;
  @media (max-width: 614px) {
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
  }
`;
const NavMobile = styled.div`
  display: none;
  @media (max-width: 614px) {
    background-color: black;
    width: 34%;
    height: 90px;
    position: fixed;
    top: 38px;
    right: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    border-radius: 1px;
    padding: 10px;
    text-align: right;
    z-index: 3 !important;
    button {
      cursor: pointer;
      border: none;
      outline: transparent;
      background-color: black;
      color: white;
    }
  }
`;

const Options = styled.div`
  width: 70%;
  display: flex;
  text-align: bottom;
  align-items: center;
  justify-content: space-between;
  line-height: 25px;

  button {
    cursor: pointer;
    border: none;
    outline: transparent;
    background-color: #fff;
  }

  @media (max-width: 614px) {
    display: none;
  }
`;
const MarketIcon = styled(FaShoppingCart)`
  font-size: 13px;
  cursor: pointer;
  margin-right: 5px;
`;
const UserIcon = styled(FaUserAlt)`
  font-size: 13px;
  cursor: pointer;
  margin-right: 5px;
`;
const BuyIcon = styled(FaShoppingBag)`
  font-size: 13px;
  cursor: pointer;
  margin-right: 5px;
`;

const BarIcon = styled(FaBars)`
  display: none;
  @media (max-width: 614px) {
    display: block;
    color: white;
    font-size: 17px;
    margin-right: 10px;
  }
`;
