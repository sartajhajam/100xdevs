// Strings is a sequence of characters used to represent text

let str = " Learn JavaScript";
// methods 

console.log(str.length); // length of a string 

console.log(str[5]); // accessing charcater positions 

// Template Literals in Javascript 

let specialString = `This is a template literal `;
console.log(typeof specialString)
// String Interpolation 
// A way to have embedded expressions in strings 
//
// To create strings by doing substitution of placeholders 
let obj = {
    item : "Pen",
    proce : 10,
};
let output = `the cost of ${obj.item} is ${obj.proce} rupees`;
console.log (output);
console.log("the cost of ",obj.item, " is " ,obj.proce);

// Escape Character 
console.log("Hello\nWorld")
console.log("Hello\tWorld")

// There are build in functions to manipulate a string 
// str.toUpparCase()
//str.toLowerCase()
//str.trim() removes whitespaces 

let str1 = "01234567";
console.log(str1.slice(1));

let str2 = "sartaj"

let str3 = "hajam"

let res =  str2.concat(str3);
console.log(res)

let stringNew = "hello"
console.log(stringNew.replace("lo","p"))

