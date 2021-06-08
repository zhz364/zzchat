import React, {useState} from 'react';
import axios from "axios";

function Register(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function register(e){
        e.preventDefault();
        try{
            const registerData = {
                username,
                password
            }

            await axios.post("http://localhost:5000/users/add",registerData);
        }catch(err){
            console.log({errorMessage: "Wrong username or password"});
        }
    }

    return <div>
        <h1>Create an account</h1>
        <form onSubmit={register}>
            <input type="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}></input>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
            <button type="submit">Register</button>
        </form>
    </div>;
};

export default Register