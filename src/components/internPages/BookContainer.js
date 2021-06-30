import styled from "styled-components";
import { GiShoppingCart } from "react-icons/gi";
import { useHistory } from "react-router";
import axios from "axios";
import { useContext, useReducer } from "react";
import UserContext from "../../contexts/UserContext";

export default function BookContainer({book}) {
    let history = useHistory();
    const { user } = useContext(UserContext);

    const {id, image, title, sinopse, price} = book;
    const currency = (price / 100).toFixed(2).replace('.',',');

    console.log(user)

    function buy(e) {
        e.preventDefault();

        const body = {
            // userId: userId,
            bookId: id, 
            quantity: 1
        }

        const req = axios.post('http://localhost:4000/add-product', body);

        req.then(() => history.push("/shopping-cart"));

        req.catch(err => {
            const statusCode = err.response.status;
            alert(statusCode);
        })
    }


    return(
        <Container>
            <Image>
                <img src={image} alt={title}></img>
            </Image>
            <Description>
                <Title>{title}</Title>
                <Price>R$ {currency}</Price>
                <Button onClick={buy}>
                    <GiShoppingCart />
                    <span>Comprar</span>
                </Button>
                <Sinopse>{sinopse}</Sinopse>
            </Description>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;

    @media(max-width:614px) {
        flex-direction: column;
    } 
`

const Image = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width:70%;
        border: 1px #7f7f7f solid;
    }

    @media(max-width:614px) {
        width: 100%;
    } 
`
const Description = styled.div`
    width: 50%;
    color: #7f7f7f;
    text-align: start;
    word-wrap: break-word;

    @media(max-width:614px) {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Title = styled.h1`
    color: #070707;
    font-size: 25px;
    font-weight: bold;
`

const Price = styled.p`
    color: #c73615;
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
` 
const Button = styled.button`
    background-color: #ffb62a;
    height: 27px;
    width: 150px;
    border-radius: 4px;
    border: none;
    margin-bottom: 20px;

    span {
        margin-left: 7px;
        font-size: 14px;
    }
`
const Sinopse = styled.p`
    font-size: 14px;
    line-height: 20px;
    text-align: justify;
`