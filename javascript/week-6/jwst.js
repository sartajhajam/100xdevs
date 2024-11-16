/* JWTs, or JSON Web Tokens, are a compact and self-contained way to represent information between two parties. 
They are commonly used for authentication and information exchange in web applications.

**JWTs are Stateless**: JWTs contain all the information needed to authenticate a request, so the server doesn’t need to store session data. 
All the `data` is stored in the token itself.

 */
// Authentication 

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

const JWT_SECRET ="randomeiloveyoutuiba";
// using express.json() to parse JSON request body
app.use(express.json());

const users = [];

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    })
    res.send({
        message: "You have signed up"
    })
});


// function to generate tokens 
function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

// sign in handler 

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = jwt.sign({
            //convert username over to jwt 
            username:username
        },JWT_SECRET);
        //user.token = token;
        res.send({
            token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});


app.get("/me", function(req, res){
    const token = req.headers.token //jwt
    const decodedInformation = jwt.verify(token,JWT_SECRET);//converting jwt to usernmae 
    const username = decodedInformation.username


    let foundUser = null; 

    for(let i = 0; i < users.length; i++) {
        if (users[i].username == username){
            foundUser = users[i]
        }
    }

    if (foundUser) {
        res.json({
            username:foundUser.username,
            password:foundUser.password
        })
    }else{
        res.json({
            message:"Token Invalid therfor User not found"
        })
    }

})


app.listen (3000);
