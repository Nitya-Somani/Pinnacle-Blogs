// //conversion of datatypes 
// let i = 0 ; 
// console.log(typeof i );
// let j = null ;
// let k = undefined ;
// console.log(typeof(j) + typeof(k)); 

//NAN intro 
//Conversion of data types 
const ab = null ; 
console.log(typeof(ab));
console.log(Number(null))
console.log(String(null))
console.table([Number(null),Number(undefined),String(null),String(undefined)]);

// few things to know 
// let abc = 3; 
// const y = abc++; 
// console.log(abc, y );

let x = 3;
const y = ++x;

console.log("x:"+ x, "y:"+y);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

console.log(+true);
console.log(+false);

