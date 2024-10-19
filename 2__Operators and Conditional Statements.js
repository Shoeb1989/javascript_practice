// This is a single line comment

/* This is a multi-line
comment. */

/* +, -,*, I

· Modulus

. Exponentiation

. Increment

. Decrement */

//Artimetic Operators
let a = 5;
let b = 2;

console. log ("a = ", a, " & b = ", b) ;
console. log("a + b = ", a + b) ;
console. log("a - b = ", a - b) ;
console. log("a * b =", a * b);
console. log("a / b =", a / b) ;
console. log("a % b =", a % b) ;
console. log("a ** b =", a ** b) ; // give me 25 ( 5^2 ) 

// unary Operator
// a++ = a+1
// a-- = a-1 

let a = 5;
let b = 2;

console. log("a = ", a, " & b = ", b) ;
a--;

console. log ("a = ", a); // 4

//Asignment Operators

let a = 5;
let b = 2;

a += 4; // a = a + 4
console. log ("a = ", a); //9

/* Comparison Operators

Equal to == 

Not equal to !=

Equal to & type ===

Not equal to & type !==

>, >=, <, <=
*/
I
//Comparison Operators
let a = 5;
let b = 2;

console. log("5 = 2", a == b); //false

let a = 5; //number
let b = "5"; //string -> number

console. log ("a === b", a === b) ; // False

/* Logical Operators

Logical AND &&

Logical OR ||

Logical NOT !

*/

let a = 6;
let b = 5;

let cond1 = a > b; //true
let cond2 = a === 6; //true
console. log("cond1 && cond2 = ", cond1 & cond2); // true when two condition is true 

let a = 6;
let b = 5;

let cond1 = a > b; //true
let cond2 = a === 6; //true
console. log("cond1 && cond2 = ", cond1 & cond2); // true when Any one Condition is true


// conditional statement if/else

let age = 11;

if(age > 18) {
console.log("can vote") ;
}
if (age < 18) {
console.log("can not vote") ;
}

