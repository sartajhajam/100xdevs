// Middleware functions are functions that have access to the request object (req), the response object (res),
// and the next middleware function in the application’s request-response cycle.

const express = require('express');
const app = express();

// function that return a boolean if age > 14
function isAdult(age){
    if(age >= 14){
        return true;
    }
    return false;
}
// using middleware fuction call 

function isOldEnoughMiddleWare(req,res,next){
    const age = req.query.age;
    if(age >= 14){
        next();
    }else{
        res.status(411).json({
            msg: "You are not old enough ",
        });
    }
}

// using  a middle ware over here 
app.get("/ride2",isOldEnoughMiddleWare,function(req,res){
      res.json({
            msg: "You have successfully riden the ride 1",
        });
     });
app.get("/ride1",isOldEnoughMiddleWare,function(req,res){
        res.json({
              msg: "You have successfully riden the ride 1",
          });
       });

// http://localhost:3000/ride1?age=45


app.listen(3000);

