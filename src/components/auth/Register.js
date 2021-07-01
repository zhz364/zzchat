import React, {useState, useContext,useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import AuthContext from "../../context/AuthContext";
import "./register.css"

function Register(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();

    async function register(e){
        e.preventDefault();
        try{
            const registerData = {
                username,
                password
            }

            await axios.post("http://localhost:5000/users/add",registerData);
            await getLoggedIn();
            history.push("/")
        }catch(err){
            console.log(err.response.data)
            setErrorMessage(`${err.response.data}`);
        }
    }

    async function clearError(e){
        if(username || password){
            setErrorMessage('');
        }
    }

    return <div className="register-div">
        <h1 className="title">Create an account</h1>
        <form className="register-form" onSubmit={register} onChange={clearError}>
            <div className="option">EMAIL</div>
            <div className="register-input-div"><input className="register-input" type="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}></input></div>
            <div className="option">PASSWORD</div>
            <div className="register-input-div"><input className="register-input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}></input></div>
            <button className="register-btn" type="submit">Continue</button>
        </form>
        <div className="other-option-div">
            <div className="options-context">Already an account? <Link className="login-link" to="/login"><span className="login-register">Login</span></Link></div>
        </div>
        <p className="error" > {errorMessage} </p>
    </div>;
};

export default Register