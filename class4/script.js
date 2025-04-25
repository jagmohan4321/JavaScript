// // promise-> it is an object.
// const createPromise = new Promise((resolve, reject) => {

//     // return resolve("promise resolve ho gya ");
//     // resolve("promise resolve ho gya ");
//     reject("promise reject ho gya")
// });


// //1st syntex
// createPromise.then((ans) => {
//     console.log(ans);

// }).catch((error) => {
//     console.log(error);

// })

// //2nd syntex

// createPromise.then(ans => {
//     console.log(ans);

// }).catch(error => {
//     console.log(error);

// });



// scenario base question resolve reject 
// const usePromise = new Promise((jayesh, deepanshu) => {
//     let randomNo = Math.floor(Math.random(0, 10) * 10);
//     console.log("the generated random no. is ", randomNo);
//     let sum = 0;
//     for (let i = 0; i <= randomNo; i++) {
//         // sum+=i;
//         sum = sum + i;
//     }
//     console.log(`the sum of 0 to random no  ${randomNo} ,sum is ${sum}`);

//     if (sum >= 15) {
//         deepanshu("bhai promise reject ho gya hai ")
//     } else {
//         jayesh("bhai promise resolve ho gya hai")
//     }
// })
// console.log(usePromise);


// usePromise.then((op) => {
//     console.log("jayesh ne bola =>", op);

// }).catch(err => {
//     console.log("deepanshu ne bola=>",
//         err);

// })


// how to see that is out promise in pending state by default=> by setTime out we can see the state
// const usePromise = new Promise((jayesh, deepanshu) => {
//     let randomNo = Math.floor(Math.random(0, 10) * 10);
//     console.log("the generated random no. is ", randomNo);
//     let sum = 0;
//     for (let i = 0; i <= randomNo; i++) {
//         // sum+=i;
//         sum = sum + i;
//     }
//     console.log(`the sum of 0 to random no  ${randomNo} ,sum is ${sum}`);

//     setTimeout(() => {
//         if (sum >= 15) {
//             deepanshu("bhai promise reject ho gya hai ")
//         } else {
//             jayesh("bhai promise resolve ho gya hai")
//         }
//     }, 10000);

// })
// console.log(usePromise);


// usePromise.then((op) => {
//     console.log("jayesh ne bola =>", op);

// }).catch(err => {
//     console.log("deepanshu ne bola=>",
//         err);

// })

// setTimeout(() => {
//     console.log(usePromise);
// }, 10000);



// Api calling in js
let arr = [];
// fetch-: its a kind of promise which is generally used to make the api calling
fetch("https://free-food-menus-api-two.vercel.app/bbqs").then((Response) => {
    console.log("ye rha res=>", Response);

    if (Response.status === 200) {
        return Response.json()
    } else {
        throw new Error("error aa rhi hai")
    }
}).then((op) => {
    arr.push(op);
    console.log(op);

}).catch(err => {
    console.log(err);

})
console.log(arr);