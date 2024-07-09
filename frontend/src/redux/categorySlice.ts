import { createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import { Category } from '../interfaces/Category';

//Step 1 -> create the thunk middleware to fetch the categories
export const fetchCategoriesThunk = createAsyncThunk('categories/fetchCategoriesThunk', async()=>{
    
    const jwt = localStorage.getItem('jwt');     
    
    //Direct request if we declare CORS at the backend Controller
    /* const response = await axios.get('http://localhost:8080/category/',{        
        headers: {'Authorization': `Bearer ${jwt}`}
    }); */    

    //get Categories using side server proxy in express    
        const response = await fetch("http://localhost:3001/sideserver/category/", {                      
            headers: { 'Authorization': `Bearer ${jwt}` }                  
        });   
        const data = await response.json();                                                        
        //console.log("categories from sideserver->",data);           
        return data.sort((a:Category,b:Category) => a.id - b.id)
    });

//Step 2 ->Create the slice
const categorySlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
        setCategories:(state, action:PayloadAction<Category[]>) =>{           
            return action.payload
        }
    }
})

//Step 3 -> export actions to be used in the thunk
export const { setCategories } = categorySlice.actions;

//Step 4 -> export the reducer to be used in the store
export default categorySlice.reducer;