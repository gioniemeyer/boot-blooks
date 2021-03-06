import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Slogan from "../globalComponents/Slogan";
import Cart from "./Cart";
import UserContext from '../../contexts/UserContext';
import { useHistory } from 'react-router';
import axios from 'axios';
import ProductsContext from '../../contexts/ProductsContext';
import Menu from "../header/Menu";

export default function CartPage() {
    let history = useHistory();
    const {user} = useContext(UserContext);
    const {setProducts} = useContext(ProductsContext);
    const localToken = localStorage.getItem("token");

    useEffect(() => {

        if(!user && !localToken) {
            alert("Favor, logar para prosseguir com a compra");
            return history.push("/sign-in");
        }

        const token = user?.token || localToken;

        const config = {
            headers: { Authorization: `Bearer ${token}`}
          };

        const req = axios.get(`${process.env.REACT_APP_API_BASE_URL}/cart`, config);
        req.then(res => setProducts(res.data))
    }, [user, localToken])

    return(
        <Container>
            <Menu />
            <Slogan />
            <Cart />
        </Container>
    )
}

const Container = styled.div`
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