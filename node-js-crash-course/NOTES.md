# Node.js Crash Course

---

### What is Node.js

- **JavaScript Runtime** (NOT a language or a framework)
- Built on the **V8 JavaScript engine** (Same as Google Chrome)
- Written in **C++**
- Essentially allows us to run JavScript code on the server.
- Note that **Node.js** is a runtime and **Express** is a framework.
- It is used a lot of **REST APIs** and **microservices**.

### Why use Node?

- Fast, efficient and highly scalable
- Event driven, non-blocking I/O model (runs on a single loop)
- Popular in the industry
- Same language on the fron and back end (JS)

### Non-Blocking I/O

- Works on a single thread using non-blocking I/O calls
- Supports tens of thousands of concurrent connections
- Optimizes throughput and scalability in apps with many I/O operations
- All of this makes Node.js apps very fast and efficient

### Node's Event Loop

- Single threaded
- Supports concurrency via events and callbacks
- **EventEmitter** class is used to bind events and listeners

### Best Types of Projects for Node

- REST API and Microservices
- Real Time Services (Chat, Live Updates)
- CRUD Apps - Blogs, Shopping Cars, Social Networks
- Tools and Utilities
- Short Answer: _Anything that is not CPU intensive_

### NPM - Node Package Manager

- Install 3rd party packages (frameworks, libraries, tools, etc).
- Packages get stored in the "**node_modules**" directory.
- All dependencies are listed in a "**package.json**" file.
- NPM scripts can be created to run certain task such as a server.

```
npm init                    - Generates a package.json file
npm install express         - Installs a package locally
npm install -g nodemon      - Installs a package globally (DON'T INSTALL NODEMON GLOBALLY)
```

### nodemon Module

- nodemon monitors your files for changes and when the are detected it automatically restarts the server so you don't have to do it manually.
- It's not good practice to install nodemon globally so we usually add a script for it in the _package.json_ file.

```
...
  "scripts": {
    "start": "node index",
    "dev": "nodemon index"
  },
...
```

Then to run in from the command line just enter **npm run dev**.

### Node Modules

- Node Core Modules (path, fs, http, etc)
- 3rd party modules/packages installed via NPM
- Custom modules

```
const path = require("path");
const myFile = require("./myFile");
```

---

## Creating a Node.js Project

- Install Node.js from [nodejs.org](https://nodejs.org/en/).

- Create the project.

```
npm init

```

- This creates the **package.json** file which stores all of your dependencies.
- All of our dependencies come from https://registry.npmjs.org/
- To install a dependency

```
npm install uuid
```

- To install a dev dependency

```
npm install --save-dev nodemon
```

Or alternately you can use the **-D** option like

```
npm install -D nodemon
```

### **node_modules** directory

- This is where all of the npm dependenies get installed.
- You never want to deploy this directory.
- You can recreate the **node_modules** directory from the **package.json** file by running

```
npm run build
```

- **package-lock.json** tracks the versions of all of your dependencies.
- To run a Node js file you just need to use the **node** command. (The .js extension is optional.)

```
node index
```

### Module Wrapper Function

- When you include a file it isn't getting run directly. It actually gets wrapped in a module wrapper function.

```
(function (exports, require, module, __filename, __dirname)) {

});
```

- Note that because of the file wrapper function you can access the **\_\_filename** and **\_\_dirname** variables within the file.

---

### To import a file in Node.js we use the syntax

```
const Person = require("./person");
```

In React we can import files with the syntax

```
import Person from ("./Person");
```

- We cannot use the React syntax in Node.js because it hasn't implemented that syntax yet.
- It is one of the last features of ES6 that is not yet implemented in Node.
- However, you can use it if you use **Babel** to compile the code.
- The way that node imports a file is known as **common js**.

---

## Node Core Modules

[https://nodejs.org/dist/latest-v12.x/docs/api/](https://nodejs.org/dist/latest-v12.x/docs/api/)

#### [path](https://nodejs.org/dist/latest-v12.x/docs/api/path.html)

- Used for working with file and directory paths.
- It will use the correct path directory separator for the OS, since Windows uses "\" instead of "/".
- Methods include: **basename**, **dirname**, **extname**, **parse**, **join**

#### [fs](https://nodejs.org/dist/latest-v12.x/docs/api/fs.html)

- Used for interacting with the file system.
- The methods are asynchronous, but they do also have synchronous methods.
- If you use the synchronous methods you will have to wait until they complete.
- Methods include: **mkdir**, **writeFile**, **appendFile**, **readFile**, **rename**

#### [os](https://nodejs.org/dist/latest-v12.x/docs/api/os.html)

- Provides operating system-related utility methods and properties.
- Methods include: **platform**,, **arch**, **cpus**, **freemem**, **totalmem**, **homedir**, **uptime**

#### [url](https://nodejs.org/dist/latest-v12.x/docs/api/url.html)

- Provides utilities for URL resolution and parsing.
- Properties include: **href**, **host**, **hostname**, **pathname**, **search**, **searchParams**
- Methods include: **toString**, **searchParams.append**

## Node Core Events

- Much of Node is built around an asyncrhonous event-driven architecture
- **emitter** objects emit named events that cause **listenters** (Function objects) to be called.
- We can create event emitters and we can create event listeners that act on those events.

## http Module

## Extremely simple web server.

```
const http = require("http");

// create server object
http
  .createServer((req, res) => {
    // write response
    res.write("Hello World");
    res.end();
  })
  .listen(5000, () => console.log("Server running ..."));
```

## Simple web server

```
const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }

  if (req.url === "/api/users") {
    const users = [{ name: "Bob Smith" }, { name: "John Doe" }];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

// this looks for the env variable and if not found sets the PORT to 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
```

## Slightly improved web server
```
const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // extension of the file
  let extname = path.extname(filePath);

  // initial content type
  let contentType = "text/html";

  // check and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image.jpg";
      break;
  }

  // read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (erro, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        // some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

// this looks for the env variable and if not found sets the PORT to 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
```

## Express makes creating a web server much easier.

## Deploy to Heroku
- Make sure you use process.env.PORT
```
const PORT = process.env.PORT || 5000;
``` 
- Make sure that you have your start script as node in *package.json*.
```
...
  "scripts": {
    "start": "node index",
    "dev": "nodemon index"
  },
...
```
- Make sure you have the Heroku client installed. You can check with the following command.
```
heroku --version
```
- Stop your server.
- Login to Heroku through the terminal.
```
heroku login
```
- Create a *.gitignore* file in the root of the project.
```
node_modules
reference
logger.js
person.js
```
- Initialize the git repository
```
git init
git add .
git commit -m "initial commit"
```
- Create the Heroku app.
```
heroku create
```
- Go the your Heroku dashboard [https://dashboard.heroku.com/apps](https://dashboard.heroku.com/apps).
  - Click on the newly created app.
  - Click **Deploy** in the top tool bar.
  - Look for the "Create a new Git repository" section and grab the line after "git init" and run it in your terminal to add it as a remote repository and then push to heroku master.
```
heroku git:remote -a <app_name>
git push heroku master
```
- After it deploys enter **heroku** open to go to the app in your browser.
```
heroku open
```
