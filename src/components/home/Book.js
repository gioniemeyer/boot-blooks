
import styled from 'styled-components';
import book from '../../medias/book.jpg';

export default function Book() {

    // renderizar conforme infos do banco
    return(
        <Container>
            <img src={book} />
            <p>descrição</p>
            <p>preço</p>
        </Container>
    )
}

const Container = styled.div`

`