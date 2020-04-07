In VSCode install the TSLint plugin.

# TypeScript
- Superset of JavaScript developed by Microsoft (inherits all the functionality of JavaScript)
- Compiles to JavaScript via the program tsc (TypeScript Compiler)
- Easily integrated into JavaScript projects
- Designed for development of large applications

What does TypeScript offer?
- Static type checking (optional)
- Class based object (fully compatible with ES6)
- Modularity (can import other files and components)
- ES6 features
- Syntax is closer to Java and other high level languages

## Static Type Checking
With TypeScript we can check and assign variable, parameter and function types.
- It is completely optional
- Helps us find and prevent bugs and stop futute issues from happeneing
- Makes our code muche more readable and descriptive
- TypeScript types
```
String            Void      (on type)
Number            NUll      (undefined)
Boolean           Tuple     (array with fixed number of elements)
Array             Enum      (enumerated values)
Any               Generics  (specifies the type of constraint)
```

## Class Based Objects
- Object oriented programming in JavaScript
- No prototypes
- Encapsulation
- Inheritance
- Modifiers  (public, protected, private)

## TypeScript Compiler (tsc)
- Written in TypeScript itself
- Compiles .ts files to .js
- Installed as an NPM packages (Node.js)
- Support ES6 Syntax

To install TypeScript globally
```
npm install -g typescript

To compile a TypeScript file using tsc. This outputs a .js file that you'll want to use in your application.
```
tsc types.ts
```

To run TypeScript in watchy mode which will update every time that you save the file.
```
tsc types.ts -w
```

C## Class Inheritance
Note that the constructor for an inherited class must have a super method.
```
class User {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User created: '+this.name);
    }

    register() {
        console.log(this.name+' is now registered');
    }

    payInvoice() {
        console.log(this.name+' paid invoice')
    }
}

class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }

    payInvoice() {
        super.payInvoice();
    }
}

let mike:User = new Member(1, 'MikeSmith', 'jsmith@gmail.com', 22);
```