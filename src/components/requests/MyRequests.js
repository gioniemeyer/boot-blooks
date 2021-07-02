import axios from "axios";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

export default function MyRequests() {
    let history = useHistory();
    const {user} = useContext(UserContext);
    const localToken = localStorage.getItem("token");

    useEffect(() => {
        if(!user && !localToken) {
            alert("Favor, logar para prosseguir com a compra");
            return history.push('/sign-in');
        }
        const token = user?.token || localToken;
        const config = {
            headers: {Authorization: `Bearer ${token}`}
        }
        const req = axios.get(`${process.env.REACT_APP_API_BASE_URL}/myrequests`, config);
        req.then(res => console.log(res.data));
        req.catch(() => console.log('deu ruim'));
    }, [user, localToken])

    return(
        <p>tá renderizando?</p>
    )
}
