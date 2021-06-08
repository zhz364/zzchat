import React, {useState} from 'react';
import axios from "axios";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function login(e){
        e.preventDefault();
        try{
            const loginData = {
                username,
                password
            }

            await axios.post("http://localhost:5000/users/login",loginData);
        }catch(err){
            console.log({errorMessage: "Wrong username or password"});
        }
    }

    return <div>
        <h1>Login to your account</h1>
        <form onSubmit={login}>
            <input type="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}></input>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
            <button type="submit">Login</button>
        </form>
    </div>;
};

export default Login