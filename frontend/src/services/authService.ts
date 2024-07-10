import axios from "axios";
import { LoginResponse } from "../interfaces/LoginResponse";
import { jwtDecode } from "jwt-decode";
import { User } from "../interfaces/User";
import  store  from "../redux/store"
import { setUser } from "../redux/userSlice";

//const API_URL_LOGIN = "http://localhost:8080/user/login";

class AuthService{

    //login method using direct url to backend endpoint
    /* login(username: string,password: string): Promise<LoginResponse>{
            return axios.post<LoginResponse>(API_URL_LOGIN, {
                email: username,
                password: password
            })
            .then((response)=>{                  
                if(response.data){
                    const jwt = response.data.token;  //we use response.data.token because we return a response .token from backend to match LoginResponse interface datatype (check UserController -> response.put("token", jwt);)                                           
                    localStorage.setItem('jwt', jwt);
                    this.getUserInfo();
                }                
                return response.data
            })            
    } */

    //login method using side server proxy in express
    async login(email: string,password: string): Promise<LoginResponse>{
        const response = await fetch("http://localhost:3001/sideserver/login", {
            method: 'POST',            
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email, password})            
        })   
        const jwt = await response.json();   //we use response.data.token in side server because we return a response .token from backend to match LoginResponse interface datatype (check UserController -> response.put("token", jwt);)                                           
        localStorage.setItem('jwt', jwt);
        this.getUserInfo(email);          
        return jwt                                     
    }           


    //logout method
    logout(){
        localStorage.removeItem('jwt');              
    }

    //get current user method
    getCurrentJwt(): LoginResponse | null{
        const userJwt = localStorage.getItem('jwt');
        if(userJwt){
            return JSON.parse(userJwt) as LoginResponse;
        }
        return null;            
    }

    //is Authenticated or not
    isAutheticated():boolean{
        const userJwt = this.getCurrentJwt();

        if(userJwt && userJwt.token){
            const decodedToken: any = jwtDecode(userJwt.token);
            return decodedToken.exp > Date.now() / 1000;
        }
        return false;
    }


    getUserInfo(email: string){

        const jwt = localStorage.getItem('jwt');

        axios.get("http://localhost:3001/sideserver/user/info",{
            headers: {
                'Authorization': `Bearer ${jwt}`
            },
            params:{
                email: email,
            }
        })
        .then(
            (response)=> {
                //console.log("User from backend->",response.data)
                store.dispatch(setUser(response.data));
            }
        )
        .catch((error) => console.error("Error during request:", error));
    }

}

export default new AuthService

