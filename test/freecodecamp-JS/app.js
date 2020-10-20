function Human (name ,age ,weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.func = function(myname) {
        console.log(`${myname} is my name`)
    }
}

let armaan = {
    name: "Armaan",
    age: 26,
    weight: 71
}
let obj = new Human ("Armaan",26,76,"rehaan");
console.log(obj);

let myobj = new Human(armaan.name,armaan.age,armaan.weight)
console.log(myobj)

function check () {
    if (myobj instanceof Human) {
        alert("It's an instance")
    } else {
        alert("nope")
    }
}
check();

