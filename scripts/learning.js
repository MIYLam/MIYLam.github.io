//Learning from javascript.info

"use strict";
let name = "John";
let admin = name;

// alert(admin); 
// alert( `hello ${"name"}` ); // ? //back tick expressiong will evaluate variables insinde ${}
// result = prompt("prompt test", ["hehehhaw"]);
// let testConfirm = confirm("Is this working?");
// alert(testConfirm);

// alert( "6" / "2" ); // Strings are automatically converted to numbers
// let numberTest = "6";
// alert(typeof(numberTest))
// numberTest = Number(numberTest);
// let boolNumber = Number(true);
// alert(boolNumber); //Comes out as 1, false would be 0
// let boolPlus = +true;
// alert(boolPlus) // Plus sign unary form will convert thing isnto numbers 

// let apples = "2";
// let oranges = "3";

// // both values converted to numbers before the binary plus due to precedence 
// alert( +apples + +oranges ); // 5

// alert("a" > "b"); //JS will compare strings inn alphabetical order 

//? opertor
let boolFromQuestionMark = (name == "John") ? true:false;
alert(boolFromQuestionMark);


if ("0"){ //Will be interpreted as false if string is empty, and is not converted to the 0 number here 
    let message = "Type conversion";
    alert(message);
}