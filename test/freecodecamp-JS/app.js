// document.getElementById("my-button").addEventListener("click", myFunction);
// let x = document.getElementById("sex-bomb");

// function myFunction() {
//     console.log(x.style.display);
//     // if (x.style.display === "block") {
//     //     x.style.display = "";
//     // }

//     // e.preventDefault();
// }

// var a = "name";
// var b = "age";
// a = "sex";
// if (a) {
//     a = "sex";
//     console.log(a);
// }

// console.log(name);
// var name = "armaan";
// var a = "noni";
// function myFunc() {
//     var a = "armaan";
// }
// console.log(a);

// var name = "armaan";
// var age = 27;
// if (age > 28) {
//     let name = "rehaan";
// }
// console.log(name);

// var sex = "male";

// if (!sex) {
//     var sex = "femaile";
// }
// console.log(sex);

// let obj1 = { name: "armaan" };
// let obj2 = { name: "rehaan" };
// obj1 = obj2;
// console.log(obj1);

// let num = BigInt(23);
// console.log(typeof num);

// let sym1 = Symbol("fucked up");
// console.log(sym1);

// let set1 = new Set();
// set1.add("42");
// set1.add("sexbomb");
// set1.add("sexbomb1");
// // set1.clear();
// set1.delete("sexbomb1");
// console.log(set1);

// let name = "armaan";
// for (let i = 0; i < name.length; i++) {
//     let num = 1;
//     console.log((num = num + i));
// }

// let obj = [
//     { name: "Armaan", age: 27 },
//     {
//         name: "Rehaan",
//         age: 20,
//     },
// ];
// console.log(obj);

// let boy = "armaan";
// boy.length > 3 ? console.log("ype") : console.log("sup");

// let x = 9 | 1;
// console.log(x);

// function Parents(name, age, height, weight) {
//     this.myname = name;
//     this.myage = age;
//     this.myheight = height;
//     this.myweight = weight;
// }

// const dad = new Parents("Saju", 55, "5'7", 70);
// const mom = new Parents("Susan", 50, "5'5", 65);
// // console.log(dad);

// Parents.prototype.relegion = "Christian";
// console.log(Parents);

// Parents.prototype.myFunction = function () {
//     console.log(`my dad's name is ${this.myname}`);
// };

// dad.myFunction();

// Parents.prototype.momFunction = function () {
//     console.log(`my mom's name is ${this.myname}`);
// };
// mom.momFunction();

// function myfunc() {
//     let x = 55;
//     function myfunction1() {
//         let y = 67;
//         return y;
//     }
//     console.log(x + y);
// }
// myfunc();

// function outerFunction() {
//     let x = 7;
//     function innerFucntion() {
//         let y = 9;
//         return y;
//     }
//     return innerFucntion;
// }

// function makeFunc() {
//     var name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }

// makeFunc();

// function MyFunc(x) {
//     function newFunc() {
//         return x + 8;
//     }
//     return newFunc;
// }

// const myPromise = new Promise((resolve, reject) => {
//     // if (resolve) {
//     //     setTimeout(() => {
//     //         resolve("I love you!");
//     //     }, 3000);
//     if (reject) {
//         setTimeout(() => {
//             reject("I hate you!");
//         }, 3000);
//     }
// });

// // myPromise.then((value) => {
// //     console.log(value);
// // });
// myPromise.catch((error) => {
//     console.log(error);
// });

// function resolveInTwoSeconds() {
//     return new Promise((resolve, reject) => {
//         setInterval(() => {
//             resolve("This is resolved in 3 seconds");
//         }, 3000);
//     });
// }

// async function Asyncall() {
//     console.log("calling");
//     const result = await resolveInTwoSeconds();
//     console.log(result);
// }

// Asyncall();

function promiseInFourSecs() {
    return new Promise((resolve, reject) => {
        if (resolve) {
            setTimeout(() => {
                resolve("The promise is fulfilled!");
            }, 4000);
        }
    });
}
// promiseInFourSecs().then((value) => {
//     console.log(value);
// });
// async function displayPromise() {
//     let myPromise = await promiseInFourSecs();
//     console.log(myPromise);
// }
// displayPromise();

async function myPromise() {
    console.log(await promiseInFourSecs());
}
myPromise();
