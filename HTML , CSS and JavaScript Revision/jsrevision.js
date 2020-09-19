function myName(name) {
    if (name.length > 7) {
        alert("The length is greater than needed");
    } else if (name.length === 7) {
        alert("The length is too less");
    } else if (myName === true || name.length > 7) {
        alert("That name is a valid name");
    }
}
myName("Reh");
