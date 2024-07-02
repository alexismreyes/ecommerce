import axios from "axios"
import { useEffect, useState } from "react"
import type { Category } from "../interfaces/Category";
import { SortConfigCategory } from "../interfaces/SortConfig";
import "../assets/Category.css"
import { Link } from "react-router-dom";
import "../assets/CommonStyle.css"


const Category = () =>{

    const [categories,setCategories] = useState<Category[]>([])
    const [sortConfig, setSortConfig] = useState<SortConfigCategory>({key:'id',ascending:true})
    
    useEffect(()=>{
        axios.get("http://localhost:8080/category/")
        .then((response)=>{            
            const sortedData = response.data.sort((a:Category, b:Category) => a.id - b.id);
            setCategories(sortedData);
        })            
    },[])

    //sort the array by header
    const handleSort = (key: keyof Category) => {

        //determine the new direction if the key is the same, so INVERT the sort
        const isAscending = sortConfig.key === key ? !sortConfig.ascending : true;

        //sort the categories array based in given key 
        const sortedData = [...categories].sort((a,b)=>{
            if (a[key] < b[key]) return isAscending ? -1 : 1;
            if (a[key] > b[key]) return isAscending ? 1 : -1;
            return 0;
        });

        //set the recent sortConfig
        setSortConfig({key,ascending:isAscending});

        //set the sorted Array to render
        setCategories(sortedData);
    }

    if(!categories || categories.length===0) return <h1>FETCHING DATA...</h1>

    return (
        <div className="center-div">
        <table className="styled-table">
            <thead>
                <tr>
                    <th onClick={()=>handleSort('id')} className="show-pointer">Category ID</th>
                    <th onClick={()=>handleSort('name')} className="show-pointer">Name</th>
                    <th></th>
                </tr>
            </thead>    
                <tbody>
                    { categories.map((category)=>(
                        <tr key={category.id}>
                        <td>{category.id}</td>   
                        <td>{category.name}</td>
                        <td><Link to={`/category/${category.id}`}>Productos</Link></td>                          
                    </tr>
                    ))}                    
                </tbody>
            
        </table>
        </div>

    )
}

export default Category