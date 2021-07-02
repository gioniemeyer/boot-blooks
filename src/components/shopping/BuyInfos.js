import styled from 'styled-components';
import Form from './Form.js'


export default function BuyInfos() {

    return (
        <Container>
            <Button>
                Continuar comprando
            </Button>
            <Form />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    margin-top: 50px;
    justify-content: space-between
`

const Button = styled.button`
    background-color: #8e2210;
    width: 200px;
    color: #fff;
    border-radius: 3px;
    height: 50px;
    border:none;
    font-weight: bold;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
    font-size: 15px;
`