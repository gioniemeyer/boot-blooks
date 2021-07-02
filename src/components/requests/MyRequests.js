import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import Request from "./Request";

export default function MyRequests() {
    let history = useHistory();
    const { user } = useContext(UserContext);
    const localToken = localStorage.getItem("token");
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        if (!user && !localToken) {
            alert("Favor, logar para prosseguir com a compra");
            return history.push('/sign-in');
        }
        const token = user?.token || localToken;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const req = axios.get(`${process.env.REACT_APP_API_BASE_URL}/myrequests`, config);
        req.then(res => setRequests(res.data));
        req.catch(() => console.log('deu ruim'));
    }, [user, localToken])

    return (
        <>
        {
            requests.length === 0 ?
                <EmptyCart>Você ainda não fez nenhum pedido :(</EmptyCart> :
                <Container>
                    <Headers>
                        <span>Produto</span>
                        <span>Quantidade</span>
                        <Optional>Forma de pagamento</Optional>
                        <Optional>Forma de entrega</Optional>
                        <span>Valor Total</span>
                    </Headers>
                    <Product>
                    {
                        requests.map(item => <Request key={item.id} item={item} />)
                    }
                    </Product>
                </Container>
        }
        </>
    )
}

const Container = styled.div`
    width: 100%;
    background-color: #ececec;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto auto;
    flex-direction: column;
    position: relative;
`
const EmptyCart = styled.h1`
    font-size: 40px;
    margin: 100px auto;
`

const Headers = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    span {
        color: #b09d99;
    }
    
    @media(max-width: 614px) {
        height: 45px;
        font-size: 14px;
    }
`

const Optional = styled.span`
    @media(max-width: 614px) {
        display: none;
    } 
`

const Product = styled.div`
    width: 100%;
    margin: 0 3px 30px 3px; 
`

