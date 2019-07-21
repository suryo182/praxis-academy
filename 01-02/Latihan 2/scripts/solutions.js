// Latihan 2 - Object

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let user = {
  name: "John",
  surname: "Smith",
}

user.name = "Pete";

delete user.name;
delete user.surname;


// console.log(user);

// Latihan 2 - Arrays

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
// alert( fruits.length );  // 4 ?

// Latihan 2 - Objects keys value entry

let sumSalaries = salaries => {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
}

// console.log(sumSalaries(salaries));

let count = obj => {
  return Object.keys(obj).length;
}

let user = {
  name: "John",
  age: 30
}

console.log(count(user));