'use strict'
console.clear()

// Create an object with several properties
let ess = {
    fullName: "Eastview Secondary School", // string property
    address: "421 Grove Street, Barrie, ON",
    population: 1300, // number property
    offersComputerScience: true // Boolean property
}

// Output the full object
console.log("===== The original object =====")
console.log(ess)

// Output a single property
console.log("===== Just the full name =====")
console.log(ess.fullName)

// Change a property
ess.population = 1350

// Add a property
ess.principal = "Mr. Maxwell"

// Delete a property
delete ess.address

// Output the modified full object
console.log("===== The modified object ===== ")
console.log(ess)

// Create another object, this time from the built-in URL class
let myUrl = new URL("https://www.google.com/search?q=eastview")

// Output the full object that was created based on the previous line of code
console.log("===== The myUrl object =====")
console.log(myUrl)