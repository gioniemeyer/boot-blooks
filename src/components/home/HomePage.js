import styled from "styled-components";

import books from '../../medias/books.jpeg';
import BooksContainer from "./BooksContainer";

export default function HomePage() {
    return(
        <Container>
            <Slogan>
                <h1>
                    BootBlooks
                </h1>
            </Slogan>
            <Categories>
                {/* devem vir do banco ? */}
                <p>dhsufhisuao</p>
                <p>dhsufhisuao</p>
                <p>dhsufhisuao</p>
                <p>dhsufhisuao</p>
            </Categories>
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

const Slogan = styled.div`
    background:url(${books});
    background-image: cover;
    height: 300px;
    width: 100%;

    @media(max-width: 614px) {
        height: 150px;
        width: 100%;
    }

    h1 {
    width: fit-content;
    margin: 140px auto;
    font-weight: bold;
    font-size: 70px;
    background-color: #000;
    color: #fff;

    @media(max-width: 614px) {
         font-size: 40px;
         margin: 70px auto;
     }
    } 
`

const Categories = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
`


