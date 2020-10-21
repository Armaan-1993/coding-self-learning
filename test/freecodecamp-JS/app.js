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

// let arr = [1, 2, 3, 5, 5, 6, 7, 7, 8, 8];
// let arr1 = [5, 6, 7, 7];
// let arr2 = [1, 2, 4, 5, [[["A", "B"]]]];
// console.log(arr.every());

// console.log(Array.of(arr));
// console.log(Array.isArray([arr]));
// console.log(Array.from("sdasda"))
// let newarr = Array.of("sdasda")
// console.log(newarr);
// console.log(arr.concat(arr1));
// console.log(arr1.fill(2,1,3));
// console.log(arr.fill("$",3,6));
// console.log(arr1.copyWithin(1,2,3));
// console.log(arr2.flat(2));
// console.log(newarr);
// let newarray = arr1.reduce((acc,num) => (acc + num) ,10  )
// console.log(newarray);
// arr1.every()
// arr.forEach(num =>{
//     num * 2
// } )
// console.log(arr)
// let newarray = arr.lastIndexOf(5);
// console.log(newarray)

// function Dog (name,age,color) {
//     this.name = name;
//     this.age = age;
//     this.color = color;
// }
// Dog.prototype.weight = 23;
// Dog.prototype.breed = "basset hound"
// let obj = new Dog ("peggy",6,"bicolor")
// console.log(obj.weight)
// console.log(obj.breed);

// function firsFunction () {
//     let name = "armaan"
//     function secondFunction () {
//         let myname = `my name is ${name}`
//         console.log(myname)
//     }
//     secondFunction()
// }
// firsFunction();

// let obj1 = { name: "armaan", age: 26 };
// let obj2 = { name: "Rehaan", weight: 90 };
// let newobj = Object.assign(obj1, obj2);
// console.log(newobj);

// let newobj2 = Object.create(obj2);
// newobj2.name = "Noni";
// newobj2.age = 20;
// console.log(newobj2);

// console.log(Object.fromEntries(obj1));

// let arr = [76, 0, 3, 5, 6, 7, 8];
// console.log(arr.keys);

// const mypromise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         if (true) {
//             resolve("It has been resolved");
//         } else {
//             reject("I has been rejected");
//         }
//     }, 3000);
// })
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

// const myfunc = async function () {
//     await
// }

function resolveAfter2Secs() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("resolved");
        }, 2000);
    });
}
async function asyncCall() {
    console.log("sup");
    let result = await resolveAfter2Secs();
    console.log(result);
}

asyncCall();
