
## e-commerce app (work in progress - 4 Microservices):

***Stack used:***

### Frontend:

***- Node.js***
***- VITE***
***- TypeScript***
***- React***
***- React router dom 6***
***- Redux-toolkit***
***- React context API***
***- Axios for promise based HTTP client***


### Backend:

***- Springboot (as Java Framework)***
***- Spring JWT management for authentication***
***- Maven (to manage springboot project dependencies)***
***- MySQL database for persistence***

***
### MIDDLEWARE:

***- Express.js server as side server proxy***

***

### DevOps Tool:

***- DOCKER***


***

### Disclaimer:  
This project is intented to test all this technologies working together in one application, as my POV just pretend to be a guideline o structure to test some features of each of these technologies, it doesn't pretend to resolve any specific requirement, i make it just to practice, however if anybody finds it useful feel free to use it as you need it.
***


### Current features:
The current project creates 4 different containers (microservices):

***Frontend container:*** it implements react, and the others technologies cited above.

***Backend container:*** it uses the generated jar from a springboot project inside the backend folder.

***Sideserver proxy container:*** make the requests to the backend as sideserver proxy to bypass CORS browsers policies.

***Database container:*** container for the MySQL database.

***

Working actually:
	***-3 endpoints at the backend (category, category/id, products)***
This endpoints can be requested by postman or browser. 

You can use this credentials for login:

username: malexismreyes@gmail.com
password: 123456789

username: mikemanzano@hotmail.com
password: 123456789

or create your own user in the User table directly in the DB (will develop soon the Register form)

***

### Pendant features:

***- Extra enpdoints (of course)***
***- Extra React Components (clearly)***
***- Extra features yet to define***
	
***

### Extra features:
In the backend at service package i include a PasswordMigrationService which will convert your created user passwords from plain text to Bcrypt hash once you run the backend service.

***

### Steps to install:

1)  git clone  

2)  cd ecommerce

3) cd frontend 

4) yarn (to download dependencies - install yarn in your system if needed) (to install dependencies / install yarn if not installed -> sudo npm install -g yarn)

5) cd .. for going back to ecommerce folder

6) execute commmand ***run*** inside ecommerce folder (it execute the bat file which invoke the docker-compose.yml)

7) Import the database structure/data to the database using the dump file inside backend/database/sql_querys/ecommerce_db_somedate.sql

8) To open the springboot project go to backend/com.ecommerce.app and open it using your preferred IDE (i use IntelliJ) 

9) Initially the backend runs inside a container. If you need to make changes to backend code, turn it off and work your changes locally, uncomment the NODE_ENV=development in the docker-compose.yml and comment the  NODE_ENV=production, execute the command ***stop*** inside ecommerce folder to remove the containers. When you need to send those changes to container just generate the JAR file using maven,  then execute ***run*** again to build the containers again including the new generated JAR. You decide which backend to use using that line in the docker-compose file, so use it as you need it. Take into account to turn off your local backend previous to run the container version because both uses the same port 8080.

10) Pray it works!!!! Mine's working fine!!! =)


***

### About the generated JAR for the backend

The generated jar uses any of the two application properties files to connect to the database, the dev one uses localhost:3306 address to connect to the contanerized mysql, the prod one uses the mysql-container:3306 address to link with the container directly from the generated JAR

***

### URL

Frontend URL: http://localhost:5173
