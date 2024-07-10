import { useSelector } from "react-redux"

const User = () => {

    const user = useSelector((state)=>state.userLoggedIn);

return(
    <>
        <div className="center-div">
        <table className="styled-table">
            <thead>
                <tr>
                    <th>Field</th>
                    <th>Value</th>                    
                </tr>
            </thead>    
                <tbody>                    
                    <tr>
                        <td>Username:</td>   
                        <td>{user.email}</td>                                                  
                    </tr>
                    <tr>
                        <td>First Name:</td>   
                        <td>{user.first_name}</td>                                                  
                    </tr>
                    <tr>
                        <td>Last Name:</td>   
                        <td>{user.last_name}</td>                                                  
                    </tr>
                    <tr>
                        <td>Created at:</td>   
                        <td>{user.created_at}</td>                                                  
                    </tr>
                                      
                </tbody>
            
        </table>                
        </div>    
        
        </>
)

}

export default User