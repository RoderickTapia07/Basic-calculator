


let num1 = 8
let num2 = 2
let sumEl= document.getElementById("sum-el")
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

//Esta es la forma en la que lo hizo el profe, la mía está abajo.
function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}


//Esta fue la forma en la que yo lo hice, y aunque funciona, tiene el problema que si se realizan varias 
//opelaciones sin refrescar la página, se van apilando los resultados uno al lado del otro

// function add() {
//     let addResult = num1 + num2
//     sumEl.textContent += addResult
// }

// function subtract() {
//     let subtractResult = num1 - num2
//     sumEl.textContent += subtractResult 
// }

// function divide() {
//     let divisionResult = num1 / num2
//     sumEl.textContent += divisionResult
// }

// function multiply() {
//     let multiplyResult = num1 * num2
//     sumEl.textContent += multiplyResult
// }