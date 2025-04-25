// 




const proPromise = new Promise((ritika, kevali) => {
    const rNo = Math.floor(Math.random(0, 10) * 10);
    console.log("value of rNo=>", rNo);

    if (rNo < 5) {
        kevali("kevali ne bola hai=>me reject kar rhi hu meri galti nhi hai");

    } else {
        ritika("ritika ne mana hai =>me accept kar rhi hu meri galti hai ")
    }

})


proPromise.then((op) => {
    console.log(op);

}).catch(e => {
    console.log(e);

})



// api calling by promises;
