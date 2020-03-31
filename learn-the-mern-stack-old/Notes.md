MERN stands for
- MongoDB - a NoSQL database
- Express - a backend framework mostly used for building APIs
- React - a front end ui library / framwork
- Node.js - a JavvaScript runtime that allows us to use JavaScript as a server side technology

We will use MonoDB Atlas for the MongoDB database.

This project also uses
- reactstrap - a module that allows yout to import Bootstrap components and basically use them as React components, properties, etc.
- react-transition-group - allows you to add a fade affect
  
There is no authentication.

# Express API & MongoDB
```
npm init
...
package name: (learn-the-mern-stack) mern_shopping_list
version: (1.0.0) 
description: Shopping list built with the MERN stack
entry point: (index.js) server.js
...
npm install express
npm install body-parser
npm install mongoose
npm install concurrently
npm install -D nodemon
```
- **express** is the server back end
- **body-parser** allows you to read the body of an incoming request
- **mongoose** to interact with MongoDB
- **concurrently** allows you to run more than one npm script at once so you can run the server and the client at the same time
- **nodemon** monitors the back end for file updates so you don't need to constantly restart the server whenever you make a change
  
Note that you can install multiple npm components in one command like
```
npm i express body-parser mongoose concurrently
```

Add **nodemon** to the scripts in packages.json.
```
  ...
  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js"
  },
  ...
```

### Create server.js file.

### Create a free **MongoDB Atlas** account at [https://cloud.mongodb.com/](https://cloud.mongodb.com/)
```
database: mern_shopping
collection: shopping_list
connect: mongodb+srv://stateofmaine:<password>@m0001-et9dr.mongodb.net/test?retryWrites=true&w=majority
```