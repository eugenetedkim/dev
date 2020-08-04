// JavaScript Higher Order Functions & Arrays
// Traversy Media
// https://www.youtube.com/watch?v=rRgD1yVwIvE
// Code (JsFiddle): https://jsfiddle.net/bradtraversy/e5rb0x0a/
// Uncomment code snippets and Go Live (run live server) to see
// the resulting output in the Inspect Console.
// These fuctions are applied to arrays.
// .forEach()
// .filter()
// .map()
// .sort()
// .reduce()

// Two Arrays
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
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

/************ forEach() ************/
// Better way to loop through an array instead of using a for loop.
// Doesnt return anything
// Much nicer and an elegant way to loop through data

// Standard for loop (for comparison purposes)
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// Take the actual array, 'companies' and apply the dot operator to call the forEach() function
// forEach() takes in as a synchronous call-back function as an argument
// The call-back function can take in three different arguments
// 1. An interator (ex. 'company' for each company element in the array)
// 2. An index (ex. 'index')
// 3. An entire array (ex. 'companies')
// companies.forEach(function (company) {
//   console.log(company.name);
// });

/************ filter() ************/
// Get 21 and Older
// Filter 'ages' array by returning a new array called 'canDrink'
// with elements that are greater than or equal to 21

// Filter using a For Loop
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// Filter using the filter() function
// and get the same result as above with the For Loop
// which looks a lot nicer
// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// We can do better by using one line with ES6 Arrow Functions
// const canDrink = ages.filter((age) => age >= 21);
// Instead of doing function like in the above example,
// we're just going to put in the parameter of 'age'
// and we're going to set an Arrow Function
// then put the condition which will return the same thing

// console.log(canDrink);

// Filter retail companies
// Argument is an ES5 Function
// const retailCompanies = companies.filter(function (company) {
//   if (company.category === "Retail") {
//     return true;
//   }
// });

// Filter retail companies
// Argument is an ES6 Arrow Function.
// Since we only have one parameter, 'company',
// we don't have to use paranthesis
// but if we were using two parameters, such as
// both 'company' and 'index' then
// we'll have to use paranthesis.
// Not sure what index does. Will need to look into this later.
// This does the same thing as above but better.
// const retailCompanies = companies.filter(
//   (company) => company.category === "Retail"
// );

// console.log(retailCompanies);

// Filter all the companies from the 80s
// const eightiesCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.start < 1990
// );

// console.log(eightiesCompanies);

// Filter or get companies that lasted 10 years or more
// const lastedTenYears = companies.filter(
//   (company) => company.end - company.start >= 10
// );
// console.log(lastedTenYears);

/********** map() **********/
// Map works a little differently.
// Instead of filtering things out, we can create new arrays
// of anything really with the current array.
// Let's grab all the company names and put them
// into their own array.
// const companyNames = companies.map(function (company) {
//   return company.name;
// });
// console.log(companyNames);

// const test = companies.map(function (company) {
//   return 1;
// });
// console.log(test);

// Let's use a ES6 Template String (syntax for a variable)
// here for our return and use brackets (for formatting;
// you can use anything) for our start to end date
const testMap = companies.map(function (company) {
  return `${company.name} [${company.start} - ${company.end}]`;
});
console.log(testMap);

// Shorthand way
// const testMap = companies.map(
//   (company) => `${company.name} [${company.start} - ${company.end}]`
// );
// console.log(testMap);

// const agesSquare = ages.map((age) => Math.sqrt(age));
// const agesTimesTwo = ages.map((age) => age * 2);
// console.log(agesSquare);
// console.log(agesTimesTwo);

// This is why map() is so powerful.
// You can apply multiple map() functions to the argument.
// map() first squares each number then multiplies it by 2.
// const agesSquare = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
// console.log(agesSquare);

/********** sort() **********/
// Sort the companies by the start year (earliest year to the latest).
// Pass in two values (two companies) and compare them them and
// we'll return either 1 or -1 to move it up or down in the array.
// const sortedCompanies = companies.sort(function (company1, company2) {
//   if (company1.start > company2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedCompanies);

// Written in shorter form.
// a, b is standard.
// Return 1 or -1 using a ternary operator.
// With a ternary operator, we put a condition, followed
// by a question mark (?), and if the condition is true,
// we return a 1 or else, using a colon (:), return a -1.
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

// Sort ages
// Ascending order
// const sortAges = ages.sort((a, b) => a - b);
// Descending order
// const sortAges = ages.sort((a, b) => b - a);
// console.log(sortAges);

// How does sort() actually work?
// Find out when you have time later. Move on for now.

/********** reduce() **********/
// Add all the ages together using a For Loop
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }
// console.log(ageSum);

// Just as long as the For Loop
// const ageSum = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);
// console.log(ageSum);

// Let's make it shorter and much more elegant
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// Get total years for all companies
// Another example: Let's get the total years
// of all companies using reduce().
// const totalYears = companies.reduce(function (total, company) {
//   return total + (company.end - company.start);
// }, 0);
// console.log(totalYears);

// Shorter way using Arrow Functions
// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );
// console.log(totalYears);

/********** Combine Methods **********/
// Using all 4 methods to manipulate our data
// const combined = ages
//   .map((age) => age * 2)
//   .filter((age) => age >= 40)
//   .sort((a, b) => a - b)
//   .reduce((a, b) => a + b, 0);

// console.log(combined);
