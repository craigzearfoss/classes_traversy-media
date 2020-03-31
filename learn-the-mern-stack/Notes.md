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

## Within the project create a folder named /client
- This will have the client code for the React application.
- Within that directory run create-react-app.
  - If create-react-app is not installed then install it globally with the command **npm install -g create-react-app**
```
mkdir client
cd client
create-react-app
```
###
Add a proxy host into the client/package.json file so we don't have to enter the host when we specify an endpoint.
```
...
"proxy": "http://localhost:5000",
...
```

### We will use **concurrently** to allow us to start the host and client with one command.
- You should have already installed concurrently above.
- In the scripts section of the project root folder package.json file add entries for "client-install", "client" and "dev".
```
  ...
  "scripts": {
    "client-install": "npm install --prefix client",
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
  ...
```
- **client** allows us to launch the client application from the project root folder.
- **dev** allows us to launch both the host and client applications with one command.
- **client-install** allows us to install client dependencies without having to change into the client folder.

### In the client directory insall the following packages.
```
cd client
npm install bootstrap reactstrap uuid react-transition-group
```

---
### When you add a custom method in a component you have to bind it with **this**.
- This is because the method isn't automatically included.
```
class AppNavbar extends Component {
  constructor(props) {
      super(props);
  }

  this.toggle = this.toggle.bind(this);
}

toggle() {
}
```
### You can use arrow methods, **=>**, as a way around this.
```
class AppNavbar extends Component {
  constructor(props) {
      super(props);
  }
}

toggle = () => {
}
```
---