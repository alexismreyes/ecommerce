const TestJS = () =>{

    /* SORTING AN ARRAY */
    const unsortedArray = [3,7,9,1,4,5,99,12,14,15];
    console.log("unsortedArray->",unsortedArray);
    const sortedArray = unsortedArray.sort((a,b)=>a-b);
    console.log("sortedArray",sortedArray);
    
    

    return(
        <h1>CHECK THE CONSOLE</h1>
    )
}
export default TestJS