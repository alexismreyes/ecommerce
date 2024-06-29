
## e-commerce site (work in progress):

***Stack used:***

### Frontend:

***- Node.js***
***- VITE***
***- TypeScript***
***- React***
***- React router dom 6***
***- Axios for promise based HTTP client***

### Backend:

***- Springboot (as Java Framework)***
***- Maven (to manage springboot project dependencies)***
***- MySQL database for persistence***

***

***- DOCKER as container manager***


***

### Disclaimer:  
This project is intented to test all this technologies working together in one application, as my POV just pretend to be a guideline o structure to test some features of each of these technologies, it doesnt pretend to resolve any specific requirement, i make it just to practice, however if anybody finds it useful feel free to use it as you need it.
***

### Current features:
The current project creates 3 different containers, one for the frontend part using react, one for the backend developed in Springboot and another container for the MySQL database.

Working actually:
	***-3 endpoints at the backend (category, category/id, products)***
This endpoints can be requested by postman or browser, by now from frontend it just retrieve the data to a console.log in the category component.

Actually it uses @CrossOrigin in the controller to allow request from any browser outside the domain but lately i will implemente a side proxy server to make the request go throught it and bypass the CORS browser policies. 

***

### Pendant features:

***- Extra enpdoints (of course)***
***- Side Server Proxy***
***- Extra React Components (clearly)***
***- Extra features yet to define***
	
	


### Steps to install:

1)  git clone 
 

2)  cd ecommerce
 

3)  run (it execute the bat file which invoke the docker-compose.yml)

4) cd frontend 

5) yarn (to download dependencies - install yarn in your system if needed)

6) restart the frontend container if needed

(to install dependencies / install yarn if not installed -> sudo npm install -g yarn)

7) yarn dev

8) Import the database structure/data to the database using the dump file inside backend/database/sql_querys/ecommerce_db_somedate.sql

9) To open the springboot project go to backend/com.ecommerce.app and open it using your preferred IDE (i use IntelliJ) 

10) Initially the backend runs in a container but i suggest to turn it off and work your changes locally, once you need to send those changes to container just generate the JAR file using maven and restart the backend-container to include the new generated jar. You can see it has two application properties files, the dev one uses localhost:3306 to connect to the containized mysql, the prod one uses the mysql-container:3306 to link with the container directly from the generated JAR

11) Pray it works!!!! Mine's working fine!!! =)

***

Frontend URL: http://localhost:5173