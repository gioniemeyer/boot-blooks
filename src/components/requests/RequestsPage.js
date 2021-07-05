import styled from "styled-components";
import Slogan from "../globalComponents/Slogan";
<<<<<<< HEAD:src/components/shopping/RequestsPage.js
=======
import MyRequests from "./MyRequests";
import Menu from "../header/Menu";
>>>>>>> main:src/components/requests/RequestsPage.js

export default function RequestsPage() {
    return (
        <Container>
            <Menu />
            <Slogan />
<<<<<<< HEAD:src/components/shopping/RequestsPage.js
            <Title>Pedido Concluído com sucesso!</Title>
=======
            <Title>Seus pedidos</Title>
            <MyRequests />
>>>>>>> main:src/components/requests/RequestsPage.js
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 70vw;
<<<<<<< HEAD
    margin: 0 auto;
=======
    margin: 100px auto 0 auto;
>>>>>>> main
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    font-family: 'Roboto', sans-serif;
    margin: 0 auto;
   
    @media(max-width: 614px) {
        width: 90%;
        margin: 50px auto 0px auto;
    }
`

const Title = styled.h1`
    font-size: 40px;
    margin: 100px auto;
`
