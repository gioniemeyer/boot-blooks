import styled from "styled-components";
import { GiShoppingCart } from "react-icons/gi";
import { useHistory } from "react-router";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function BookContainer({book}) {
    let history = useHistory();
    const { user } = useContext(UserContext);
    const localToken = localStorage.getItem("token");
       
    const {id, image, title, sinopse, price} = book;
    const currency = (price / 100).toFixed(2).replace('.',',');

    function buy(e) {
        e.preventDefault();

        if(!user && !localToken) {
            alert("Favor, logar para prosseguir com a compra");
            return history.push("/sign-in");
        }

        const token = user?.token || localToken;

        const body = {
            token: token,
            bookId: id, 
            quantity: 1
        }

        const req = axios.post(`${process.env.REACT_APP_API_BASE_URL}/cart`, body);

        req.then(() => history.push("/shopping-cart"));

        req.catch(err => {
            const statusCode = err.response.status;
            if(statusCode === 403) {
                alert("A quantidade requerida é maior que a disponível em estoque, sinto muito... :/");
            } else if (statusCode === 500) {
                alert("Há algo estranho no nosso servidor, favor tente mais tarde.")
            }
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