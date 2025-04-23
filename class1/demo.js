// console.log("hey students");

// greetStudent();

// function greetStudent() {
//     console.log("hey Geneios");

// }
// let ans1 = greetStudent()
// console.log(ans1);


// function returnValue() {
//     return 10;
// }
// returnValue();
// // 1st way 
// console.log(returnValue())

// store function value in variable 
// let ans = returnValue();
// console.log(++ans);

// const ans = returnValue();
// console.log(++ans);



const username = {
    name12: "mohan"
}

// arrow function defination


// console.log(an());
// let an = (name1) => {

//         // why is coming undefined  here
//         console.log("hey i am a arrow function", this.name12);

//     }
//     // arrow function calling 
// an(username)

// function an1(name1) {
//     // why is coming undefined  here
//     console.log("hey i am a normal function", this.name12);
// }
// an1(username);


// // this is also h.w // find syntex error
let one = () => {
    console.log("hey i am two");
    return 10;

};

console.log(one());




//export-: to make that file available 
//import-: to use someone file make sure that file shoulb be exported.



// type="module"

// const output = 10;
// export let varible = 5649;
// export default output;


function helloBSF() {
    console.log("hello bansal");

}

export default helloBSF;

export function helloBSF1() {
    console.log("hello bansal 1");

}
export function helloBSF3() {
    console.log("hello bansal 3");

}
export function helloBSF2() {
    console.log("hello bansal 2");

}