//outer function
function baharValaFunction() {

    const ans = 190;
    let at = 67;
    var ath = 863;
    //inner function 

    // 1st way 
    // function andarValaFunction() {

    //     console.log(ans, at, ath);

    // }
    // andarValaFunction();


    // 2nd way 
    // return function andarValaFunction() {

    //     console.log(ans, at, ath);

    // }


    // you will always see 
    return () => {
        console.log(ans, at, ath);
    }




    // syntex
    // return function() {
    //     console.log(ans, at, ath);
    // }
}
// 1st case-if you are not returning any inner function
baharValaFunction();

const ans = baharValaFunction();
ans();