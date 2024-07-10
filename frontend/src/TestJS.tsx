import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCounter } from "./redux/counterSlice";
import { PartnersContext } from "./context/PartnerContext";
import {axiosAsync, axiosPromise, fetchAsync, fetchPromise} from "./helpers/requestTypes.ts";

const TestJS = () =>{

    //values stored in context api
    const partners = useContext(PartnersContext);

    const jwt = localStorage.getItem("jwt");

    /* SORTING AN ARRAY */
    const unsortedArray = [3,7,9,1,4,5,99,12,14,15];
    console.log("unsortedArray->",unsortedArray);
    const sortedArray = unsortedArray.sort((a,b)=>a-b);
    console.log("sortedArray",sortedArray);
    


    /* USING VALUES FROM REDUX TOOLKIT */ 
    //This example works just if you load the categories component first because it sets the categories using dispatch and setCategories
    const categories = useSelector((state)=>state.categories)
    const products = useSelector((state)=>state.products)

    useEffect(()=>{        
            console.log("State from redux for categories->",categories)
            console.log("State from redux - products->",products);
            console.log("Values from context API->",partners)                       
    }
    ,[]);


    /* USING A SIMPLE useState for count */
    const [count,setCount] = useState(0);

    const addOneToCount = () =>{
        setCount(count+1);
    }


    /* USING REDUX-TOOLKIT FOR STATE MANAGEMENT COUNT*/

    const dispatch = useDispatch();
    const counter = useSelector((state)=>state.myCounterState);


    /* Different ways to request data from API */

    const fetchAsyncFn = () =>{
        fetchAsync(jwt);
    }

    const fetchPromiseFn = () =>{
        fetchPromise(jwt);
    }

    const axiosAsyncFn = () =>{
        axiosAsync(jwt);
    }

    const axiosPromiseFn = () =>{
        axiosPromise(jwt);
    }
    
    return(
        <>
        <div>
        <h1>Value for count using useState</h1>
            <label>count = {`${count}`}</label><br /><br />
            <button onClick={()=>addOneToCount()}>Add 1 to count</button>
        </div>
        <br /><br />
        <div>
            <label>Value for counter using redux-toolkit</label>
            <label>counter = {`${counter}`}</label><br /><br />
            <button onClick={()=>dispatch(setCounter())}>Add 1 to counter</button>
        </div>
        <br /><br />
        <div>
            <h1>Request types section - check console</h1>
            <label>fetch async/await</label><br/><br/>
            <button onClick={()=>fetchAsyncFn()}>fetch async/await</button>
            <br/><br/>
            <label>fetch promise</label><br/><br/>
            <button onClick={()=>fetchPromiseFn()}>fetch promise</button>
            <br/><br/>
            <label>axios async/await</label><br/><br/>
            <button onClick={()=>axiosAsyncFn()}>axios async/await</button>
            <br/><br/>
            <label>axios promise</label><br/><br/>
            <button onClick={()=>axiosPromiseFn()}>axios promise</button>
        </div>

        <h2>CHECK THE CONSOLE FOR MORE INFO</h2>
        </>
    )
}
export default TestJS