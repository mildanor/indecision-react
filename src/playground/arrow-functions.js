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

//////// SECOND PART

//arguments object is not bound with arrow functions
//THIS keyword is not bound in arrow functions
/*
const add = function (a,b){
    console.log(arguments);
    return a+b;
};
*/


/*
const add = (a,b) =>{
    return a+b;
}
console.log(add(55,1, 10, 20));
*/

const user = {
    name: 'Milda',
    cities: ['Vilnius', 'Ferney', 'London'],
    //Better to use ES 5 inside object - as THIS value is bound to object property
   // printplacesLived: function (){
       // console.log(this.name);
       // console.log(this.cities);
       /*
        const that = this;
        that.cities.forEach(function(city){
            console.log(that.name + ' has lived in ' + city);
        });
        */
        printplacesLived(){
       return this.cities.map((city) => this.name + ' has lived '+ city);
       /*
        this.cities.forEach((city)=> {
          console.log(this.name + ' has lived in ' + city);
        });
         */
    }
};
console.log(user.printplacesLived());

//CHALLENGE 
const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());