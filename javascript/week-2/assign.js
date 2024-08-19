/*
Write a function that takes a user as an input and greets them with their name and age

*/

function myGreet(name,age){
    return "Hello " + name + "and your age is " + age;
}

let x = myGreet("sartaj",30)
console.log(x)

/*
Write a function that takes a new object as input which has 
name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
Also tell the user if they are legal to vote or not
*/

let ob = {
    first_Name : "Sartaj",
    age : 30,
    gender : "Male"
};

function obGreet(ob){
    if (ob.age >= 18){
        console.log( "Hi Mr " + ob.first_Name+", you age is " +ob.age+" Congrats ! You can Vote.");
}
}

        
obGreet(ob);


/*
Write a function that takes an array of numbers as input, and returns a new array with only even values. 
Read about filter in JS
*/

let numbers = [ 24,56,67,78,24,67,89];
let evenNum = numbers.filter(evenNumber);

function evenNumber(numbers){
    return numbers %2;
}
console.log(evenNum);


/*
Array of Objects 
Write a function that takes an array of numbers as input, and returns a new array with only even values. 
Read about filter in JS
*/


const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbersArray = filterEvenNumbers(inputArray);

function filterEvenNumbers(numbers){
    return numbers.filter(function(number){ //using call back 
        return number % 2 === 0;
});
}
console.log(evenNumbersArray);
///const user1 = users[0] 
//const user1Age = users[0].age


