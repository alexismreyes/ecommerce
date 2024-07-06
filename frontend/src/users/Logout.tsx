import { useEffect } from "react"
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";



const Logout = () =>{

    const navigateTo = useNavigate();

    useEffect(()=>{
        authService.logout();
        navigateTo('/login');
    },[]);

    return(
        <div>
            <p>LOGGING OUT...</p>
        </div>

    )

}

export default Logout