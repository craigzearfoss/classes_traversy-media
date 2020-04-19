# Express JS Crash Course

- Traversy Media
- https://www.youtube.com/watch?v=L72fhGm1tfE&t=1s

---

#### Note that you normally won't have a server both working as an API and serving web pages but both are done here just for demonstration purposes.

### There is not built in authentican in Express. You can use **Passport** or **JWT**.

- If you're dealing just with Express you would use **passport-local**.

### What is Express?

- A fast, unopinionated web framework for Node.js
- "server-side" or "back-end" framework
- Can be combined with a client-side framework like React, Vue or Angular to build full stack applications

### Why use Express?

- Makes building web applications wiht Node.js MUCH easier
- Used for both server rendered apps as well as API/Microservices
- Extremely light, fast and free
- Full control of request and response
- By far the most popular Node framework
- Great to use with client-side framewroks as it's all JavaScript
- Other examples of Node frameworks include:
  - **Koa**
  - **hapi**
  - **AdonisJs** - much higher level, similar to Laravel

### Basic Server Syntax

```
const express = require("expres");

// init express
const app = express();

// create you endpoints/route handlers
app.get("/", function(req, res) {
  res.send("Hello Word!");
});

// listen on a port
app.listen(5000);
```

- You can't use ES2015 Node **imports** yet with Express by default yet. (You'll have to use Babel to compile it.)

### Basic Route Handling

- Handling requests/routes is simple.
- app.get(), app.post(), app.put(), app.delete(), etc.
- Acess to params, querry strings, url parts, etc.
- Express has a router so we can store routes in separate files and export.
- We can parse incomming data with the Body Parser.

### Express Middleware

- **Middleware** functions have access to request and response objects.
- Executes whenever a request is made to the server.
- Express has middleware built in but you can also use third party middleware or build your own.
- In middlware you can:
  - Execute any code
  - Make changes to the request/response objects
  - End the response cycle
  - Call next middleware in the stack

---

### Project Setup

```
npm init -y
npm install express
```

#### To run the server

```
node index
```

---

## nodemon is a module that monitors the files and automatically restarts the server if they change.

- Install nodemon. (We only install it for development.)

```
npm install -D nodemon
```

- To configure **nodemon** add a script the to _package.json_ file.

```
...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index",
    "dev": "nodemon index"
  },
...
```

- To run **nodemon**:

```
npm run dev
```

---

### As a response we can send:

- res.send()
- res.sendFile()
  - res.sendFile(path.join(\_\_dirname, "public", "index.html"));
- res.json()
- res.render() - if we have a template engine

### You can set up an static server

- Just serves up files from a directory.

```
app.use(express.static(path.join(__dirname, "public")));
```

### **moment** is a third party package that deals with dates.

```
npm install moment
```

### When you use the Express router you your use **router** instead of **app**.

- For example _router.get()_ instead of \*app.get()

```
const router = express.Router();

// gets all members
router.get("/api/members", (req, res) => res.json(members));
```

### To parse data sent in a post you need to use **Body Parser**.

- **Body parser** is now included with Express so you don't have to install it.
- You just need to initialize it as middleware.
- express.json() allows you to handle raw json.
- express.urlencoded({ extended: false }) allows you to use url encoded data.

```
app.use(express.json());
app.use(express.urlencoded({ extended: false });
```

### **uuid** generates random ids.

```
npm install uuid
```

### **express-handlebars** is a templating engine.

- [https://github.com/ericf/express-handlebars](https://github.com/ericf/express-handlebars)
- To install:

```
npm install express-handlebars
```

- Directory structure

```
   .
   +-- app.js
   +-- views
       +-- home.handlebars
       +-- layouts
           +-- main.handlebars
```

- Run using _res.render("home");_
- To set up **express-handlebars** as middleware

```
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
```

- In the layout whenever you want to output the rest of your view use triple curly braces.

```
  <div class="containter mt-4">
    {{{body}}}
  </div>

```

- For variables in handlebars templates use double curly braces.

```
<h1>{{title}}</h1>
```
