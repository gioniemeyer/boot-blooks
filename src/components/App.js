import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState} from "react";
import HomePage from "./home/HomePage";
import SignInPage from "./login/signIn/SignInPage";
import SignUpPage from "./login/signUp/SignUpPage";
import UserContext from "../contexts/UserContext";

import '../styles/reset.css';

export default function App() {
    const [user, setUser] = useState(undefined);
    return (
    <>
        <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
            <Switch>
                <Route path='/sign-up' exact component={SignUpPage}/>

                <Route path='/sign-in' exact component={SignInPage}/>

                <Route path='/' exact component={HomePage}/>

                <Route path='/book/:id' exact component={HomePage}/>


            </Switch>
        </BrowserRouter>
         </UserContext.Provider>
         </>
    )
}