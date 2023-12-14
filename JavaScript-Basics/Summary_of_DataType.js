// we have 2 data types 

// 1. Primitive Data Type 

/*
1. Number , 
2. BigInt , 
3. Symbol , 
4. Boolean , 
5. String ,
6.  null , 
7. undefined 

*/
let a = Symbol('123');
let b = Symbol('123');

console.table([2,null,undefined,"hello",true,a,b])

// 2. Non-Primitive Data Type

/* Array , Object , functions */
const array = ["hi ","bye ","there "];
const object = {
    "key1":"CSSMathValue",
    "key2" :"CSSUnitValue"
}
const func = function (){
    console.log("hello to the world ");
}

console.log(func,typeof func);
console.log(object);
console.log("Type of :"+typeof object);
console.log(array);
console.log("Type of :"+ typeof array);

