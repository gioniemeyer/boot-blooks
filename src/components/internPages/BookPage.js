import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Categories from '../globalComponents/Categories';
import Slogan from "../globalComponents/Slogan";
import BookContainer from "./BookContainer";

export default function BookPage() {
    let history = useHistory();
    let {id} = useParams();
    const [book, setBook] = useState({});
    
    useEffect(() => {
        id = parseInt(id);

        const req = axios.get(`${process.env.REACT_APP_API_BASE_URL}/books/${id}`);

        req.then(res => setBook(res.data))

        req.catch(err => {
            const statusCode = err.response.status;
            if(statusCode === 404) {
                alert("Desculpe, este livro não existe ainda na nossa livraria :(")
                history.push('/');
            } else {
                alert("Deu um erro inesperado, favor tente mais tarde!")
            }
        })
    }, [id]);


    return(
        <Container>
            <Slogan />

            <Categories />
                        
            <BookContainer book={book} />
            
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