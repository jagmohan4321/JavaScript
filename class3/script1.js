"use strict"
// global scope -> es type ke variables ko me khi par bhi es file ke andar use kar sakta hu 
let a1 = 10;
const b1 = 100;
var b11 = 1090;
// console.log("this is the value of a1 & b1=>", a1);
// console.log("this is the value of a1 & b1=>", b1);
// console.log("this is the value of  b11=>", b11);



//function or local scope
function print() {
    // only local or function scope ke andar hee use kar sakta hu
    a2 = 10;
    const b2 = 100;
    var c2 = 27;
    // console.log("Inside function ,this is the value of a1 & b1=>", a1);
    // console.log("Inside function,this is the value of a1 & b1=>", b1);
    // console.log("Inside function,this is the value of  b11=>", b11);


    console.log("inside function ,this is the value of a2=>", a2);
    console.log("inside function,this is the value of b2=>", b2);
    console.log("inside function,this is the value of c2=>", c2);

    {
        console.log("inside block ,this is the value of a2", a2);
        console.log("inside block,this is the value of b2", b2);
        console.log("inside block,this is the value of c2", c2);
    }


    {

        a4 = 89;
        let b4 = 908;
        var c4 = 8000;
    }

    console.log(a4);

}
print();

console.log("outside function ,this is the value of a1 & b1=>", a2);
// console.log("outside function,this is the value of a1 & b1=>", b2);
// console.log("outside function,this is the value of a1 & b1=>", c2);


// block scope
{
    //only block scope ke andar hee use kar sakta hu
    let a3 = 10;
    const b3 = 100;

    // console.log("Inside block ,this is the value of a1 & b1=>", a1);
    // console.log("Inside block,this is the value of a1 & b1=>", b1);
    // console.log("Inside block,this is the value of  b11=>", b11);

}