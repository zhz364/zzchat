import React, { useContext } from "react";
import {Link} from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Navbar(){

    const { loggedIn } = useContext(AuthContext);
    console.log(loggedIn)
    return <div>
        <Link to="/">Home</Link>
        {!loggedIn && (
                <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </>
        )}
        {loggedIn &&<Link to="/logout">Logout</Link>}

        

    </div>

};

export default Navbar;