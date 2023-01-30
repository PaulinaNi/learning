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

//ask user for password, need to have 6 characters and can't include space

// const password = prompt('please type your password')

// if (password.length < 6){
//     console.log('Your password must contain at least 6 characters')
// } else if (password.includes(' ')){
//     console.log("Your password can't include spaces")
// } else {
//     console.log("You're in")
// }

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

// Write a JavaScript function to parameterize a string. Go to the editor
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

const parameterizeString = (str) => {
    const trimedStr = str.trim()
    let newString = ''
    for (let i = 0; i < trimedStr.length; i++) {
        if (trimedStr[i] === ' ') {
            newString += '-'
        } else if (trimedStr[i] === '.') {

        } else {
            newString += trimedStr[i].toLowerCase()
        }
    }
    console.log(newString)
}
// parameterizeString("Robin Singh from USA.")

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function breakCamelCase(string) {
    let addSpace = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase() && string[i] !== string[i].toLowerCase()) {
            addSpace = `${addSpace} ${string[i]}`
        } else {
            addSpace += string[i]
        }
    }
    return addSpace
}

// console.log(breakCamelCase("camelCasing"))

// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)]
}

// console.log(minMax([2,4,7]))


function getSum(a, b) {
    let sum = 0
    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i
        }
    } else if (b < a) {
        for (let i = b; i <= a; i++) {
            sum += i
        }
    } else {
        sum = b
    }
    return sum
}

// console.log(getSum(0, -1))


// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x) {
    //you can use unary plus operator to converting string into number
    return x.reduce((accumulator, currentValue) => +accumulator + +currentValue)

    // return x.map(e => parseInt(e)).reduce((accumulator, currentValue) => accumulator + currentValue)
}


// console.log(sumMix([9, 3, '7', '3']))


// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
    dna.toUpperCase()
    let complementaryDNA = ''
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'A') {
            complementaryDNA += 'T'
        } else if (dna[i] === 'T') {
            complementaryDNA += 'A'
        } else if (dna[i] === 'C') {
            complementaryDNA += 'G'
        } else if (dna[i] === 'G') {
            complementaryDNA += 'C'
        }
    } return complementaryDNA
}

// console.log(DNAStrand("AAAA"))