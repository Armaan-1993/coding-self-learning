// function myName(name) {
//     if (name.length > 7) {
//         alert("The length is greater than needed");
//     } else if (name.length === 7) {
//         alert("The length is too less");
//     } else if (myName === true || name.length > 7) {
//         alert("That name is a valid name");
//     }
// }
// myName("Reh");

// function checkStock(stock) {
//     if (stock) {
//         console.log("The stock is the best stock in the world");
//     } else if (stock === false) {
//         stock = prompt("Enter the stock number");
//     }
// }
// checkStock(57);

// alert(Math.ceil(Math.random() * 10));

// setTimeout(printNum, 3000);

// function printNum() {
//     alert(Math.floor(Math.random() * 10));
// }
setInterval(printNum, 1000);

function printNum() {
    alert(Math.floor(Math.random() * 100));
}
