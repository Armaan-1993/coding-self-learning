document.getElementById("my-button").addEventListener("click", myFunction());
let x = document.getElementById("sex-bomb");

function myFunction(e) {
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    e.preventDefault;
}
