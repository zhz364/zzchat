import React, {useContext, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import AuthContext from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import "../auth/login.css"

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();
    async function login(e){
        e.preventDefault();
        try{
            const loginData = {
                username,
                password
            }
            await axios.post("http://localhost:5000/users/login",loginData);
            await getLoggedIn();
            history.push("/")
        }catch(err){
            console.log({errorMessage: "Wrong username or password"});
        }
    }

    return <div className="login-div">
        <h1 className="title">Welcome back!</h1>
        <div className="login-form"><form onSubmit={login}>
            <div className="option">EMAIL</div>
            <div className="login-input-div"><input className="login-input" type="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}></input></div>
            <div className="option">PASSWORD</div>
            <div className="login-input-div"><input className="login-input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}></input></div>
            <button className="login-btn" type="submit">Login</button>
        </form></div>
        <div className="other-option-div">
            <div className="options-context">Need an account? <Link className="register-link" to="/register"><span className="login-register">Register</span></Link></div>
            <div className="options-context">Use the Demo Account</div>
        </div>
        
    </div>;
};

export default Login