// first hallo word :P 
// console.log("Hello World")

//changing color of H1 on click
const welcomeBtn = document.getElementById("welcome")
const header = document.querySelector("h1")

function changeColor() {
 header.classList.toggle("redcolor")
}
welcomeBtn.addEventListener('click', changeColor)