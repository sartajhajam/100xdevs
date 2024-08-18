/*
Ternary  Operators are another way of writing if else statement 
age > 18 "adult": "not adult"

*/

let age = 25 
let result = age >= 18 ? "adult" : "not adult";
console.log(result)

// Swith Declaration 

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
