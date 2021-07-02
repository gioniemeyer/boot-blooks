import axios from "axios";
import styled  from "styled-components";
import {
    Button,
    Form,
    FormField,
    RadioButtonGroup
  } from "grommet";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import ProductsContext from "../../contexts/ProductsContext";
import UserContext from '../../contexts/UserContext';

export default function({...props}) {
    let history = useHistory();
    const [where, setWhere] = useState('Pegar na loja');
    const [payment, setPayment] = useState('Pix');
    const {products} = useContext(ProductsContext);
    const {user} = useContext(UserContext);
    const {setProducts} = useContext(ProductsContext);
    const localToken = localStorage.getItem("token");

    function finishShopping() {

        if(!user && !localToken) {
            alert("Favor, logar para prosseguir com a compra");
            return history.push("/sign-in");
        }

        const token = user?.token || localToken;

        const body = {
            paymentMethod: payment, 
            receiveMethod: where
        }
        const config = {
            headers: { Authorization: `Bearer ${token}`}
        };
        console.log(token);
        console.log(body);
        const req = axios.post(`${process.env.REACT_APP_API_BASE_URL}/conclusion`, body, config)
        
        req.then(() => history.push('/conclusion'))
    }

    return(
        <ShoppingForm onSubmit={finishShopping}>
            <Label for='doc'>Modalidade de entrega</Label>
            <RadioButton
                name="doc"
                options={['Pegar na loja', 'entrega em casa']}
                value={where}
                onChange={(event) => {
                    event.stopPropagation()
                    setWhere(event.target.value)
                }}
                {...props}
            />

            {where === 'entrega em casa' ? 
                <FormField name="address" label="Endereço" /> :
                ""
            }

            <Label for='doc2'>Modalidade de pagamento</Label>

            <RadioButton
                name="doc2"
                options={['Pix', 'Boleto']}
                value={payment}
                onChange={(event) => {
                    event.stopPropagation()
                    setPayment(event.target.value)
                }}
                {...props}
            />

            {payment === 'Pix' ? 
                <p>Envie para boot-blooks@email.com</p> :
                <p>Você receberá no seu e-mail :)</p>
            }
 
            <ShoppingButton type="submit" label="Finalizar Compra" primary={true} />

        </ShoppingForm>
    )
}

const ShoppingForm = styled(Form)`
    width: 40%;

    @media (max-width: 780px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Label = styled.label`
    font-weight: bold;
`

const ShoppingButton = styled(Button)`
    margin-top: 50px;
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

const RadioButton = styled(RadioButtonGroup)`
    margin: 15px 0;
    svg {
        fill: #8e2210;
    }
    label {
        div {
            div {
                border: #3a422a 2px solid;
            }
        }
    }
`