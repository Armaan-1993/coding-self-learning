// function Human (name ,age ,weight) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
//     this.func = function(myname) {
//         console.log(`${myname} is my name`)
//     }
// }

// let armaan = {
//     name: "Armaan",
//     age: 26,
//     weight: 71
// }
// let obj = new Human ("Armaan",26,76,"rehaan");
// console.log(obj);

// let myobj = new Human(armaan.name,armaan.age,armaan.weight)
// console.log(myobj)

// function check () {
//     if (myobj instanceof Human) {
//         alert("It's an instance")
//     } else {
//         alert("nope")
//     }
// }
// check();
// let newarray =[];
// let myarray = [2,3,4,5,6,7,8,9,10,11,12];
// myarray.forEach(num => {
// newarray.push(num / 2);
// })
// console.log(newarray);

// let myarray = [2,3,4,5,6,7,8,9,10,11,12];
// myarray.map(function(num) {

// })

// let array  = [1,2,3,54,6,7,7];
// let sum = array.reduce((acc ,num) => {
//   return acc + num;
// },0);
// console.log(sum);

// var num = 10;
// var num = 5;
// console.log(num);

// let num = 9;
// num = 8;
// console.log(num)

// function myfunc (num) {
//     let mynum = 4;
//     console.log(mynum+num);
// }
// myfunc(3)
// console.log(mynum);


// var num = 5;
// for(let i = 0; i <7; i++) {
//     var name  = "armaan"
// }
// console.log(name);

// for(let i = 0; i < 4; i++) {
//     let num = 1;
//     num = num + i;
// }
// console.log(num);

// var num = "$";
// console.log(typeof num);

// let mydate = new Date().getFullYear();
// console.log(mydate)

let arr = [1,2,3,5,6,7,7,8,8];
arr1 = [5,6,7,7]
// console.log(Array.of(arr));
// console.log(Array.isArray([arr]));
// console.log(Array.from("sdasda"))
// console.log(Array.of("sdasda"))
// console.log(arr.concat(arr1));
// console.log(arr1.fill(2,1,3));
// console.log(arr.fill("$",3,6));
console.log(arr1.copyWithin(1,2,3));