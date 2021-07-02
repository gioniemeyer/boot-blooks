import styled from "styled-components";
import Slogan from "../globalComponents/Slogan";

export default function RequestsPage() {
    return (
        <Container>
            <Slogan />
            <Title>Pedido Concluído com sucesso!</Title>
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

const Title = styled.h1`
    font-size: 40px;
    margin: 100px auto;
`
