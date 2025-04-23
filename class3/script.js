const details = {
    id: 10,
    userName: "ZYT",
    speak: function() {
        console.log("hey this is normal func", `**${this.userName}**`);


        const arrowSpeak = () => {
                console.log("this is a arrow speak function", `**${this.userName}**`);
            }
            // yha me call kar rha hu line no. 8 vala arrow function
        arrowSpeak();
        // yha me call kar rha hu line no 17 vala function
        // details.arrowSpeak();
        // details.arrowSpeak();// undefined 
    },
    // arrowSpeak: () => {
    //     console.log("this is a arrow speak function", `**${this.userName}**`);
    // }
};

console.log(details.id);
console.log(details['id']);
details.speak();
// details.arrowSpeak();



// This will work fine
const arrowSpeak = () => {
        console.log("this is a arrow speak function", this.userName);
    }
    // arrowSpeak();



// function sum() {

// }

// const sum = () => {

// }