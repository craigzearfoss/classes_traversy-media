// simple data types
let myString1, myString2, myString3: string;
let myNum1, myNum2, myNum3, myNum4, myNum5: number;
let myBool: boolean;
let myVar1, myVar2, myVar3: any;

myString1 = 'Hello World';
myString2 = 'Hello' + ' '+'World';
myString3 = 'Hello'.slice(0, 3);

myNum1 = 22;
myNum2 = -22;
myNum3 = 5 + 5;
myNum4 = 5.5;
myNum5 = 0xf00d;

myBool = false;

myVar1 = 'Hello';
myVar2 = 5;
myVar3 = true;

console.log(myString1);
console.log(myString2);
console.log(myString3);

console.log(myNum1, myNum2, myNum3, myNum4, myNum5);

console.log(myBool);

console.log(myVar1, myVar2, myVar3);