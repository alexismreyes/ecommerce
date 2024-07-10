import axios from "axios";

const API_URL="http://localhost:3001/sideserver/category/";


//USING FETCH SYNTAX AND ASYNC/AWAIT
export const fetchAsync = async (jwt) =>{
    const response = await fetch(API_URL,{
        headers: { 'Authorization': `Bearer ${jwt}`}
    });
    const data = await response.json();
    console.log("data retrieved->",data)
}

//USING FETCH WITH PROMISES
export const fetchPromise = (jwt) =>{
    fetch(API_URL,{
        headers: { 'Authorization': `Bearer ${jwt}`}
    })
    .then((result)=>result.json()) //handles the response object (result) and calls the .json() method on it,
    .then((data)=>console.log("data retrieved->",data)) //handles the resolved value of the result.json() and logs it to the console.
    .catch((e)=>console.error(e))
}

//USING AXIOS SYNTAX AND ASYNC/AWAIT
export const axiosAsync = async (jwt) =>{
    const response = await axios.get(API_URL,{
        headers: { 'Authorization': `Bearer ${jwt}`}
    });
    const data = await response;
    console.log("data retrieved->",data.data)
}

//USING AXIOS SYNTAX WITH PROMISES
export const axiosPromise = (jwt) =>{
    axios.get(API_URL,{
        headers: { 'Authorization': `Bearer ${jwt}`}
    })
    .then((result)=>console.log("data retrieved->",result.data))
    .catch((e)=>console.error(e))
}