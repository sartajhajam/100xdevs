/* # Create an HTTP Server

It should have 4 routes

1. http://localhost:3000/multiply?a=1&b=2
2. [http://localhost:3000/add?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
3. [http://localhost:3000/divide?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
4. [http://localhost:3000/subtract?a=1&b=2](http://localhost:3000/multiply?a=1&b=2) 

Inputs given at the end after `?` are known as query parameters (usually used in GET requests)

The way to get them in an HTTP route is by extracting them from the `req` argument (req.query.a , req.query.b)
*/

const exprees = require("express");

const app = exprees();

// creating a sum endpoint 
app.get("/sum",function (req, res) {
   // declaring the variables and extracting the query parameters
    const a =parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })

});

// creating a multiply endpoint 
app.get("/multiply",function (req, res) {
    
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a * b
    })

});

// creating a divide endpoint 
app.get("/divide",function (req, res) {
   
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a / b
    })

});

// creating a subtract endpoint 
app.get("/subtract ",function (req, res) {

    const a =parseInt(req.query.a);
    const b =parseInt(req.query.b);

    res.json({
        ans: a - b
    })
});

app.listen(3000);
