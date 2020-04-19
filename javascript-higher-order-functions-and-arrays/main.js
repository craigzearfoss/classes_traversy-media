const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// -------------------------------------------------------------------
// foreach
// -------------------------------------------------------------------
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach
//  you can pass in the company, index or companies into the function
// companies.forEach(function (company) {
//   console.log(company);
// });

// Get 21 and older

// -------------------------------------------------------------------
// filter
// -------------------------------------------------------------------
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });
// console.log(canDrink);

// // with ES6 arrow functions
// const canDrink = ages.filter((age) => age >= 21);
// console.log(canDrink);

// Get Retail companies

// const retailCompanies = companies.filter(function (company) {
//   if (company.category === "Retail") {
//     return true;
//   }
// });
// console.log(retailCompanies);

// // with ES6 arrow functions
// const retailCompanies = companies.filter(
//   (company) => company.category === "Retail"
// );
// console.log(retailCompanies);

// Get companies that started in the 1980s
// const eightiesCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.start < 1990
// );
// console.log(eightiesCompanies);

// Get companies that lasted 10 years or more
// const lastedTenYears = companies.filter(
//   (company) => company.end - company.start >= 10
// );
// console.log(lastedTenYears);

// -------------------------------------------------------------------
// map
// -------------------------------------------------------------------
// allows you to create new arrays

// Create array of company names
// const companyNames = companies.map(function (company) {
//   return company.name;
// });
// console.log(companyNames);

// const testMap = companies.map(function (company) {
//   return `${company.name} - [${company.start} - ${company.end}]`;
// });
// console.log(testMap);

// ES6 syntax
// const testMap = companies.map(
//   (company) => `${company.name} - [${company.start} - ${company.end}]`
// );
// console.log(testMap);

// const agesSquare = ages.map((age) => Math.sqrt(age));
// console.log(agesSquare);

// const agesTimesTwo = ages.map((age) => age * 2);
// console.log(agesTimesTwo);

// mapping twice
// const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
// console.log(ageMap);

// -------------------------------------------------------------------
// sort
// -------------------------------------------------------------------
// return 1 or -1 to move it up or down in the array

// Sort companies by start year

// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedCompanies);

// ES6 syntax
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

// sort ages
//const sortedAges = ages.sort((a, b) => (a > b ? 1 : -1));
// const sortedAges = ages.sort((a, b) => a - b);
// console.log(sortedAges);

// -------------------------------------------------------------------
// reduce
// -------------------------------------------------------------------

// Get total of ages

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }
// console.log(ageSum);

// const ageSum = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);
// console.log(ageSum);

// ES6 syntax
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// Get total years for all companies
// const totalYears = companies.reduce(function (total, company) {
//   return total + (company.end - company.start);
// }, 0);
// console.log(totalYears);

// ES6 syntax
// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );
// console.log(totalYears);

// -------------------------------------------------------------------
// combining methods
// -------------------------------------------------------------------

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
console.log(combined);
