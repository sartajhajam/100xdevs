/* The code written so far is synchronous code is executed by line, in the order it is written .
Each operation waits for the previous one to complete before moving to the next one

Examples of Synchronous code 

*/

// normal function in javascript
// function to find sum of two numbers 

function sum(a,b){
    return a+b;
}

let ans = sum(30,20)
console.log(ans);

// find sum from 1 to n number 
// if n = 2 then  1 + 2 = 3 
function sum(n){
    let ans = 0;
    for (let i =1 ; 1 <=n;i ++){
        ans = ans + i 
    }
    return ans ;
}
const ans1 = sum(100);
console.log(ans1)

const ans2 = sum(1000);
console.log(ans2)
const ans3 = sum(10000);
console.log(ans3)



const fs = require("fs"); // impport fs library 
// fs is an object with read file sync 
const contents = fs.readFileSync("a.txt", "utf-8"); // call the function to read the a.txt. Read file synchronsoly 
const dataB = fs.readFile("b.txt", "utf-8"); // ReadFile Asynchorously 

console.log(contents);

console.log(dataB);
/*Functional Arguements :- 
     Approach 1 to write calculator without functional arguements 
*/ 
function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function doOperation(a, b, op) {
    return op(a, b)
  }
  
  console.log(sum(1, 2))

/*
Approach 2 to write with the help of Functional Arguments 
Passing a function to another function as argurment
*/
function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function doOperation(a, b, op) {
    // a = 1 
    // b = 2
    // op = sum 
    // op can be changed to sum , subtract, divide , multiply .
    return op(a, b)
  }
  
  console.log(doOperation(1, 2, sum))
  console.log(doOperation(1, 2, multiply))

/*
