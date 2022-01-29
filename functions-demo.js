'use strict'

// The simplest type of function - it accepts no parameters and returns no values
function printHeading() {
    // Courtesy: https://fsymbols.com/text-art/
    console.log(`
    ███████╗░█████╗░░██████╗████████╗██╗░░░██╗██╗███████╗░██╗░░░░░░░██╗  ░██████╗░░░░██████╗░░░
    ██╔════╝██╔══██╗██╔════╝╚══██╔══╝██║░░░██║██║██╔════╝░██║░░██╗░░██║  ██╔════╝░░░██╔════╝░░░
    █████╗░░███████║╚█████╗░░░░██║░░░╚██╗░██╔╝██║█████╗░░░╚██╗████╗██╔╝  ╚█████╗░░░░╚█████╗░░░░
    ██╔══╝░░██╔══██║░╚═══██╗░░░██║░░░░╚████╔╝░██║██╔══╝░░░░████╔═████║░  ░╚═══██╗░░░░╚═══██╗░░░
    ███████╗██║░░██║██████╔╝░░░██║░░░░░╚██╔╝░░██║███████╗░░╚██╔╝░╚██╔╝░  ██████╔╝██╗██████╔╝██╗
    ╚══════╝╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░░░░╚═╝░░░╚═╝╚══════╝░░░╚═╝░░░╚═╝░░  ╚═════╝░╚═╝╚═════╝░╚═╝
    `)
}

// A function that accepts two parameters and returns no values
function printAdditionEquation(a, b) {
    let sum = a + b
    console.log(`${a} + ${b} = ${sum}`)
}

// A function that accepts one parameter and returns a value
function getCircleArea(radius) {
    let area = Math.PI * radius**2 // the ** is the exponent operator
    let roundedArea = Math.round(area) // we will round the result
    return roundedArea
}

// A function that calls other functions.
// This one returns the total area of three circles that could make
// up a 2D snowman.
function getSnowmanArea(r1, r2, r3) {
    return getCircleArea(r1) + getCircleArea(r2) + getCircleArea(r3)
}

////// EXECUTION STARTS HERE ////////

// This clears the screen
console.clear() 

// Call our functions
printHeading()
printAdditionEquation(3, 7)
printAdditionEquation(14, 5)

// The function calls here will get replaced by what the function returns
console.log(`The area of a circle with radius 5 is ${getCircleArea(5)}.`)

console.log(`If we draw a snowman, and the radii of the balls are 3cm, 4cm and 5cm,
the area of the full snowman will be ${getSnowmanArea(3, 4, 5)} cm squared.`)