// Get a user to input a number using prompt Enter a number . Check if the number is multiple of 5 or not 

const prompt = require('prompt-sync')();
let num = prompt("Enter a number");
if (num % 5 ===0  ){
    console.log(num,"is multiple of 5 ");

}else {
    console.log(num,"is not  multiple of 5 ");
}
    
