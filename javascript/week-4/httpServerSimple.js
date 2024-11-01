// creating a simple basic express server giving your sum of  of numbers  
// express 
// node default library 


const express = require('express');

// opening an express server
const app = express();


function sum (n){
    let ans = 0;
    for(let i = 0; i < n; i++){
        ans += i;
    }
    return ans;
}

// introducing  a route

app.get("/",function(req,res){
    const n = req.query.n; // catching the query parameter
    const ans = sum(n);
    res.send("hi your answer is " + ans);
});

app.listen(3001);

