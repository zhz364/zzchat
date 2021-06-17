import { useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

function Logout(){
    const {getLoggedIn} = useContext(AuthContext);
    async function logout(){
        await axios.get("http://localhost:5000/users/logout");
        getLoggedIn();
    }

    return <button onClick={logout}>
        logout
    </button>;
};

export default Logout