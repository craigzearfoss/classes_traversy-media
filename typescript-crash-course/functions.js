// here's a function to add two numbers
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 4));
// you can check the type of variables and cast them to different types
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mySum('3', 5));
// function to concatenate two strings
function getName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(getName('John', 'Doe'));
// if you append a question mark to a parameter it makes it optional
function getName2(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + ' ' + lastName;
}
console.log(getName2('John'));
// you can have a function return void
function myVoid() {
    return;
}
