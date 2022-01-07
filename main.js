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

// how functions call your name 

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
   return console.log ( 'rotate the cake')
}

const gatherIngredients = () => {
	// Code to gather the ingredients from storage
    return console.log( 'get ingredients from pantry to prepare for measuring')
}

const measureIngredients = () => {
	// Code to measure the ingredients
    return console.log( 'measure ingredients')
}

const addFrosting = () => {
	// Code to add frosting to a baked cake
    console.log( 'add you favorite frosting to a baked, and cooled cake')
}

const startOven = () => {
	// Code to turn on the oven to a specific temperature
    console.log('preheat your oven to 345')
}

const createBatter = () => {
	// Code to create some cake batter
    console.log('create batter by mixing together all measured ingredients')
}

const checkIfDone = () => {
	// Code to check if the cake is done
    console.log('at 30 minitues take a toothpick and poke the center of the cake to check doneness')
}

const startBaking = () => {
	// Code to put the cake batter into the oven
    console.log('place cake in the oven')
}

startOven()
gatherIngredients()
measureIngredients()
createBatter()
startBaking()
rotateCake()
checkIfDone()
addFrosting()

//Deconstruction Mode
// how functions write leters
const getPaper = () => {
    return console.log('Get a piece of paper')
}
const foldPaper = () => {
    return console.log('Fold it in half')
}

const penPrep = () => {
    return console.log('Clean my fountain pen')
}

const penFill = () => {
    console.log('Fill fountain pen with ink color I want')
}

const write = () => {
    console.log('Write letter')
}
const foldPaper2 = () => {
    console.log('Fold letter to make it into an envelope to be addressed')
}

const meltWax = () => {
    console.log('Melt wax colors I want for the seal')
}

const pourWax = () => {
    console.log('Pour wax onto letter')
}
const sealPress = () => {
    console.log('Press seal into wax')
}

const prepEnvelope = () => {
    console.log('Address the envelope')
}

const sendMail = () => {
    console.log('Mail letter')
}

const stamp = () => {
    console.log('Add stamp to envelope')
}

getPaper()
penPrep()
penFill()
write()
foldPaper()
foldPaper2()
pourWax()
meltWax()
sealPress()
prepEnvelope()
stamp()
sendMail()

//calculator deconstruction of larger tasks

//additional tasks
const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber
    return sum
}

let resulta = add(17, 9)
console.log(resulta)

resulta = add(-13, -7)
console.log(resulta)

resulta = add(4, 58)
console.log(resulta)

// subtractional
const subtract = (firstNumber, secondNumber) => {
    const minus = firstNumber - secondNumber
    return minus
}

let results = subtract(17, 9)
console.log(results)

results = subtract(-13, -7)
console.log(results)

results = subtract(4, 58)
console.log(results)

// multipliciity 
const multiply = (firstNumber, secondNumber) => {
    const times = firstNumber * secondNumber
    return times
}

let resultm = multiply(17, 9)
console.log(resultm)

resultm = multiply(-13, -7)
console.log(resultm)

resultm = multiply(4, 58)
console.log(resultm)

// divisional
const divide = (firstNumber, secondNumber) => {
    const dividedBy = firstNumber / secondNumber
    return dividedBy
}

let resultd = divide(17, 9)
console.log(resultd)

resultd = divide(-13, -7)
console.log(resultd)

resultd = divide(4, 58)
console.log(resultd)

// squared
const square = (firstNumber) => {
    const squared = firstNumber * firstNumber
    return squared
}

let result2 = square(17)
console.log(result2)

result2 = square(-13)
console.log(result2)

result2 = square(4)
console.log(result2)


// deconstruct of a car factory

const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {}

	return newChassisObject
}

//taking 
const addBody = (chassisObject) => {
    // Use dot notation to add a new property
	chassisObject.body = "Fever"
    
	// Return the chassis that now has a body property on it
	return chassisObject
}
const carStart= createChassis()
const carWithBody= addBody(carStart)

const addWheels = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.wheels = "rolling"

	// Return the chassis that now has a body property on it
	return chassisObject
}
const carWithBodyAndWheels = addWheels(carWithBody)

// invoking add body fx and storing return value in CharisseWithBody

const addEngine = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.Engine = "V8"

	// Return the chassis that now has a body property on it
	return chassisObject
}
const externalCar= addEngine(carWithBodyAndWheels)



const addSteeringWheel = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.SteeringWheel = "15in mod."

	// Return the chassis that now has a body property on it
	return chassisObject
}

const externalCarWithSteeringWheel = addSteeringWheel(externalCar)


const addDriveTrain = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.DriveTrain = "Off-road package"

	// Return the chassis that now has a body property on it
	return chassisObject
}

const offRoadPack = addDriveTrain(externalCarWithSteeringWheel)

console.log(offRoadPack)


// Now a candy factory

