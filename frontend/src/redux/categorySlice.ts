import { createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import { Category } from '../interfaces/Category';

//Step 1 -> create the thunk middleware to fetch the categories
export const fetchCategoriesThunk = createAsyncThunk('categories/fetchCategoriesThunk', async()=>{
    const response = await axios.get('http://localhost:8080/category/');
    //console.log("Data fetched in the thunk->",response.data)
    return response.data.sort((a:Category,b:Category) => a.id - b.id)
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