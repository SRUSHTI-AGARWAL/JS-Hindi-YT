let score= true;

let valInNum= Boolean(score)


// console.log(typeof(valInNum))    // score is here described as a function but both mean same. 
// console.log(valInNum)



//  '' => 0  : empty string=>Number
//  '33abc' => NaN  : alphanumeric string => number (Not a number received)
// undefined => NaN : undefined => Number  ( in case of undef to string, there is no chage and string received is undefined)
// null => null : null => string   ( no change)
// null => 0 : null => number 

// true = 1, false = 0;


// ********************* Operations ************************************


let value= 3
let negValue= -value
console.log(negValue)


// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2%3)


let str1= "Hello"
let str2 = " Srishti"

console.log(str1 + str2)  // concatenating strings
console.log((1+ 1 + "2"))


// if string is defined first , then all gets converted to string,else to addition operation. 

// console.log(+true)   // output 1 
// console.log(true+)   throws error and these are not valid conversions and should not be used. 
console.log(+"") // as in the above scenario of conversions "" gets converted to Zero , similiary using + with "" provides conversions. 
// but again these are not valid conversion cases
// DATA TYPE of data being compared shoule be same. 

let num1, num2, num3;

num1 = num2= num3 = 2+3
let gameCounter= 100

console.log(++gameCounter);
console.log(gameCounter);
console.log(gameCounter++)
console.log(gameCounter)


console.log(null>0)
console.log(null == 0)
console.log(null>=0)

// comparison operator is different than "==" equality check operator.
// comparions convert Null to a number, treating it as 0.
// That's why null>=0 is true and null>0 is false.

console.log( undefined == 0)// in the case of undefined the value is always false for any operator.


// strict Check"===" -----------------------------------------------

console.log("Equality check ", "2" == 2)
console.log("Strict Check ", "2" === 2)



