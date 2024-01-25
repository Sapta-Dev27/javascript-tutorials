//FUNCTIONS IN JAVASCRIPT IS MAINLY USED TO REDUCE THE CODE , IT MAINLY ACTS AS A PACKAGE IN WHICH A CODE LINES ARE WRITTEN AND THAT CODE CAN BE CALLED AS MANY TIMES U WANT //
//now if we are willing to call these values again and again , we can use  functions for this purpose//

function SayName() {
    console.log("S");
    console.log("A");
    console.log("P");
    console.log("T");
    console.log("A");
}
SayName()
// add two numbers by adding two numbers , here number1 and number2 are called the parameters and 10 ,20 are called the values //
function addNumbers(number1, number2) {
    let result = number1 + number2;
    return result;
}
const result = addNumbers(10, 20)
console.log("Result is :", result);

//multiply two numbers , here number1 //
function multiplyNumbers(number1, number2){
    let result2 = number1*number2;
    return result2;
}
const result2 = multiplyNumbers(10,10);
console.log("Multiplication result is :" , result2);

//division of two numbers , here number1 and numnber2 are called the parameters and 50  and 10 are the values //
function divideNumbers(number1,number2) {
    let result3 = number1/number2;
    return result3;
}
const result3=   divideNumbers(50,10);
console.log("Result after division is :" , result3);