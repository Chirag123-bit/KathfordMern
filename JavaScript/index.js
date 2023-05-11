// console.log('Hello World')
// let userInput = prompt("Enter a text")
// console.log(userInput)
// let userChoice = confirm("Are You Sure?")
// console.log(userChoice)
// alert("Alert")


// Data Types (String, Boolean, Numbers, Array, Objects)

let str1 = "21"
let str2 = "10"
let str3 = "a"
let bool1 = true
let bool2 = false
let num1 = 1
let num2 = 1.05

// console.log(str1 * str2 + str3)

// console.log(typeof (str1))



// let obj = {
//     "name": "Chirag",
//     "age": 25,
//     "address": "Kathmandu"
// }
// console.log(obj["address"])


// let arr1 = [1, 2, 3, "a", "b", "c"]
// console.log(arr1)
// arr1[0] = 5
// console.log(arr1)


let var5 = 10
let var6 = "10"
// console.log(var5 === var6)


// const userInput = prompt("Enter a number")

// if (userInput == 10) {
//     console.log("Valid")
// }


// else {
//     console.log("Invalid")
// }



// Array Methods (Push, pop, slice, splice, toString, join,
//                shift, unshift, concat, splice, slice)
let arr = [1, 2, 3, "a", "b", "c"]

// Push(Element) => Adds element to last of array
// pop() => Removes Element from last of array
console.log(arr)
arr.push(10)
console.log(arr)
let lastElement = arr.pop()
console.log(lastElement)

// Shift and Unshift

arr.shift() //Removes first element
console.log(arr)

arr.unshift(20) //Adds element to first position
arr.unshift(20, 30, 40, 50) //Adds element to first position
console.log(arr)

const slicedArray = arr.slice(0, 3) // Slices/Breaks an array
console.log(slicedArray)

arr.splice(2, 5, 888, 89, 65) //(index, deleteCount, itemsToAdd...)
console.log(arr)

const convertedString = arr.toString() //Converts an array to string
console.log(convertedString)


const newConvertedString = arr.join(" | ") // Joins elements of array with " | " in between
console.log(newConvertedString)


for (let i = 0; i < 10; i++) {
    console.log(i)
}


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


// Print all even numbers from 1 – 100
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// for (let i = 2; i <= 100; i += 2) {
//     console.log(i)
// }



//Template Literals

let name = "Chirag"
let age = 25
let address = "Kathmandu"

console.log("My name is " + name + " and I am " + age + " years old and I live in " + address)

console.log(`My name is ${name} and I am ${age} years old and I live in ${address}`)



let userNumber = prompt("Enter a number")
for (let i = 1; i <= 10; i++) {
    console.log(`${userNumber} x ${i} = ${userNumber * i}`)
}
