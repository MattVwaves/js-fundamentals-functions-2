// 1. Create a function named bakingTime that returns 50


function bakingTime(){
    return 50
}

//console.log( bakingTime() )

// 2. Create a function named remainingBakeTime that accepts one parameter:
// - the number of minutes your cake has been in the oven.
//
// It must return how many minutes your cake has left based on your parameter
// and the result of the bakingTime function

function remainingBakeTime(min){
    return bakingTime() - min
}

//console.log( remainingBakeTime(43))

// 3. Create a function named calculatePreparationTime that accepts one parameter:
// - the number of layers your cake has
//
// It must return how many minutes it will take to prepare your cake, based on
// each layer taking 3 minutes to prepare

function calculatePreparationTime(layers){
    return layers * 3
}

//console.log( calculatePreparationTime(2))

// 4. Create a function named totalTimeSpent that accepts two parameters:
// - the number of layers your cake has
// - the number of minutes the cake has already been baking in the oven
// It must return how many minutes in total you have spent making the cake,
// which is the sum of the preparation time and the number of minutes it's been in the oven.
// Use your calculatePreparationTime function in the calculation.

function totalTimeSpent(layers, mins){
    return calculatePreparationTime(layers) + mins 
}

console.log( totalTimeSpent(3, 5))

// Don't change the code below this line
module.exports = {
    bakingTime,
    remainingBakeTime,
    calculatePreparationTime,
    totalTimeSpent
}
