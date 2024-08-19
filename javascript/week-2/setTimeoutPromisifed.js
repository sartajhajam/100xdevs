// promisified version to avoid callback hell
// setTimeout = > Promisefied setTimeout
function setTimeoutPromisfied(duration) {
  return new Promise(function(resolve, reject)  {
    setTimeout(resolve, duration);
  
});
}
setTimeoutPromisfied(1000).then(function() {
    console.log('hi');
    setTimeoutPromisfied(3000).then(function() {
        console.log('hello');
        setTimeoutPromisfied(5000).then(function() {
            console.log('hello there ');
            
        }); 
    });

});



// call back hell example 

function callback() {
    console.log('hi');
}

setTimeout(function(){  // doing asynchronous call after other asynchronous call
    console.log('hi');
    setTimeout(function(){
        console.log('hello');
        setTimeout(function(){
            console.log('hello there ');
            
        },5000);
    },3000);
},1000);
