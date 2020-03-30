// note the we can do the static typing which we can't do in regular JavaScript
// note that you can also do classes with ES6
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
}

let john = new User('John Doe', 'jdoe@gmail.com', 34);

console.log(john.age);

console.log(john.register());