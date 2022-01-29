'use strict'; // Should be the first line of each program - configures JS to catch some potential bugs

// Set a variable to a string value
let firstName = "Dave" 

// Set a variable to a string value using single quotes.
// Both single and double quotes are fine.
let lastName = 'Stewart' 

// Set a variable to a number value
let age = 41 

// Set a variable to a Boolean value
let isJavaScriptFun = true

// Output the types of each variable
console.log("======= Showing Data Types of Variables ========")
console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(age))
console.log(typeof(isJavaScriptFun))

// Math is similar to Python and/or other languages you may have used.
// BEDMAS rules are followed, and bracketed expressions are evaluated inside-out.
// Make sure you understand why the answer here is 4.
let answer = 20 - (80 / (5 + 5)) * 2 

// For more advanced math, use the built in Math object.
// It's documented at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// Note that trig functions use radians.
let answer2 = Math.sqrt(25) + Math.sin(Math.PI/6)

console.log("======= Showing Math Results =========")
console.log(answer)
console.log(answer2)

// You can pass console.log any type of expression; in this case a Boolean expression
console.log(4 < 3)

// Example of string concatenation (joining strings with other data).
// When a plus sign follows a string, it means to concatenate.
let str1 = "Hello "+firstName+", you are "+age+" years old."

// Using backticks instead of quotes creates a template string. Template strings can
// be multi-line, and can also contain variables (or any valid expression) 
// using the syntax shown below.
let str2 = `Hi there ${firstName}, you are ${age} years old.
In a decade you will be ${age+10} years old.`

console.log("======= Showing String Results ========")
console.log(str1)
console.log(str2)

// The ++ and -- operators and be used to increment or decrement a variable
// by one. The += and -= operators can increment or decrement a variable by
// an abribrary amount. Other common operators can be found here:
// https://www.w3schools.com/js/js_operators.asp
console.log("====== Showing increment/decrement Operators =======")
let x = 10
console.log(`Original x is ${x}`)
x++
console.log(`x incremented by 1 is ${x}`)
x += 3
console.log(`x incremented by another 3 is ${x}`)
x -= 5
console.log(`Finally, after decrementing by 5, x is ${x}`)




