import axios from "axios";

function Logout(){
    async function logout(e){
        e.preventDefault();
        try{
            await axios.get("http://localhost:5000/users/logout");
        }catch(err){
            console.log({errorMessage: "not loggedIn yet"});
        }
    }

    return <div>
        
    </div>;
};

export default Logout