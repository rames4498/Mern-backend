---
marp: true
theme: default
paginate: true
---

> # **Mern Stack Backend**

### This is a repository  intended for the mernstack backend beginners to gain all the essential knowledge along with few minor projects

----
 _Try to install the following softwares/tools_ 

* [Install nodejs - click here](https://nodejs.org/en)
* [Install any code editor of your choice](https://code.visualstudio.com/)
* [create an account in Github.com](https://github.com/)
* [Install Git](https://git-scm.com/)


### Let us go with the stpe by step lectures code and gain the essential knowledge 
-----

> **[CLASS-1 -Nodejs](https://github.com/rames4498/Mern-backend/tree/main/hour1)**


_With all the necessary installations, we have to create seperate project folder and execute the **test.js** file from the terminal_ 

Follow the steps

* open command prompt

* cd Desktop

* mkdir MernStack

* cd MernStack

* mkdir MernStackProject

* code .
----
### Then visual studio code will open in the so called directory

_create a new file called test.js_ and use the code from the [Hour1-Folder](https://github.com/rames4498/Mern-backend/tree/main/hour1) from the repository


Open the terminal and type the following command in the terminal

* node test
It will run the test.js code

Now let us jump into the core concepts of Nodejs, ExpressJs and MongoDB.

We will start with NodeJs, and all of these heirarchial lectures will help to build and end to end project on your own

---
> **[CLASS-2](https://github.com/rames4498/Mern-backend/tree/main/hour2)**
use the code from the [Hour2-Folder](https://github.com/rames4498/Mern-backend/tree/main/hour2) from the repository

+ It constitutes of files.js file which has file handling module concepts, how to read, write, delete files 
* modules.js and people.js contitues of comm. between modules(here user defined) and how exporting certain functionalities from one module impact the other one.
* Streams.js exams the data streams from one to another , through chunks instead of doing it in one go.

---
> **[CLASS-3](https://github.com/rames4498/Mern-backend/tree/main/hour3)**
use the code from the [Hour3-Folder](https://github.com/rames4498/Mern-backend/tree/main/hour3) from the repository
+ It constitutes of serverSample.js file, which explains how to create a simple server using the built in modules 
Server listening to the request at port mentioned (here 3000)

Use the command to run the server everytime when there is a change
* node simpleServer
---
> **[CLASS-4](https://github.com/rames4498/Mern-backend/tree/main/hour4)**
use the code from the [Hour4-Folder](https://github.com/rames4498/Mern-backend/tree/main/hour4) from the repository

+ It constitutes of server.js file which has required modules and all the routing techniques to different web pages as a response from the server
* Try to implement this file step by step instead of going all at once, so that you can understand how it is being built heirachially.

Use the command to run the server everytime when there is a change
* **node server**
---
> **[CLASS-5](https://github.com/rames4498/Mern-backend/tree/main/hour5)**
use the code from the [Hour5-Folder](https://github.com/rames4498/Mern-backend/tree/main/hour5) from the repository

+ It constitutes of server.js file which has required modules and all the routing techniques to different web pages as a response from the server using switch cases for effective routing.
* Install packages using NPM,Install Nodemon and other packages.
* Importance of package.json file, how to maintian the version compatibility, modules installed updated in the json file for easy reference for anyone looks for the dependencies of the project.

Use this command in the terminal
* npm install -g nodemon

Then use the following command hereafter to restart the server, and it is not needed to do it again and again
* **nodemon server** 
---
> **[CLASS-6-Expressjs](https://github.com/rames4498/Mern-backend/tree/main/hour6)**
use the code from the [Hour6-Folder](https://github.com/rames4498/Mern-backend/tree/main/hour6) from the repository

+ Its a 3rd party package called Express. Express is a framework which helps us to easily create node.js web applications. Its iseasy to write clean code.

Use the following command to install Expressjs
* npm install express

we will create a new express file called app.js and do all the simple routing and redirects.
* **nodemon app
---
> **[CLASS-7](https://github.com/rames4498/Mern-backend/tree/main/hour7)**
use the code from the [Hour7-Folder](https://github.com/rames4498/Mern-backend/tree/main/hour7) from the repository

View engines allow us to inject dynamic 
content & variables into html templates before sending them to the browser

we will create a new express file called app.js and do all the simple routing and redirects.

* npm install ejs
* **nodemon app**
---
> **[CLASS-8](https://github.com/rames4498/Mern-backend/tree/main/hour8)**
use the code from the [Hour8-Folder](https://github.com/rames4498/Mern-backend/tree/main/hour8) from the repository

Detailing about middleware, use, get fucntions
Use funcations fire for every kind of request unlike get function.
next() function to fire the next operations
* npm install morgan
For installing 3rd party middleware called morgan
+ Static middleware to restrict what to access and what cant be accessed from the browser (here style.css in public)

Run the server
* **nodemon app**
---
> **[CLASS-9](https://github.com/rames4498/Mern-backend/tree/main/hour9)**
use the code from the [Hour9-Folder](https://github.com/rames4498/Mern-backend/tree/main/hour9) from the repository

we'll hook our node express app up with mongodb, a NoSQL database. Well use mongodb atlas to set up our database online 
[click here for db](https://www.mongodb.com/atlas/database) Create a free account.

Then install mangoose, a third party package
*npm install mangoose

Run the server
* **nodemon app**
---