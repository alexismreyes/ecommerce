import axios from "axios"
import { useEffect } from "react"

const Category = () =>{

    useEffect(()=>{
        axios.get("http://localhost:8080/category/")
        .then((response)=>{
            console.log("Respuesta del backend->",response);
        })            
    },[])

    return (
        <h3>Revisar consola</h3>
        

    )
}

export default Category