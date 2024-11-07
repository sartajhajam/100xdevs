/* # Create an HTTP Server

It should have 4 routes

1. http://localhost:3000/multiply?a=1&b=2
2. [http://localhost:3000/add?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
3. [http://localhost:3000/divide?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
4. [http://localhost:3000/subtract?a=1&b=2](http://localhost:3000/multiply?a=1&b=2) 

Inputs given at the end after `?` are known as query parameters (usually used in GET requests)

The way to get them in an HTTP route is by extracting them from the `req` argument (req.query.a , req.query.b)
*/

// Express is a chain of middleware functions
const exprees = require("express");

const app = exprees();

// similar to middleware logic in express
requestCount = 0;
// midleware function to increase the request count
function requestIncreaser(req ,res ,next) {
    requestCount = requestCount + 1;
    console.log("Total number of requests = " + requestCount);
    next();
}

function realSumHandler(req, res) {
    const a =parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b,
    });
}
// creating a sum endpoint 
app.get("/sum",requestIncreaser,realSumHandler); 

app.use(requestIncreaser);
//better for routing and database middleware
app.get("/multiply", realSumHandler);
app.get("/sum ", realSumHandler);
app.get("/divide", realSumHandler);


app.listen(3000);
