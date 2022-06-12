const calculatorScreen = document.querySelector(".calc-screen");
const operators = document.querySelectorAll(".btn-operation");
const numbers = document.querySelectorAll(".btn-number");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");
const percentage = document.querySelector(".percentage");

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const updateScreen = (number) => {
  calculatorScreen.value = number;
}

const inputNumber = (number) => {
  if (currentNumber === '0'){
    currentNumber = number;
  } else {
    currentNumber += number;
  }
}

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = '0';
}

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const calculate = () => {
  let result = '';
  switch(calculationOperator) {
    case '+': 
      result = (parseFloat(prevNumber * 10) + parseFloat(currentNumber * 10)) / 10;
      break;
    case '-':
      result = (parseFloat(prevNumber * 10) - parseFloat(currentNumber * 10)) / 10;
      break;
    case '*':
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = '';
}

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const makePercentage = () => {
  let percent = '';
  percent = parseFloat(currentNumber) / 100;
  currentNumber = percent;
  calculationOperator = '';
}

percentage.addEventListener("click", () => {
  makePercentage();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = '';
  calculationOperator = '';
  currentNumber = '0';
}

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const inputDecimal = (dot) => {
  if(currentNumber.includes('.')) {
    return;
    }
  currentNumber += dot;  
}

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});