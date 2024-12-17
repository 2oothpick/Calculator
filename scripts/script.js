// event delegation

let operandOne = undefined;
let operator = '';
let operatorPressed = false;
let operandTwo = undefined;

const screen = document.querySelector('div.screen > div');

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function operate(a, b, callback) {
  const result = callback(a, b);
  return result;
}

function findOperandOne(val) {
  const result =
    operandOne == undefined
      ? val
      : operatorPressed == false && Boolean(String(operandOne))
      ? (operandOne += String(val))
      : operandOne;
  return result;
}

function findOperandTwo(val) {
  const result =
    operandTwo == undefined && operatorPressed == true
      ? val
      : operatorPressed == false
      ? operandTwo
      : (operandTwo += String(val));
  return result;
}

const pad = document.querySelector('.pad');
pad.addEventListener('click', (event) => {
  const target = event.target;
  switch (target.id) {
    case 'clear':
      screen.textContent = '';
      operandOne = undefined;
      operandTwo = undefined;
      operatorPressed = false;
      break;
    case 'zero':
      screen.textContent += 0;
      operandOne = findOperandOne(0);
      operandTwo = findOperandTwo(0);
      console.log(operandOne, operandTwo);
      break;
    case 'one':
      screen.textContent += 1;
      operandOne = findOperandOne(1);
      operandTwo = findOperandTwo(1);
      console.log(operandOne, operandTwo);
      break;
    case 'two':
      screen.textContent += 2;
      operandOne = findOperandOne(2);
      operandTwo = findOperandTwo(2);
      console.log(operandOne, operandTwo);
      break;
    case 'three':
      screen.textContent += 3;
      operandOne = findOperandOne(3);
      operandTwo = findOperandTwo(3);
      console.log(operandOne, operandTwo);
      break;
    case 'four':
      screen.textContent += 4;
      operandOne = findOperandOne(4);
      operandTwo = findOperandTwo(4);
      console.log(operandOne, operandTwo);
      break;
    case 'five':
      screen.textContent += 5;
      operandOne = findOperandOne(5);
      operandTwo = findOperandTwo(5);
      console.log(operandOne, operandTwo);
      break;
    case 'six':
      screen.textContent += 6;
      operandOne = findOperandOne(6);
      operandTwo = findOperandTwo(6);
      console.log(operandOne, operandTwo);
      break;
    case 'seven':
      screen.textContent += 7;
      operandOne = findOperandOne(7);
      operandTwo = findOperandTwo(7);
      console.log(operandOne, operandTwo);
      break;
    case 'eight':
      screen.textContent += 8;
      operandOne = findOperandOne(8);
      operandTwo = findOperandTwo(8);
      console.log(operandOne, operandTwo);
      break;
    case 'nine':
      screen.textContent += 9;
      operandOne = findOperandOne(9);
      operandTwo = findOperandTwo(9);
      console.log(operandOne, operandTwo);
      break;
    case 'eq':
      console.log(Number(operandOne), Number(operandTwo));
      result = operate(Number(operandOne), Number(operandTwo), operator);
      operatorPressed = false;
      screen.textContent = result;
      operandOne = undefined;
      operandTwo = undefined;
      break;
    case 'add':
      operatorPressed = true;
      operator = add;
      break;
    case 'mul':
      operatorPressed = true;
      operator = mul;
      break;
    case 'div':
      operatorPressed = true;
      operator = div;
      break;
    case 'sub':
      operatorPressed = true;
      operator = sub;
      break;
  }
});
