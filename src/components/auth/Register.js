import React from 'react';

function Register(){
    return <div>
        <h1>Create an account</h1>
        <form>
            <input type="username" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <button type="submit">Register</button>
        </form>
    </div>;
};

export default Register