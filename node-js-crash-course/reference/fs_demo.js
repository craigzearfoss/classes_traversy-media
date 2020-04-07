const fs = require("fs");
const path = require("path");

// create folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("folder created ...");
});

// create and write to a file
// writeFile overwrites whatever is already there
// if you want to append content use the appendFile method
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello world!",
  (err) => {
    if (err) throw err;
    console.log("file written to ...");

    // append to file
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      " I love Node.js",
      (err) => {
        if (err) throw err;
        console.log("file written to ...");
      }
    );

    // read file
    // if you don't include "utf8" as the second parameter it will return the raw buffer
    fs.readFile(
      path.join(__dirname, "/test", "hello.txt"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        console.log(data);
      }
    );

    // rename file
    fs.rename(
      path.join(__dirname, "/test", "hello.txt"),
      path.join(__dirname, "/test", "helloworld.txt"),
      (err, data) => {
        if (err) throw err;
        console.log("file renamed ...");
      }
    );
  }
);

// read file
// if you don't include "utf8" as the second parameter it will return the raw buffer
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  (err, data) => {
    if (err) throw err;
    console.log("file renamed ...");
  }
);
