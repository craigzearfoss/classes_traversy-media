// array data type
// there are two ways to declare array data types

// first way
let myVode: strArr: string[];    // an array of strings (can only have strings in the array)
let numArr: number[];    // an array of numbers
let boolArr: boolean[];  // an array of boolean values

strArr = ['Hello', 'World'];
numArr = [1, 2, 4, 5.6];
boolArr = [true, false, true];

console.log(strArr);
console.log(numArr);
console.log(boolArr);


// second way
let strArr2: Array<string>;
let numArr2: Array<number>;
let boolArr2: Array<boolean>;

strArr2 = ['Goodbye', 'Cruel', 'World'];
numArr2 = [10, 8, 3.4, 7];
boolArr2 = [false, false, true];

console.log(strArr2);
console.log(numArr2);
console.log(boolArr2);


// tuple array (different array types)
let strNumTuple: [string, number];
let strNumTuple2: [string, number];

strNumTuple = ['total', 33];

console.log(strNumTuple);

// note that once you pass the initial values you can add any types because it is considered a union
strNumTuple2 = ['total', 33, 11, 23, 'the end'];
console.log(strNumTuple2);