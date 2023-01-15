let score= true;

let valInNum= Boolean(score)


console.log(typeof(valInNum))    // score is here described as a function but both mean same. 
console.log(valInNum)



//  '' => 0  : empty string=>Number
//  '33abc' => NaN  : alphanumeric string => number (Not a number received)
// undefined => NaN : undefined => Number  ( in case of undef to string, there is no chage and string received is undefined)
// null => null : null => string   ( no change)
// null => 0 : null => number 

// true = 1, false = 0;
