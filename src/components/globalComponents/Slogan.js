import books from '../../medias/books.jpeg';
import styled from 'styled-components';


export default function Slogan() {
    return (
        <Container>
            <h1>
                BootBlooks
            </h1>
        </Container>
    )
}


const Container = styled.div`
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