import styled from 'styled-components';

export default function Categories() {
    return (
        <Container>
            <p>AutorAs</p>
            <p>Autoros Negres</p>
            <p>Em Promoção</p>
            <p>Nacionais</p>
        </Container>
    )
}

const Container = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;

    p {
        font-weight: bold;
        letter-spacing: 0.8;
        :hover {
            cursor: pointer;
        }
    }
`