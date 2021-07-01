import axios from "axios";
import styled from "styled-components";
import UserContext from '../../contexts/UserContext';
import { useContext } from "react";
import ProductsContext from '../../contexts/ProductsContext';

export default function Item({product}) {
    const {user} = useContext(UserContext);
    const localToken = localStorage.getItem("token");
    const {image, title, price, quantity, id} = product;
    console.log(product);
    const value = (price / 100).toFixed(2).replace('.',',');
    const total = ((price * quantity) / 100).toFixed(2).replace('.',',');
    const {setProducts} = useContext(ProductsContext);
    const token = user?.token || localToken;
    const config = {
        headers: { Authorization: `Bearer ${token}`}
        };

    function changeQuantity(value) {

        const body = {quantity: value, bookId: id}
            
        const req = axios.post(`${process.env.REACT_APP_API_BASE_URL}/update-cart`, body, config)
        req.then(res => setProducts(res.data))
        req.catch(err => {
            const statusCode = err.response.status;
            if(statusCode === 403) {
                alert("A quantidade requerida é maior que a disponível em estoque, sinto muito... :/");
            } else if (statusCode === 500) {
                alert("Há algo estranho no nosso servidor, favor tente mais tarde.")
            }
        })
    }

    function removeItem() {
        const body = {bookId: id}

        const req = axios.post(`${process.env.REACT_APP_API_BASE_URL}/delete-book`, body, config)
        req.then(res => setProducts(res.data))
        req.catch(() => {            
            alert("Há algo estranho no nosso servidor, favor tente mais tarde.")
        })
    }

    return(
        <Product>
            <General>
                <img src={image} alt={title}/>
                <div>
                    <p>{title}</p>
                    <Remove onClick={removeItem}>remover do carrinho</Remove>
                </div>

            </General>
            
            <Quantity>
                <button onClick={() => changeQuantity(-1)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => changeQuantity(1)}>+</button>
            </Quantity>
            <Value>{value}</Value>
            <Total>{total}</Total>
        </Product>
    )
}

const Product = styled.div`
    display:flex;
    height: 75px;
    align-items: center;
    margin: 0 8px 1px 8px;
    border: dashed 0.5px #ececec;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    color: #3a422a;

    p {
        font-size: 15px;
    }

    @media(max-width: 614px) {
        justify-content: space-evenly;
    }
`
const General = styled.div`
    height: 100%;
    width:46%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 12px;

    img {
        width: 60px;
        height: 60px;
        border: solid 1px #ececec;
        margin: 0 8px;
    }

    @media(max-width: 614px) {
        width: 20%;
        p {
            display: none;
        }
    }
`

const Remove = styled.p`
    margin-top: 5px;
    color: #a83218;
    font-weight: bold;
`

const Quantity = styled.div`
    height: 100%;
    width:15%;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        margin: 0 3px;
    }
    button {
        background: none;
        border: none;
        color: red;
        font-size:18px;
    }

    @media(max-width: 614px) {
        p {
            display: none;
        }
    }
`
const Value = styled.div`
    height: 100%;
    width:15%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Total = styled.div`
    height: 100%;
    width:15%;
    display: flex;
    align-items: center;
    justify-content: center;
`