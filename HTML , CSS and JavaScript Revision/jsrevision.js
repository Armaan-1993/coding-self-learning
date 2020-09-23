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
// setInterval(printNum, 1000);

// function printNum() {
//     alert(Math.floor(Math.random() * 100));
// }

// setTimeout(setTimeout(printNum, 500), 1000);

// function printNum() {
//     alert("We are the world!");
// }

// function myFunction(name, age, sex) {
//     console.log(`My name is ${name} and i am ${age} years old`);
// }
// myFunction("Armaan", 26);

// let name = "Armaan";
// function myName() {
//     let name = "Rehaan";
//     console.log(name);
// }
// myName();

// function runRandomNos(num) {
//     alert(Math.ceil(Math.random() * num));
// }
// setInterval(runRandomNos(9), 1000);

// let myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// function addArray() {
//     let sum = 0;
//     for (let i = 0; i < myarray.length; i++) {
//         sum += myarray[i];
//     }
//     console.log(sum);
// }
// addArray();

// let mynewArray = new Array(10);
// console.log(`The length of mynewArray is ${mynewArray.length}`);
// mynewArray.push(5);
// mynewArray.push(67);
// mynewArray[4] = 98;
// for (let i = 0; i < mynewArray.length; i++) {
//     if (mynewArray[i] === 67 || mynewArray[i] === 5) {
//         // console.log(`The index is ${mynewArray.indexOf(mynewArray[i])}`);
//         console.log(
//             `The index of 5 is at ${mynewArray.indexOf(mynewArray[i])}`
//         );
//     }
//     console.log(mynewArray[i]);
// }

// var greeter = "hey hi";
// var times = 4;

// if (times > 3) {
//     var greeter = "say Hello instead";
// }

// console.log(greeter); // "say Hello instead"

// let greeter = "hey hi";
// let times = 4;

// if (times > 3) {
//     let greeter = "say Hello instead";
// }

// console.log(greeter); // "say Hello instead"

// let greeting = "say Hi";
// let times = 4;

// if (times > 3) {
//     hello = "say Hello instead";
//     console.log(hello); // "say Hello instead"
// }
// console.log(hello); // hello is not defined

// let type = null;
// console.log(typeof type);
// let type;
// console.log(typeof type);

// let num = BigInt(989398239209309302);
// let num = 897798768778778768n;
// num = 898n;
// console.log("2" - 3);
// console.log(num);

// function newfunction(num, callback) {
//     setTimeout(function print() {
//         for (let i = 0; i < num; i++) {
//             console.log(i);
//         }
//         callback();
//     }, 2000);
// }

// newfunction(5, getname);

// function getname() {
//     console.log("MY name is Armaan");
// }

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve("I have succeeded");
//     }, 1000);
// });
// myPromise.then(function (value) {
//     console.log(value);
// });

// let bestPromise = new Promise(function (resolve, reject) {
//     if (true) {
//         setTimeout(resolve("It has been true"), 1000);
//     } else {
//         setTimeout(reject("I have failed"), 2000);
//     }
// });

// bestPromise
//     .then(function (value) {
//         return value;
//     })
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (myvalue) {
//         console.log(myvalue);
//     });

// let myObj = {
//     name: "Armaan",
//     age: 14,
//     isMale: true,
//     myFunc: function printName(myName) {
//         return `My name is ${myName} and i am ${this.age} years old`;
//     },
// };
// let myObj = [1, 2, 3, 45, 5];
// console.log(myObj.myFunc("Armaan"));

// const myfucn = (name, age) => {
//     console.log(`My name is ${name} and i am ${age} years old`);
// };

// for (const prop of myObj) {
//     console.log(prop);
// // }
// let myObj = [1, 2, 3, 45, 5];
// let myarray = myObj.join("");
// console.log(myarray);

// // myfucn("Armaan", 26);

// function Person (name, age, sex) {
//     this.
// }

// let myarray = ["peggy", "milo", "july", "pegasus"];
// myarray.map((value) => {
//     return value + "o";
// });
// console.log(myarray);

// let myarray = ["peggy", "milo", "july", "pegasus"];
// const newArray = myarray
//     .filter((value) => {
//         return value.length > 4;
//     })
//     .map((dog) => {
//         return dog + "d";
//     });
// console.log(newArray);

// function Dog(details) {
//     this.breed = details.breed;
//     this.height = details.height;
//     this.weight = details.weight;
//     this.color = details.color;
// }

// let peggy = {
//     breed: "Basset Hound",
//     height: "0.5m",
//     weight: "25kg",
//     color: "bi-color",
// };

// const mybaby = new Dog(peggy);
// console.log(mybaby);

// if (mybaby instanceof Dog) {
//     console.log("It's true!");
// }

// Dog.prototype.certified;

// let mydog = new Dog("Basset Hound", "0.5m", 24, "bi-color", true);
// console.log(mydog);

// let myfunc = function (num1) {
//     let myfunction = function (num2) {
//         return num1 + num2;
//     };
//     return myfunction;
// };
// let firstSum = myfunc(2);
// let secondSum = firstSum(3);
// console.log(secondSum)

// let obj = {
//     name: "Armaan",
//     age: 26,
//     printfunc: function (born) {
//         console.log(
//             `My name is ${this.name} and i am ${this.age} years old and i was born on ${born}`
//         );
//     },
//     newval: function () {
//         for (const props in obj) {
//             console.log(`The properties are ${props} : ${obj[props]}`);
//         }
//     },
// };
// obj.printfunc("October");
// obj.newval();

// class dog {
//     Constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayMyName() {
//         console.log("The next day is going to be awesome");
//     }
// }
// let betty = new dog("Armaan", 16);
// betty.sayMyName();
// console.log(betty);

// class Mobiles {
//     constructor(brand) {
//         this.name = brand.name;
//         this.price = brand.price;
//         this.processor = brand.processor;
//     }
//     sayHelloWorld() {
//         console.log("Hello world");
//     }
// }
// const iphone = new Mobiles({
//     name: "Apple",
//     price: 45000,
//     processor: "A!2 BIONIC",
// });
// console.log(iphone);
// iphone.sayHelloWorld();

// class Playstation extends Mobiles {
//     constructor(brand, durability) {
//         super(brand);
//         this.durability = durability;
//     }
//     sing() {
//         console.log("Numb");
//     }
// }
// const song = new Playstation(
//     {
//         name: "Call of duty",
//         price: 1200,
//         processor: "AMD",
//     },
//     45
// );
// console.log(song);
// song.sing();
// song.sayHelloWorld();

// const myPromise = new Promise((resolve, reject) => {
//     if (false) {
//         setTimeout(function () {
//             resolve("It's a resolve");
//         }, 1000);
//     } else {
//         setTimeout(function () {
//             reject("It's a reject");
//         }, 1000);
//     }
// });
// myPromise
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (myvalue) {
//         console.log(myvalue);
//     });

// class Xbox {
//     constructor(details) {
//         this.game = details.game;
//         this.price = details.price;
//     }
//     openxbox() {
//         return "I love xbox";
//     }
// }
// const callOfDuty = new Xbox({ game: "Call of Duty", price: 1700 });
// console.log(callOfDuty);
// callOfDuty.openxbox();

// class Ps5 extends Xbox {
//     constructor(details, year) {
//         super(details);
//         this.year = year;
//     }
//     openps5() {
//         console.log("I love playstation 5");
//     }
// }
// const farCry = new Ps5({ game: "Far Cry 4", price: 2100 }, 2017);
// console.log(farCry);
// farCry.openps5();

// const life = function name(time) {
//     console.log("My " + time);
// };
// life("cloud 9");

// function Life(brand) {
//     this.console = brand.console;
//     this.price = brand.price;
//     this.func = function () {
//         console.log(this.console);
//     };
// }
// const mylife = new Life({ console: "Awesome", price: 1200 });
// console.log(mylife);

// const finalpromise = new Promise((resolve, reject) => {
//     if (false) {
//         resolve("Yooo waduuup");
//     } else {
//         reject("yoooo rejected");
//     }
// });
// finalpromise
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch((myvalue) => {
//         console.log(myvalue);
//     });

// function myfunction() {
//     fetch(`www.google.com`)
//         .then((value) => value.json)
//         .then((data) => {
//             let output = "";
//             data.forEach((mydata) => {
//                 output += `<li>${mydata.login}</li>`;
//             });
//         });
// }

// let myarray = [1, 2, 3, 4, 5, 4, 5, 6];
// let sum = 0;
// myarray.map((value) => {
//     sum = sum + value;
// });
// console.log(sum);

// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("resolved");
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log("calling");
//     const result = await resolveAfter2Seconds();
//     // return result;

//     console.log(result);
//     // expected output: "resolved"
// }

// asyncCall();

// function runAFunction() {
//     return new Promise((resolve) => {
//         setInterval(function () {
//             resolve("I am batman!");
//         }, 2000);
//     });
// }
// const newFunction = async function () {
//     const amg = await runAFunction();
//     console.log(amg);
// };
// newFunction();
