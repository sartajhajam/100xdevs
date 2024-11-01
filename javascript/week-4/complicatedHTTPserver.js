const express = require('express');
const app = express();


const users = [{
    name : "John",
    kidneys : [{
        healthy : false
    }]
}];

app.get("/",function(req,res){
    const JohnKidneys = users[0].kidneys;
    const numberOfKidneys = kidneys.length;
    const numberOfHealthyKidneys = 0;
    for (let i = 0; i < JohnKidneys.length; i++) {
        if (JohnKidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }

    const numbeerofUnhealthyKidneys = numberOfKidneys 
    numberOfHealthyKidneys;
    res.json({
        JohnKidneys,
        numberOfHealthyKidneys,
        numbeerofUnhealthyKidneys
    });
});
// second endpoint route 

app.use(express.json());

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    });
    res.json({
        msg: "Done!"
    });

});


// put handler 

app.put("/",function(req,res){
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true
    }
    res.json({});
})


app.listen(3000);

// delete handler

app.delete("/",function(req,res){
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy : true
            })
        }
    }
        users[0].kidneys. newKidneys;
        res.json({msg : "Done!"});
    })

            
