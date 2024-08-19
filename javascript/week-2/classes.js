// creating a rectangle class 
class Rectangle {
    constructor(width, height, color) { // constructing the object 
         this.width = width;
         this.height = height;
         this.color = color; 
    }
    
    area() {
        const area = this.width * this.height;
          return area;
    }
    
    paint() {
             console.log(`Painting with color ${this.color}`);
    }
    
 }
 
 const rect = new Rectangle(2, 4 ,"red") // creating  a new object from class 
 const rect2 = new Rectangle(6, 4 ,"red")

 const area = rect.area();
 const area2 = rect2.area();
 console.log(area,area2)


 // Existing classes and objects  Current Data anfd time 
// map allows you to structure key value pairs 
const now = new Date();
console.log(now.getFullYear());
// creating new classes using existing classes 
const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));

/*
Promise Class gives you a promise that I will return something in future 
A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

*/

function logName(){
    console.log("sartaj")
}
setTimeout(logName,3000); // callback the logName function 


// Promisified Version

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function callback() {
      console.log("3 seconds have passed");
  }
  
  setTimeoutPromisified(3000).then(callback)
  
// Defining a function wait for 3 seconds  inside which i am passing main function
// and resolve will become main function  and setTimeout excutes 
function waitFor3S(resolve){
    setTimeout(main,3000)
}
function main(){
    console.log("main is called ")

}
waitFor3S(main);


// Prommises creating and using 


function random (resolve){ // resolve is also a function 
    setTimeout(resolve,3000);

}

let p = new Promise(random); // instance of random class with pending state
// using a eventual completion value returned by the promise 
function callback(){
    console.log("Promise completed");
}
p.then(callback)


// Write a promisified version of call 