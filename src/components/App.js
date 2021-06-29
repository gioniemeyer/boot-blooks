import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./home/HomePage";
import SignInPage from "./login/SignInPage";
import SignUpPage from "./login/SignUpPage";

import '../styles/reset.css';

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/sign-up' exact component={SignUpPage}/>

                <Route path='/sign-in' exact component={SignInPage}/>

                <Route path='/' exact component={HomePage}/>

            </Switch>
        </BrowserRouter>
    )
}