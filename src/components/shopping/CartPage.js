import styled from 'styled-components';
import Categories from '../globalComponents/Categories';
import Slogan from "../globalComponents/Slogan";
import Cart from "./Cart";

export default function CartPage() {
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