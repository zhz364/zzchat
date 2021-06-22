import React, { useContext } from "react";
import {Link} from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Logout from "../auth/Logout"
import '../layout/navbar.css';
function Navbar(){

    const { loggedIn } = useContext(AuthContext);
    console.log(loggedIn)
    return <div className="navbar-div">
        <div className="navbar-logo"><Link to="/"><img src="../../../transparentLogo.png" width="15%" ></img></Link></div>
        {loggedIn === false && (
                <div className="right-navbar">
                    <div className="navbar-register"><Link to="/register"><button className="navbar-button">Register</button></Link></div>
                    <div className="navbar-login"><Link to="/login"><button className="navbar-button">Login</button></Link></div>
                </div>
        )}
        {loggedIn === true && <Logout/>}
    </div>

};

export default Navbar;