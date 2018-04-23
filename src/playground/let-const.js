//Exploring differences between var const and let
 var nameVar = 'Milda';
 var NameVar = 'Norkute';
 //can reassign
 console.log('nameVar', nameVar);

 let nameLet = "Jen";
 nameLet = "Julie";
 console.log('nameLet', nameLet);
 //let nameLet - you cannot redefine let
 //ONLY USE LET WHEN YOU NEED TO REASSIGN VARIABLE

const nameConst = "Tim";
console.log('nameConst', nameConst);
//Cannot redefine or reassign cons

//Block scoping
var fullName = "Milda Norkute";
//You need to define firstName let so it's in the block e.g.
let firstName;
//with var you don't need: var firstName;
if (fullName){
   var FirstName = fullName.split('')[0];
   console.log(FirstName);
}
console.log(FirstName); 
//var is function scoped, whereas var and scope are block scoped which includse fucntions
//with Const and let we cannot access FirstName outside fucntion



