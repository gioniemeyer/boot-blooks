import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Categories from '../globalComponents/Categories';
import Slogan from "../globalComponents/Slogan";
import Cart from "./Cart";
import UserContext from '../../contexts/UserContext';
import { useHistory } from 'react-router';
import axios from 'axios';

export default function CartPage() {
    let history = useHistory();
    const {user} = useContext(UserContext);
    const [products, setProducts] = useState([]);
    console.log(user)

    useEffect(() => {

        if(!user) {
            alert("Favor, logar para prosseguir com a compra");
            return history.push("/");
        }

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        const req = axios.get(`${process.env.REACT_APP_API_BASE_URL}/cart`);
        req.then(() => {

        })
    }, [])
    return(
        <Container>
            <Slogan />

            <Categories />

            <Cart />
            
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 70vw;
    margin: 100px auto;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    font-family: 'Roboto', sans-serif;
   
    @media(max-width: 614px) {
        width: 90%;
        margin: 100px auto 20px auto;
    }
`