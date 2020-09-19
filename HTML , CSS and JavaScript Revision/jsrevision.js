function myName(name) {
    if (name.length > 7) {
        alert("The length is greater than needed");
    } else if (name.length === 7) {
        alert("The length is too less");
    } else {
        name = prompt("Enter the name");
        alert(`The new name is ${name}`);
    }
}
myName("Reh");
