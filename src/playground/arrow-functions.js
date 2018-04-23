/*ES 5
const square = function (x) {
return x * x;
};
console.log(square(8));

OR

function square(x) {
return x * x;
};
*/

//ES 6 - arrow functions are always annoyimous
//so you have to assign it to a variable
/*
const squareArrow = (x) => {
    return x * x
};
*/
const squareArrow = (x) => x * x;
console.log(squareArrow(8));

//Challenge - use arrow functions
//get FirstName('Milda Nor) -> "Milda":short and shorter versions

//LONGER
/*

const firstName = (fullName) => {
    return fullName.split(' ')[0];
};
*/

//SHORTER
const firstName = (fullName) => fullName.split(' ')[0];

//ORIGINAL
/*
if (fullName){
   var FirstName = fullName.split(' ')[0];
   console.log(FirstName);
}
*/
console.log(firstName("Milda Norkute")); 
