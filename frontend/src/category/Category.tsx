import axios from "axios"
import { useEffect, useState } from "react"

const Category = () =>{

    const [categories,setCategories] = useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:8080/category/")
        .then((response)=>{
            //console.log("Respuesta del backend->",response);
            setCategories(response.data)
        })            
    },[])

    if(!categories || categories.length===0) return <h1>FETCHING DATA...</h1>

    return (
        <table>
            <thead>
                <tr>
                    <th>Category ID</th><th>Name</th>
                </tr>
            </thead>    
                <tbody>
                    { categories.map((category)=>(
                        <tr key={category.id}>
                        <td>{category.id}</td>   
                        <td>{category.name}</td>   
                    </tr>
                    ))}                    
                </tbody>
            
        </table>
        

    )
}

export default Category