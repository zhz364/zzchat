import React, { useContext } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Register from "../src/components/auth/Register"
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import AuthContext from "./context/AuthContext";
import Home from "./components/home/Home";

function Router(){
    const { loggedIn } = useContext(AuthContext);

    return <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            {
                loggedIn === false && (<>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>            
                </>)
            }
            {
                loggedIn === true && (<>
                    <Route path="/logout">
                        <Logout />
                    </Route>
                </>)
            }
            
        </Switch>
    </BrowserRouter>
};

export default Router;