import axios from "axios";
import { LoginResponse } from "../interfaces/LoginResponse";
import { jwtDecode } from "jwt-decode";

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
                    const jwt = response.data.token;  //we use response.data.token because we return a response .token from backend to match LoginResponse interface datatype (check UserController -> response.put("token", jwt);)                                           
                    localStorage.setItem('jwt', jwt);
                }                
                return response.data
            })            
    }

    //logout method
    logout(){
        localStorage.removeItem('jwt');              
    }

    //get current user method
    getCurrentUser(): LoginResponse | null{
        const userJwt = localStorage.getItem('jwt');
        if(userJwt){
            return JSON.parse(userJwt) as LoginResponse;
        }
        return null;            
    }

    //is Authenticated or not
    isAutheticated():boolean{
        const userJwt = this.getCurrentUser();

        if(userJwt && userJwt.token){
            const decodedToken: any = jwtDecode(userJwt.token);
            return decodedToken.exp > Date.now() / 1000;
        }
        return false;
    }

}

export default new AuthService

