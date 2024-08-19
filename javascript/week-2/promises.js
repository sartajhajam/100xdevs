/*
Promises 
Promise is for eventual completion of task . It is an object in JS

Its is a solution to callback hell 

let Promise = new Promise(resolve,reject) => {})

    A javascript promise object can be :
    -pending :- the result is undefined
    -resolved :- the result is value (fullfilled)
    -Rejected :- the result is an error object

    .then ()
    .catch()

    promise.then((res)=>{...})  // when result is fullfilled

    promise.catch((err) => { })
*/



const getPromise = () => {
    return  new Promise((resolve,reject) => {
        console.log("I am a promise ");
        resolve("success");

    });
};


let prmise = getPromise();
prmise.then(() => {
    console.log("promise fullfilled");
}) ;



let promise = new Promise((resolve,reject) => {
    console.log("I am a promise")
    resolve(123);



})