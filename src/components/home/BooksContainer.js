import styled from "styled-components";

import Book from "./Book";

export default function BooksContainer() {

    //useEffect para pegar infos do banco

    return (
        <Container>
            <Book />
        </Container>
    )

}

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;

    img {
        height: 180px;
        width: 130px;
    }
`
