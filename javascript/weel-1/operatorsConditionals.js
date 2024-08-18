/*
Used to perform some operation on data 
Arthimatic Operators :- +,-,*,/

*/
let a = 5 ;
let b = 6 ;
console.log("a + b = ",a + b );
console.log("a - b = ",a - b );
console.log("a * b = ",a * b );
console.log("a / b = ",a / b );
// Modulus operator is percentage to get the reminder 
console.log("a % b = ",a % b );
// Exponentation :- to get the exponent of a number 
console.log("a ** b = ",a ** b );
// Increment is unary operotor ++ which meas a = a +1 or a++
// Decrement is unary operaotr --  which meas a = a -1 or a--
let a = 7 ;
a = a + 1 ;
console.log("a = " , a )

/*
Assignment Operators 
= , += , -=  , 

*/

let x = 6 ;
let y = 8 ;
 x += 4;  // x = x + 4 
console.log("x = " , x ) //10

/*
Comparision  Operators 
Equal to == , Equal to & type === , Not equal to != , !==

*/
let f = 6 ;
let k = 8 ;
console.log("6 = = 8 " , f ==k ) ;
console.log("6 = = 8 " , f !=k ) ;
console.log("6 = = 8 " , f ===k ) ;
console.log("6 >  8 " , f > k ) ;
console.log("6 <  8 " , f < k ) ;
console.log("6 >=  8 " , f >= k ) ;
console.log("6 <=  8 " , f <= k ) ;


/*
Logical   Operators :- Evaluates multiple expresiions and returns true or false 
Logical AND && :- When both are true , results will be true
 , Logical OR || :- if either one the condition is true , result is true 
 , Logical Not ! :- if true , reult will be false 
*/

let q = 6 ; 
let w = 5 ;

let cond1 =  q > w;
let cond2 = q === w;
console.log("cond1 && cond2 = ", cond1 && cond2);
console.log("cond1 && cond2 = ", cond1 || cond2);

