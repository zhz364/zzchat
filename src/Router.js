import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Register from "../src/components/auth/Register"

function Router(){
    return <BrowserRouter>
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