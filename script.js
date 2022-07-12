let input = document.getElementById('input'),

  number = document.querySelectorAll('.numbers div'),

  operator = document.querySelectorAll('.operators div'),

  result = document.getElementById('result'),
  clear = document.getElementById('clear'),
  resultDisplayed = false;


    for (let i = 0; i < number.length; i++) {
      number[i].addEventListener("click", function(e) {
        let currentInput = input.innerHTML;
        let lastInput = currentInput[currentInput.length - 1]; 


        if (resultDisplayed === false) {
          input.innerHTML += e.target.innerHTML;
        }
        else if(resultDisplayed === true && lastInput === "+"
|| lastInput === "-" || lastInput === "x" || lastInput === "÷"){
          resultDisplayed = false;
          input.innerHTML += e.target.innerHTML;
} else {
          resultDisplayed = false;
          input.innerHTML = "";
          input.innerHTML += e.target.innerHTML;
}
      });
    }

    for ( let i = 0; i < operator.length; i++) {
        operator[i].addEventListener("click", function(e) {


            let currentInput = input.innerHTML;
            let lastInput = currentInput[currentInput.length - 1];

            if (lastInput === "+" || lastInput === "-" || lastInput === "x" ||lastInput === "÷"){
                let newString = currentInput.substring(0, currentInput.lenght - 1) + e.target.innerHTML;
                input.innerHTML = newString;
            } else if(currentInput.length == 0) {
                console.log ("enter a number first");
            } else{
                input.innerHTML += e.target.innerHTML;
            }
        });
    }
    

    result.addEventListener("click", function() {


      
let inputString = input.innerHTML;

// creating an array of numbers for the above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]


      
let numbers = inputString.split(/\+|\-|\x|\÷|\%|\&#8730/g);

// creating array of operators. for the string above will be: operators = ["+", "+", "-", "*", "/"]

      
// replacing the numbers and dot with empty string and then split
let operators = inputString.replace(/[0-9]|\./g, "").split("");

console.log(inputString);
console.log(operators);
console.log(numbers);
console.log("----------------------------");

// now we are looping through the array and doing one operation at a time.
// divide first, then multiply, then subtraction and then addition

// the final element remaining in the array will be the output

      // divide both string 
let divide = operators.indexOf("÷");
if (divide != -1) {
  numbers.splice(divide, 2, parseFloat(numbers[divide]) / parseFloat(numbers[divide + 1]));
  operators.splice(divide, 1);
  divide = operators.indexOf("÷");
}
 // multiply all input
let multiply = operators.indexOf("x");
if (multiply != -1) {
  numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
  operators.splice(multiply, 1);
  multiply = operators.indexOf("x");
}
// percentage 

let percentage = operators.indexOf("%");
if (percentage != -1) {
  numbers.splice(percentage, 2, numbers[percentage] * 0.01 );
  operators.splice(percentage, 1);
  percentage = operators.indexOf("%");
  console.log(percentage)
}

 // SQUARE ROOT
      let squareRoot = operators.indexOf("&#8730");
if (squareRoot != -1) {
  numbers.splice(squareRoot, 2, Math.sqrt(numbers[squareRoot]) );
  operators.splice(squareRoot, 1);
  squareRoot = operators.indexOf("&#8730");
  console.log(squareRoot)
}
      

      
      
 // subtract all input
let subtract = operators.indexOf("-");
if (subtract != -1) {
  numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
  operators.splice(subtract, 1);
  subtract = operators.indexOf("-");
}
 // add all input and use parseFloat
let add = operators.indexOf("+");
if (add != -1) {
  
  numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
  operators.splice(add, 1);
  add = operators.indexOf("+");
}
      
// show the output
input.innerHTML = numbers[0]; 
      
// return true if result is displayed
resultDisplayed = true; 
});

// clear the input on clicking clear
clear.addEventListener("click", function() {
input.innerHTML = "";
})