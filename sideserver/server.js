//it choose the proper file to point to the proper backend url
require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
});

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Choose a port number
const backendUrl = process.env.BACKEND_URL; //url from backend localhost:8080 or ecommerce-backend-container:8080

app.use(cors());
app.use(bodyParser.json());

//Login endpoint
app.post('/sideserver/login', async (req, res) => { 
    console.log("backendUrl->",backendUrl);
    try {
      const response = await axios.post(`http://${backendUrl}/user/login`, {
        email: req.body.email,
        password: req.body.password
    });
        res.json(response.data.token); //jwt token received from backend        
    } catch (error) {
        console.log(`Request to ->http://${backendUrl}/user/login`);
        res.status(500).send(error.message);
    }
  });


  //Category endpoint
app.get('/sideserver/category/', async (req, res) => { 
    
    const jwt = req.headers.authorization;
    console.log("const jwt->",jwt);
    
    try {
      const response = await axios.get(`http://${backendUrl}/category/`,{
        headers: { 'Authorization': jwt}
      });
        console.log("response from backend->",response.data); 
        res.json(response.data); 
              
    } catch (error) {
        //res.status(500).send(error.message);
        console.error("Error during backend request:", error.message);        
    }
  });


//products endpoint
app.get('/sideserver/products/', async (req, res) => { 
    
    const jwt = req.headers.authorization;    
    
    try {
      const response = await axios.get(`http://${backendUrl}/products/`,{
        headers: { 'Authorization': jwt}
      });
        console.log("response from backend->",response.data); 
        res.json(response.data); 
              
    } catch (error) {
        //res.status(500).send(error.message);
        console.error("Error during backend request:", error.message);       
    }
  });


  //products by category endpoint
app.get('/sideserver/category/:category_id', async (req, res) => { 
    
    const jwt = req.headers.authorization; 
    const category_id = req.params.category_id;  //req.params used for url params -> url/param
    
    try {
      const response = await axios.get(`http://${backendUrl}/category/${category_id}`,{
        headers: { 'Authorization': jwt}
      });
        //console.log("response from backend->",response.data); 
        res.json(response.data); 
              
    } catch (error) {
        //res.status(500).send(error.message);
        console.error("Error during backend request:", error.message);       
    }
  });


    //userinfo
app.get('/sideserver/user/info', async (req, res) => { 
    
  const jwt = req.headers.authorization; 
  const email = req.query.email;   //req.query used for query params -> url?param=value

  console.log("email received at sideserver->",email);
  
  try {
    const response = await axios.get(`http://${backendUrl}/user/info?email=${email}`, {                      
      headers: { 'Authorization': jwt }                          
      }); 
      //console.log("response from backend->",response.data); 
      res.json(response.data); 
            
  } catch (error) {
      //res.status(500).send(error.message);
      console.error("Error during backend request:", error.message);       
  }
});


app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
