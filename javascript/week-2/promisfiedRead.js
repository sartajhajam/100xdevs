const fs = require("fs");

console.log("------top of the file");

function readTheFile(sendTheFinalValueHere) {
    fs.readFile("a.txt","utf-8",function(err,data){
        sendTheFinalValueHere(data)
    })
}
function readFile(fileName){
    // read the file and return its value
    return new Promise(readTheFile)
}

const p = readFile(); // variable 

function callback(contents){
    console.log(contents);
}
p.then(callback)

console.log("------end of the file-----");


// Fresh Async Function
// the real operation that we want to promisify
function doAsyncOp(resolve){
    setTimeout(resolve,3000); // old , callback based , async function
}
// creating a promise working  as a wrapper for the above function
const pi = new Promise(doAsyncOp);

function callback(){
    console.log("3 seconds have passed");
}
p.then(callback);

const p = new Promise(function(){
    let c = 0;
    for(let i=0;i<1000000;i++){
        c++;
    }
});

function = new Promise(function(resolve){