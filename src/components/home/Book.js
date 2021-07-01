
import { useHistory } from 'react-router';
import styled from 'styled-components';

export default function Book({book}) {
    let history = useHistory();
    const {id, title, image, price} = book;
    const currency = `R$ ${(price / 100).toFixed(2).replace('.',',')}` 
    function openBook() {
        history.push(`/books/${id}`)
    }
    return(
        <Container onClick={openBook}>
            <img src={image} alt={title}/>
            <Title>{title}</Title>
            <Price>{currency}</Price>
        </Container>
    )
}

const Container = styled.div`
    word-wrap: break-word;
    width: 220px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    padding-bottom: 25px;

    img {
        height: 275px;
        width: 205px;
        box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
        
        @media(max-width: 614px) {
        height: 215px;
        max-width: 145px;
        width: 100%;    
        }
    
    }

    @media(max-width: 614px) {
        max-width: 160px;
        width: 45%;
    }

    :hover {
        img {
            opacity: 0.7;
        }
        h1 {
            color: #070707;
        }
        cursor: pointer;
    }

`

const Title = styled.h1`
    color: #7f7f7f;
    padding: 15px 0;
    text-align: center;
`

const Price = styled.p`
    color: #a83218;
` 