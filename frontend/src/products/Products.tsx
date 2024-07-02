import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../interfaces/Product";
import { SortConfigProduct } from "../interfaces/SortConfig";
import "../assets/CommonStyle.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsThunk, setProducts } from "../redux/productsSlice";

const Products = () => {

  const dispatch = useDispatch();
  const products = useSelector((state)=>state.products);

  //const [products, setProducts] = useState<Product[]>([]);
  const [sortConfig, setSortConfig] = useState<SortConfigProduct>({key:'id',ascending:true});

 /*  useEffect(() => {
    axios.get("http://localhost:8080/products/").then((response) => {
      setProducts(response.data);
    });
  }, []); */

  useEffect(()=>{
    dispatch(fetchProductsThunk())
    .then((response)=>{
      dispatch(setProducts(response.payload));
    })
  }
,[dispatch]);

  const handleSort = ( key: keyof Product ) =>{

    //Reverting sort if same key if clicked
    const isAscending = sortConfig.key === key ? !sortConfig.ascending : true;

    //sorting by clicked header
    const sortedData = products.sort((a,b)=>{
      if (a[key] < b[key]) return isAscending ? -1 : 1;
      if (a[key] > b[key]) return isAscending ? 1 : -1;
      return 0;
    });

    //setting recent sorting info
    setSortConfig({key, ascending: isAscending});

    //setting sorted by given key Products array
    setProducts(sortedData);
  }

  if (!products || products.length === 0) return <h1>FETCHING DATA...</h1>;

  return (
    <div className="center-div">
    <table className="styled-table">
      <thead>
        <tr>
          <th onClick={()=>handleSort('id')} className="show-pointer">Product ID</th>
          <th onClick={()=>handleSort('name')} className="show-pointer">Name</th>
          <th onClick={()=>handleSort('description')} className="show-pointer">Description</th>
          <th onClick={()=>handleSort('price')} className="show-pointer">Price</th>
          <th onClick={()=>handleSort('stock')} className="show-pointer">Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
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
export default Products;
