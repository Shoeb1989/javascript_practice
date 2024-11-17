// for Loop

for (let i = 1; i <= 5; i++) {

console.log("Shoeb");

//   for (let i = 1; i <= 5; i++) {

// console.log("Shoeb");

  

let sum = 0 ;
for (let i = 1; i <= 5; i++) {
 sum = sum + i;
}
console.log(sum);
console.log('loop done')

  let sum = 0 ;
for (let i = 1; i <= 5; i--) {
 sum = sum - i;
}

  
//  While Loop
let i = 1;
while(i <= 5) {
console. log("i=", i);
i++;
}

// do while loop 

let i = 20;
do {
console. log("Prine only one"); 
i++;
} while (i <= 10);  

  let i = 20;
do {
console. log("Prine only one"); 
i--;
} while (i <= 10);  

// do while didt use for personal case  
  
// array
  
// practies  for loop

//Practice Qs1
for(let num=0; num <= 100; num++){
console. log ("num =", num) ;
}

//Practice Qs2 even number and odd number
for(let num=0; num <= 100; num++){
 if (num %2 === 0){
     console.log("num=", num);
 }

}

for(let num=0; num <= 100; num++){
 if (num %2 === 1){
     console.log("num=", num);
 }

}

  
let gameNum = 25;

let userNum = prompt("Guess the game number : ");

while(userNum != gameNum) { 
   let userNum = prompt("You enter wrong number, Guess again : ");
}
console.log("congo You enter the right Number");

  let obj = {
item: "pen",
price: 10,
};

let output = `the cost of ${obj. item} is ${obj.price} rupees`;
console.log(output);
// console.log("the cost of", obj.item, "is", obj.price, "rupees");


