// scope in Javascript //
// scope is of 2 types : global and local //
let a = 10;
const b = 20;
var c = 30;
if (true) {
    let a = 100;
    let b = 200;
    var c = 300;
    console.log("Inner value of a :", a);
    console.log("Inner value of b :", b);
    console.log("Inner value of c:", c);
    //this would display the results of a ,b and c that are defined inside the scope //

}
console.log(a);
console.log(b);
console.log(c);
//these would display the results of the a , b and c that are defined outside the scope //
// now if would have not displayed the results of a , b and c inside the scope and if we haven't defined a , b and c outside the scope , thn there woulkd have been not any results( undefined )//
// var is never used here in the scope for these issue , example shown below//

var num1 = 10;
if (true) {
    var num1 = 20;
}
console.log(num1)
// in these case , the displayed results would be 20 , cause var is used as the data type variable , hence if num1 is also defined ouside the scope  , but still it displays the value of num1 which is  defined inside the scope //
//but if we had used const/ let as datatype variables  , these problem would not have been occured//
let num2 = 200;
if (true) {
    let num2 = 20;
}
console.log(num2);
// here the displayed result would be 200 , which is of num2 defined outside the scope //


// Scopes in nested functions//
function one(firstOne) {
    const variable1 = "Saptarshi";
    function two(secondOne) {
        const variable2 = "Paul";
        console.log(variable1);
        console.log(variable2);
    }
    two();
    //console.log(variable2) , if we write this code here , we could not solve this because , variable2 is not defined here //
} 
one();

//scope in nested if-else conditions //
if (true){
    const name1 = "DEV";
    if( name1==="DEV"){
    const name2 = "X";
    const name3 = " AVES";
    console.log(name1 + name2  + name3);
    console.log(name2);
    console.log(name3);
    }
  console.log(name1);
}