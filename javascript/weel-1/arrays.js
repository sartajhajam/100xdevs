/*
Arrays :-  collection of items having same information in arrays 
Arrayys is of object type having a key value pair but using index 

*/
// storing marks in array s
let heros = ["ironman","hulk","thor","batman"];

console.log(heros);

let marks =[98,67,78,98,78];

let info = ["rahul",86,"delhi"];

console.log(typeof(marks));

console.log(marks.length);

//accessing using keys or indices 

console.log(marks[0])

console.log(heros[2])

console.log(heros[2]="sartaj");


// Looping over an Array
// printall elements of arrays

//let hero = ["ironman","hulk","thor","batman","shaktiman","spiderman"];

for (let i =0 ; i < hero.length; i ++){
    console.log(hero[i]);

}

// for of 
let heroes = ["ironman","hulk","thor","batman","shaktiman","spiderman"];
for (let hero of heroes){
    console.log(hero)
}

let cities = ["delhi","pune","mumbai","hydeabad"]

for (let city of cities){
    console.log(city.toUpperCase());
}

//Practise Question

/*
For a given array with marks of students = [85,97,44,37,76,60].
Find the average marks of the entire class 

*/

let marks_of_students  = [85,97,44,37,76,60];
let sum = 0 

for(let val of marks_of_students){
    sum = sum + val;
}
let average = sum/marks_of_students.length;
console.log(sum)
console.log("average marks of class is = ",average)

/*
For a given array with prices  of 5 items  = [250,645,300,900,50].
All items have an offer of 10 % off on them . Change the array to store final price after 
applying offer 
*/
let prices = [250,645,300,900,50];
let i = 0; 
for (let val of prices ){
    console.log(`value  at index ${i} = ${val}`);
    let offer = val / 10;
    prices [i] = prices[i] - offer ; 
    console.log(`value after offer = ${prices[i]}`);

}

//Array Methods 

/*
Arrays are immutable 

Push () : add to end 
Pop () delete from end and return 
toString():converts array to string 
concat():joins multiple arrays
unshift():- add to start 
slice () :- returns a piece of array 
splice() :- change original array (add, remove, replace )
*/

let foodItems = ["potato","apple","kiwi"]

foodItems.push("chips") // adding element in the array 
foodItems.pop("potato");
console.log(foodItems);
console.log(foodItems.toString())

//concat 
let marvel_heros = ["thor","spiderman","ironman"];
let dcHeros = ["superman","batman"]

let Heros = marvel_heros.concat(dcHeros);
console.log(Heros)

//unshift and shift 
let Marvel_heros = ["thor","spiderman","ironman"];
Marvel_heros.unshift("Krish");
console.log(Marvel_heros)

// slice methods
let marvel_her = ["thor","spiderman","ironman","Dr","Jr"];
console.log(marvel_her);
console.log(marvel_her.slice[1])

//splice methods splice (startidx,delCount,newElements)

let arr = [1,2,3,4,5,6,7,8,9];


arr.splice(2,2,101,102); // replace 3 and 4 with 101 and 102 

console.log(arr);

// Add Element

arr.splice(2,0,101)

console.log(arr);

// Delete Element 

arr.splice(3,1 )

// Replace Element 
arr.splice(3,1,101);



//

let companies = ["Bloomerh","Microsoft","Uber","Google","IBM","Netflix"];

// remove the first company from the arry 

companies.shift();

// remove uber ad add ola in its place 

companies.splice(2,1,"Ola")

// add amazon at the end 
companies.push("amazon ")
