import React, {useState, useContext} from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import AuthContext from "../../context/AuthContext";

function Register(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
            console.log(err);
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