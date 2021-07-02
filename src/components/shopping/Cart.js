import styled from 'styled-components';
import Item from './Item.js'
import ProductsContext from '../../contexts/ProductsContext';
import { useContext } from "react";
import BuyInfos from './BuyInfos';

export default function Cart() {
    const {products} = useContext(ProductsContext);
    let finalPrice = 0;

    for (let i = 0; i < products?.length; i++) {
        finalPrice += products[i].price * products[i].quantity;
    }

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
                    <TotalDiv>
                        <p>Total:</p>
                        <FinalPrice>{(finalPrice / 100).toFixed(2).replace('.',',')}</FinalPrice>
                    </TotalDiv>
                </Container>
                <BuyInfos />

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
const TotalDiv = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 30px;
    width: 100%;
    padding-right: 5%;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    color: #b09d99;
    font-weight: bold;

`
const FinalPrice = styled.p`
    padding-left: 13%;
    color: #000;
`