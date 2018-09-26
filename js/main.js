// No special characters other than _ and $
// Can not start with a number, but can contain a number
// var numOfTasks, num_of_tasks, numoftasks;

// Declare and assign a Number
var numOfTasks = 3;

// Declare and assign a String
var name = "George Brown"

// Declare and assign an Array
var tasks = [ "Feed the Dog", "Finish Todo list", "Pickup the drycleaning" ]

// Declare and assign an Object
var oneTask = { task: "Feed the Dog", name: "George Brown", priority: 2 }


//alert(numOfTasks)
console.log("Tasks to complete: " + numOfTasks)
console.log(`Tasks to complete: ${numOfTasks}`)

console.log("You have " + numOfTasks + " tasks to complete")
console.log(`You have ${numOfTasks} tasks to complete`)

// + - / * %
// += -= /= *= =
numOfTasks = numOfTasks + 1
numOfTasks += 1
numOfTasks++

console.log("Adding one task gives us: " + ++numOfTasks);



//
