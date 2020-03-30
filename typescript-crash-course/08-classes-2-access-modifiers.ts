// we can add access modifiers to class properties and methods
// you can you the following access modifiers
//      private  - you cannot access from outside the class
//      public   - you can access outside the class
//      proteted - you can't access from outside the class but it
//                 can be access from inherited classes
class User {
    private name: string;
    private email: string;
    public age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User created: '+this.name);
    }

    public register() {
        console.log(this.name+' is now registered');
    }
}

let john = new User('John Doe', 'jdoe@gmail.com', 34);

console.log(john.age);

console.log(john.register());