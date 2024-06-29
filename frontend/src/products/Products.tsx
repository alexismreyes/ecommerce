import axios from "axios"
import { useEffect, useState } from "react"

const Products = () =>{
    const [products,setProducts] = useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:8080/products/")
        .then((response)=>{            
            setProducts(response.data)
        })            
    },[])

    if(!products || products.length===0) return <h1>FETCHING DATA...</h1>

    return (
        <table>
            <thead>
                <tr>
                    <th>Product ID</th><th>Name</th>
                </tr>
            </thead>    
                <tbody>
                    { products.map((product)=>(
                        <tr key={product.id}>
                        <td>{product.id}</td>   
                        <td>{product.name}</td>   
                    </tr>
                    ))}                    
                </tbody>
            
        </table>
        

    )
}
export default Products