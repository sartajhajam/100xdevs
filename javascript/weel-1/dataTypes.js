// Data Types In JavaScript 
// Primitve Data Types  (Number ,String,boolean,Undefined,Null,Bright,BigInt,Symbol )
// Non Primitive Data types 
//  - Objects (Arrays, functions )
// Object is a collection of values .Ex; StudentName, Age , Marks,isPassed,
// Object stores Key,value pairs 
// Key : Value Exampple
const student = {
    fullName : "Rahul Kumar",
    age : 2,
    CGPA : 8.2,
    isPass : true 
};
student["age"] = student["age"] + 1; 
console.log(student["age"]);
console.log(student.CGPA)

// Create a const object called product to store information in the picture
const Product = {
    productName : "Ballpen",
    rating : 4.5,
    Price : 270,
    Offer : 5,
    //isDeal : True,
};

console.log(Product)

// Create a const object called profile to store information shown in picture 
const profile = {
    userName : "Sartaj",
    followers : 2000,
    following :200,
    noOfPosts :4500,
    isFollow :false,
};

console.log(typeof profile.followers);