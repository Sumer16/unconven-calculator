/* 
The Unconventional Calculator helped me gain a lot of practice.
*/

const defaultResult = 0; // Default Value
let currentResult = defaultResult;
const logData = [];

// Log Entries visible on Console
function logEntries(operand, prevResult, usersData, currNumber){
  const logEntry = {
    operation: operand,
    previousResult: prevResult,
    usersNumber: usersData,
    currentNumber: currNumber
  };
  logData.push(logEntry);
  console.log(logData);
}

// Convert string to number
function userInputChange(){
  return parseInt(userInput.value);
}

// Dislay results on the Calculator
function readAndCalNumbers(sign, initalResult, enteredNumber){
  const calcDescription = `${initalResult} ${sign} ${enteredNumber}`;
  outputResult(currentResult, calcDescription);
}

// Main logic for the calculation operations
function calculateResults(calculateOp){
  let mathOperator;
  const userNumber = userInputChange();
  const initialNumber = currentResult;

  if(userNumber){
    if (calculateOp === 'ADD'){
      currentResult += userNumber;
      mathOperator = '+';
    } else if(calculateOp === 'SUBTRACT'){
      currentResult -= userNumber;
      mathOperator = '-';
    } else if(calculateOp === 'MULTIPLY'){
      currentResult *= userNumber;
      mathOperator = '*';
    } else if(calculateOp === 'DIVIDE'){
      currentResult /= userNumber;
      mathOperator = '/';
    }

    readAndCalNumbers(mathOperator, initialNumber, userNumber);
    logEntries(calculateOp, initialNumber, userNumber, currentResult);
  } else return;
}

// Add
function addNumbers(){
  calculateResults('ADD');
}

// Subtract
function subNumbers(){
  calculateResults('SUBTRACT');
}

// Multiply
function multiNumbers(){
  calculateResults('MULTIPLY');
}

// Divide
function divideNumbers(){
  calculateResults('DIVIDE');
}

// Event Listeners for the buttons
addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subNumbers);
multiplyBtn.addEventListener('click', multiNumbers);
divideBtn.addEventListener('click', divideNumbers);