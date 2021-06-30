
import BooksContainer from "./BooksContainer";
import Categories from "../globalComponents/Categories";
import styled from 'styled-components';
import Slogan from "../globalComponents/Slogan";


export default function HomePage() {
    return(
        <Container>
            <Slogan />

            <Categories />
            <BooksContainer />
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 70vw;
    margin: 100px auto 0 auto;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    font-family: 'Roboto', sans-serif;
   
    @media(max-width: 614px) {
        width: 90%;
        margin: 100px auto 20px auto;
    }
`