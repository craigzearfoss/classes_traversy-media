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
npm install -g nodemon      - Installs a package globally
```

### Node Moduiles

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
