import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { User } from '../interfaces/User';

//Step 1 - this slice doesnt have thunk because i already retrieve the User data in login component so no need for thunk here

//Step 2 ->Create the slice
const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setUser:(state, action:PayloadAction<User>) =>{           
            return action.payload
        }
    }
})

//Step 3 -> export actions to be used in the thunk
export const { setUser } = userSlice.actions;

//Step 4 -> export the reducer to be used in the store
export default userSlice.reducer;