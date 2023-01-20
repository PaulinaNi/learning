// first hallo word :P 
// console.log("Hello World")

//NavBar 

const mobileMenuList = document.getElementById('mobileMenuList')
const hamburgerMenuBtn = document.getElementById('hamburgerMenuBtn')

function hamburgerMenuHandler() {
 mobileMenuList.classList.toggle('hidden')
}

hamburgerMenuBtn.addEventListener('click', hamburgerMenuHandler)

//changing color of H1 on click
const welcomeBtn = document.getElementById("welcome")
const header = document.querySelector("h1")

function changeColor() {
 header.classList.toggle("redcolor")
}
welcomeBtn.addEventListener('click', changeColor)

//fizzBuzz - using for loop, if else statement and template literals

function fizzBuzz(lastNum) {
 for (let i = 1; i < lastNum + 1; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
   console.log(`${i} - FizzBuzz`)
  } else if (i % 3 === 0) {
   console.log(`${i} - Fizz`)
  } else if (i % 5 === 0) {
   console.log(`${i} - Buzz`)
  } else {
   console.log(`${i}`)
  }
 }
}

// fizzBuzz(30);