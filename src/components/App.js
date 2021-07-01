import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState} from "react";
import HomePage from "./home/HomePage";
import SignInPage from "./login/SignInPage";
import SignUpPage from "./login/SignUpPage";
import UserContext from "../contexts/UserContext";
import ProductsContext from "../contexts/ProductsContext";

import '../styles/reset.css';
import BookPage from "./internPages/BookPage";
import CartPage from "./shopping/CartPage";

export default function App() {
    const [user, setUser] = useState(undefined);
    const [products, setProducts] = useState([]);

    return (
    <>
        <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
            <Switch>
                <Route path='/sign-up' exact component={SignUpPage}/>

                <Route path='/sign-in' exact component={SignInPage}/>
                <ProductsContext.Provider value={{products, setProducts}}>
                    <Route path='/' exact component={HomePage}/>
                    
                    <Route path='/books/:id' exact component={BookPage}/>
            
                    <Route path='/shopping-cart' exact component={CartPage}/>
                </ProductsContext.Provider>
            </Switch>
        </BrowserRouter>
         </UserContext.Provider>
         </>
    )
}