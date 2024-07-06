import { useState } from "react"
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import "../assets/Login.css"

const Login = ()=>{

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, seterror] = useState<string>('');

    const navigateTo = useNavigate()

    const handleLogin = (e: React.FormEvent) =>{

        e.preventDefault();

        authService.login(username,password) //returns a promise, which will resolve if the login is successful and reject if it fails.
        .then(
            ()=>{ //Success Callback: This function is called if the login promise resolves successfully
                navigateTo('/');
            },
            ()=>{ //Error Callback: This function is called if the login promise is rejected (e.g., if the login credentials are invalid)
                seterror("Invalid username or password");
            }
        )
    }
    

    return(
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>

                <button type="submit">Login</button>
                {error && <div className="error-message">{error}</div>}

            </form>
        </div>
    )
}

export default Login