import { useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

function Logout(){
    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();
    async function logout(){
        await axios.get("http://localhost:5000/users/logout");
        await getLoggedIn();
        history.push("/");
    }

    return <button onClick={logout}>
        logout
    </button>;
};

export default Logout