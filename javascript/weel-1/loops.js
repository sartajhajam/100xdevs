//Loops are used to execute a piece of code again & again
// Foor Loop
// initilization condition , stopping condition, updation condition
for(let i =1 ; i <=5;i++){
    console.log("Hello World !")
}
console.log("loop has ended ");

// Calculate sum of 1 to N number 

let sum = 0 ;
let n = 100;

for(let i=1; i<=n;i++){
    sum = sum + i;
}
console.log("sum = ",sum);
// Infinite Loop In Javascript
// A loop that never ends .A loop whose stopping condition is false
// While Loop 
// while(condition){} stopping condition in parenthesis 
// updation will be at down 
//let i = 1
while(i<=5){
    console.log("i = " , i);
    i++;
}
// do will loop will always run 
let i = 1 ;
do {
    console.log("i = ",i);
     i++;

}
while(i <= 10 );

// FOR OF LOOP 

// to iterate on special data types for example on strings and arrays 
// for(let val of strVar) is syntax 

let str  = " HelloWorld";
let size = 0;
for(let i of str){
    console.log("i = ",i)
    size++;
}
console.log( "string size = ",size);

// For In Loop 
// statement iterates a specified variable over all the enumerable properties of an object.
let student = {
    name: "Sartaj Hajam",
    CGPA:7.5,
    isPass:true,
};

for (let i in student){
    console.log(i);
}

//Practise Questions 
// Print all even numbers from 0 to 100 .

for(let num = 0; num <= 100; num++){
    if(num%2 === 0 ){
        console.log("num = ",num)
    }
}

// Print all odd  numbers from 0 to 100 .

for(let num = 0; num <= 100; num++){
    if(num%2 !== 0 ){
        console.log("num = ",num)
    }
}

//Practise Question :- 2
// Create a game when you start with any  random game number 
// Ask the user to keep guessing the game number until the user
//enters correct value 

const prompt = require('prompt-sync')();
let gameNum = 25;
let userNum = prompt("Guess the game Number :")
console.log(userNum);

while(userNum != gameNum) { //game
  userNum = prompt("You entered Wrong Number . Guess the game Number again  :")

}
console.log('congratulations, you entered the right number ')