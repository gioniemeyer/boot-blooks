import styled from 'styled-components';
import Item from './Item.js'

export default function Cart({products}) {
    return (
        <Container>
            <Headers>
                <span>Produto</span>
                <span>Quantidade</span>
                <span>Valor Unitário</span>
                <span>Valor Total</span>
            </Headers>
            <Product>
                {products.map(p => <Item product={p}/>)}
            </Product>
        </Container>
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

const Headers = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Product = styled.div`
    background-color: #fff;
    width: 90%;
    margin: 20px 0;
`