import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./home/HomePage";
import SignInPage from "./login/SignInPage";
import SignUpPage from "./login/SignUpPage";

import '../styles/reset.css';
import BookPage from "./internPages/BookPage";
import CartPage from "./shopping/CartPage";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/sign-up' exact component={SignUpPage}/>

                <Route path='/sign-in' exact component={SignInPage}/>

                <Route path='/' exact component={HomePage}/>

                <Route path='/books/:id' exact component={BookPage}/>
          
                <Route path='/shopping-cart' exact component={CartPage}/>

            </Switch>
        </BrowserRouter>
    )
}