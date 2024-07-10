import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './categorySlice'
import productsReducer from './productsSlice'
import counterReducer from './counterSlice'
import userReducer from './userSlice'

//step 5 -> Configure the store
const store = configureStore({
    reducer:{
        categories: categoryReducer,
        products: productsReducer,
        myCounterState: counterReducer,
        userLoggedIn: userReducer
    }
})

/* export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; */
export default store