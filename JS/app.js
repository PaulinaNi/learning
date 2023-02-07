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

// Let's implement the zipObject function that enables such results

// zipObject(['fred', 'barney'], [30, 40])
// => { 'fred': 30, 'barney': 40 }

// zipObject([['fred', 30], ['barney', 40]])
// => { 'fred': 30, 'barney': 40 }
// The zipObject creates an object composed from arrays of keys and values. It is provided with either a single two dimensional array, i.e. [[key1, value1], [key2, value2]] or with two arrays, one of keys and one of corresponding values.

// If only keys are given, then set the values to undefined.

// zipObject(['fred', 'barney'])
// { fred: undefined, barney: undefined }
// If neither keys nor values are specified, then return {}

// zipObject()
// {}

function zipObject(keys, values) {
    const scores = {}
    if (!keys && !values) {
        return {}
    } else if (!values) {
        if (keys.filter(Array.isArray).length > 0) {
            for (let i = 0; i < keys.length; i++) {
                scores[keys[i][0]] = keys[i][1]
            }
            return scores
        } else if (keys.filter(Array.isArray).length === 0) {
            for (let i = 0; i < keys.length; i++) {
                scores[keys[i]] = undefined
            }
            return scores
        }
    } else {
        for (let i = 0; i < keys.length; i++) {
            scores[keys[i]] = values[i]
        } return scores
    }
}
// console.log(zipObject(['fred', 'barney']))
// console.log(zipObject([['fred', 30], ['barney', 40], ['barney2', 80]]))
// console.log(zipObject(['fred', 'barney'], [30, 40]))
// console.log(zipObject())

//guessing game 

const guessingGame = () => {
    let times = 1
    const range = prompt('Please input range for the game.')
    const luckyNumber = Math.ceil(Math.random() * range).toString()
    let playerNumber = prompt('Guess the number')

    while (playerNumber !== luckyNumber) {
        times++
        if (playerNumber < luckyNumber) {
            playerNumber = prompt('Too low')
        } else if (playerNumber > luckyNumber) {
            playerNumber = prompt('Too high')
        } else if (playerNumber === 'q') {
            break
        } else {
            console.log('something went wrong')
        }
    }
    console.log(`You win, the lucky number is ${luckyNumber}. It took you ${times} guesses`)
}

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

const validatePIN = (pin) => pin.split('').every(e => /^[0-9]/.test(e)) ? pin.length === 4 || pin.length === 6 : false

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    let odd = ''
    A.forEach(num => {
        const numberOfAppearance = []
        A.forEach(element => {
            if (element === num) {
                numberOfAppearance.push(1)
            }
        })
        if (numberOfAppearance.reduce((x, y) => x + y) % 2 === 1) {
            odd = num
        }
    })
    return odd
}

// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))

// Write a function that accepts an array of 10 integers(between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
    return numbers.length === 10 ? `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}` : 'not enought numbers'
}

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

const abbrevName = (name) => `${name.split(' ')[0][0].toUpperCase()}.${name.split(' ')[1][0].toUpperCase()}`

// console.log(abbrevName("Evan Cole"))

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


const fakeBin = (x) => x.split('').map(num => parseInt(num) < 5 ? 0 : 1).join('')

// console.log(fakeBin('45385593107843568'))

// Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."

// These dots at the end also add to the string length.

// So in the above example, trim("Creating kata is fun", 14) should return "Creating ka..."

// If the maximum string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.

// e.g. trim("He", 1) should return "H...", because 1 <= 3

// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

function trim(str, size) {
    const Arr = Array.from(str)
    Arr.splice(size - 3)
    return str.length >= size-2 ? `${Arr.join('')}...` : str;
}

console.log(trim("Creating kata is fun", 14))