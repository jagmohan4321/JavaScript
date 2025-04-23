function baharVala() {
    let incrementNumber = 1;
    console.log("the value of incNum", incrementNumber);

    // return 10;

    return function andarVala() {
        return ++incrementNumber;
    }
}


let ans = baharVala();
console.log("by first ob", ans());
console.log("by first ob", ans());
console.log("by first ob", ans());

let ans1 = baharVala();
console.log("by second ob", ans1());

// for resolving the problem stack overflow
ans = null;
ans1 = null;