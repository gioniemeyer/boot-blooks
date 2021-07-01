import styled from 'styled-components';
import Item from './Item.js'
import ProductsContext from '../../contexts/ProductsContext';
import { useContext } from "react";

export default function Cart() {
    const {products} = useContext(ProductsContext);

    return (
        <>
        {
            products.length === 0 ?
                <EmptyCart>Seu carrinho de compras ainda está vazio :(</EmptyCart> :
                <>
                <Container>
                    <Headers>
                        <Title>Produto</Title>
                        <Quantity>Quantidade</Quantity>
                        <Price>Valor Unitário</Price>
                        <Total>Valor Total</Total>
                    </Headers>
                    <Product>
                        {products.map(p => <Item key={p.id} product={p} />)}
                    </Product>
                </Container>
                <Button>
                    Continuar comprando
                </Button>
                </>
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

`

const EmptyCart = styled.h1`
    font-size: 40px;
    margin: 100px auto;
`

const Headers = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        color: #b09d99;
    }

    @media(max-width: 614px) {
        height: 45px;
    }
`

const Title = styled.span`
    padding-left: 10%;
`
const Quantity = styled.span`
    padding-left: 30%;
    @media(max-width: 614px) {
        padding-left: 5%;
    }
`
const Price = styled.span`
    padding-left: 3%;

`
const Total = styled.span`
    padding-right: 5%;
`

const Product = styled.div`
    width: 100%;
    margin: 0 3px 30px 3px; 
`

const Button = styled.button`
    background-color: #8e2210;
    width: 200px;
    color: #fff;
    border-radius: 3px;
    height: 50px;
    margin-top: 50px;
    border:none;
    font-weight: bold;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
    font-size: 15px;
`