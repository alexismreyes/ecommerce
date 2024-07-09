import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../interfaces/Product";

export const fetchProductsThunk = createAsyncThunk('products/fetchProductsThunk', async()=>{

    const jwt = localStorage.getItem('jwt');

    /* const response = await axios.get("http://localhost:8080/products/",{        
        headers: {'Authorization': `Bearer ${jwt}`}
    }); */

    //get products using side server proxy in express    
    const response = await fetch("http://localhost:3001/sideserver/products/", {                      
        headers: { 'Authorization': `Bearer ${jwt}` }                  
    });   
    const data = await response.json();                                                  
    return data.sort((a:Product,b:Product) => a.id - b.id)
});


const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts:(state,action)=>{
            return action.payload;
        }
    }
})

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;