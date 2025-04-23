function class3(num) {
    console.log("class3 vala function");
    num();
    // tnis i a h.w
    console.log(num);


}
const func2 = () => {
    console.log("this is arrow function");

}

// func2()
// class3 name ka function yha par call ho rha hai 
class3(func2);



// this is bed syntex not available in js 
// function demo(()=>{
// console.log("hey");

// });