import axios from "axios";
import { LoginResponse } from "../interfaces/LoginResponse";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";


const API_URL_LOGIN = "http://localhost:8080/user/login";

class AuthService{

    //login method
    login(username: string,password: string): Promise<LoginResponse>{
            return axios.post<LoginResponse>(API_URL_LOGIN, {
                email: username,
                password: password
            })
            .then((response)=>{
                if(response.data){
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                console.log("YOU ARE IN!!!->",response);
                return response.data
            })            
    }

    //logout method
    logout(){
        localStorage.removeItem('user');              
    }

    //get current user method
    getCurrentUser(): LoginResponse | null{
        const userStr = localStorage.getItem('user');
        if(userStr){
            return JSON.parse(userStr) as LoginResponse;
        }
        return null;            
    }

    //is Authenticated or not
    isAutheticated():boolean{
        const user = this.getCurrentUser();

        if(user && user.token){
            const decodedToken: any = jwtDecode(user.token);
            return decodedToken.exp > Date.now() / 1000;
        }
        return false;
    }

}

export default new AuthService

