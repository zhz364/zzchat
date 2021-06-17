import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props){
    const [loggedIn, setLoggedIn] = useState(undefined);

    async function getLoggedIn(){
        console.log("here")
        const loggedInRes = await axios.get("http://localhost:5000/users/loggedIn");
        setLoggedIn(loggedInRes.data)
    }

    useEffect(()=>{
        getLoggedIn();
    },[]);

    return <AuthContext.Provider value={{loggedIn,getLoggedIn}}>
        {props.children }
    </AuthContext.Provider>
};

export default AuthContext;
export { AuthContextProvider };