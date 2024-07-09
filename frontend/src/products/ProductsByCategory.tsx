import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../interfaces/Product";
import { SortConfigProduct } from "../interfaces/SortConfig";
import "../assets/CommonStyle.css"
import { PartnersContext } from "../context/PartnerContext";

const ProductsByCategory = () => {

  const partners = useContext(PartnersContext); //i use this here just to test Context API working

  const params = useParams();
  const [ProductsByCategory, setProductsByCategory] = useState<Product[]>([]);
  const [sortConfig, setSortConfig] = useState<SortConfigProduct>({key:'id',ascending:true});

/*   useEffect(() => {

    const jwt = localStorage.getItem('jwt');    
    axios
      .get(`http://localhost:8080/category/${params.categoryId}`,{        
        headers: {'Authorization': `Bearer ${jwt}`}
    })
      .then((response) => {
        //console.log(response);
        setProductsByCategory(response.data);
        console.log("Partners retrieved from Context API mechanism ->",partners); //loggin from context API
      })
      .catch(() => {
        console.log("No data");
      });
  }, []); */

useEffect(()=>{

      const jwt = localStorage.getItem('jwt');
      const category_id = params.categoryId;      

      const getProductsByCategory = async () =>{

        const response = await fetch(`http://localhost:3001/sideserver/category/${category_id}`, {                      
          headers: { 'Authorization': `Bearer ${jwt}` }                          
          });   
        const data = await response.json();
        setProductsByCategory(data);
        console.log("Partners retrieved from Context API mechanism ->",partners); //loggin from context API
      }
       
      getProductsByCategory();     
},[]);
  


  //sort table
  const handleSort = ( key: keyof Product ) =>{

    //Reverting sort if same key if clicked
    const isAscending = sortConfig.key === key ? !sortConfig.ascending : true;

    //sorting by clicked header
    const sortedData = ProductsByCategory.sort((a,b)=>{
      if (a[key] < b[key]) return isAscending ? -1 : 1;
      if (a[key] > b[key]) return isAscending ? 1 : -1;
      return 0;
    });

    //setting recent sorting info
    setSortConfig({key, ascending: isAscending});

    //setting sorted by given key Products array
    setProductsByCategory(sortedData);
  }


  if (!ProductsByCategory || ProductsByCategory.length === 0)
    return <h1>FETCHING DATA...</h1>;

  return (
    <div className="center-div">
    <table className="styled-table">
      <thead>
        <tr>
          <th onClick={() => handleSort("id")} className="show-pointer">
            Product ID
          </th>
          <th onClick={() => handleSort("name")} className="show-pointer">
            Name
          </th>
          <th
            onClick={() => handleSort("description")}
            className="show-pointer"
          >
            Description
          </th>
          <th onClick={() => handleSort("price")} className="show-pointer">
            Price
          </th>
          <th onClick={() => handleSort("stock")} className="show-pointer">
            Stock
          </th>
        </tr>
      </thead>
      <tbody>
        {ProductsByCategory.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            {/* <td>{product.category_id.id}</td>
            <td>{product.created_at}</td>  */}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};
export default ProductsByCategory;
