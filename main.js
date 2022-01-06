//how functions do math
const quarterValue = (startingNumber) => {
    const quartered = startingNumber / 4

    return quartered // return is kinda like an equal sign giving the resut of fx
}

// Invoke the function and store the return value
const result = quarterValue(256) //value is provided with the argument ex. 256

// Log the return value
console.log(result)

//If a function returns a value, you must store that value in a variable

//Define a parameter that will hold the value of the original number.
// Divide that number by 4
// Return the quartered number
// Store the returned number in a variable
// Plug that variable into the parenthesis for the console.log()
// When you run the code, you should see the answer in the console.
// Helpful hints

/*
    Define a function with a parameter. This means the
    function needs a value to be provided.
*/

// how functions put gas
const fillGasTank = (gallons) => {
    if (gallons > 15) {
        console.log(`You cannot add this much gas to the tank`)
    }
    else {
        console.log(`I filled the tank with ${gallons} of gas`)
    }
}

console.log(fillGasTank(15))
console.log(fillGasTank(22))

// how functions call your name and

/*
    Define a function with a parameter. This means the
    function needs a value to be provided.
*/
const createFancyName = (name) => {
    return `Her Majesty, ${name}.`
}

const athena = createFancyName("Athena Perez") // Argument value is "Athena Perez"
console.log(athena)
// output: "Her Majesty, Athena Perez."


const charisse = createFancyName("Charisse Ford") // Argument value is "Charisse Ford"
console.log(charisse)
// output: "Her Majesty, Charisse Ford."


const jenna = createFancyName("Jenna Solis") // Argument value is "Jenna Solis"
console.log(jenna)
// output: "Her Majesty, Jenna Solis."

// how functions bake cakes:

const rotateCake = () => {
	// Code to rotate the cake
    console.log
}

const gatherIngredients = () => {
	// Code to gather the ingredients from storage
}

const measureIngredients = () => {
	// Code to measure the ingredients
}

const addFrosting = () => {
	// Code to add frosting to a baked cake
}

const startOven = () => {
	// Code to turn on the oven to a specific temperature
}

const createBatter = () => {
	// Code to create some cake batter
}

const checkIfDone = () => {
	// Code to check if the cake is done
}

const startBaking = () => {
	// Code to put the cake batter into the oven
}

startOven()
gatherIngredients()
measureIngredients()
createBatter()
startBaking()
rotateCake()
checkIfDone()
addFrosting()