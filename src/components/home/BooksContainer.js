import styled from "styled-components";
import axios from 'axios';
import { useEffect, useState } from 'react';

import Book from "./Book";

export default function BooksContainer() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const req = axios.get(`${process.env.REACT_APP_API_BASE_URL}/books`);
        
        req.then(res => {
            setBooks(res.data);
        })
    }, [])

    return (
        <>
        <Title>Nossa estante</Title>
        <Container>
            {
                books.map(book => <Book key={book.id} book={book} />)
            }
        </Container>
        </>
    )

}

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Title = styled.h1`
    font-weight: bold;
    font-size: 25px;
    color: #000;
    padding-bottom: 25px;
`
