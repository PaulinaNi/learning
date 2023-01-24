// first hallo word :P 
// console.log('Hello World')

//NavBar 

const mobileMenuList = document.getElementById('mobileMenuList')
const hamburgerMenuBtn = document.getElementById('hamburgerMenuBtn')
const topSpan = document.getElementById('topSpan')
const middle = document.getElementById('middle')
const bottom = document.getElementById('bottom')

function hamburgerMenuHandler() {
    mobileMenuList.classList.toggle('hidden')
    middle.classList.toggle('opacity')
    topSpan.classList.toggle('topAnimation')
    bottom.classList.toggle('bottomAnimation')
}

hamburgerMenuBtn.addEventListener('click', hamburgerMenuHandler)

//changing color of H1 on click
const welcomeBtn = document.getElementById('welcome')
const header = document.querySelector('h1')

function changeColor() {
    header.classList.toggle('redcolor')
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

// Excercise 
//Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

const lastWordLength = (str) => {
    const allWords = str.trim().split(' ')
    return allWords[allWords.length - 1].length
}

// console.log(lastWordLength(' Wait for me, please'))