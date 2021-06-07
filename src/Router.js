import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Register from "../src/components/auth/Register"
import Navbar from "./components/layout/Navbar";

function Router(){
    return <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/">
                <div>Home</div>
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <div>login</div>
            </Route>
        </Switch>
    </BrowserRouter>
};

export default Router;