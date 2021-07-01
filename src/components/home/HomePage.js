
import BooksContainer from "./BooksContainer";
import Categories from "../globalComponents/Categories";
import styled from 'styled-components';
import Slogan from "../globalComponents/Slogan";
import Menu from "../header/Menu";

export default function HomePage() {
    console.log(localStorage)
    return(
         <Container>
            <Menu />
            <Slogan />
            <Categories />
            <BooksContainer />
        </Container>)
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
        margin: 100px auto 20px auto;
    }
`