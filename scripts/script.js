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

let clearPressed = false;

const clear = document.querySelector('button#clear');
document.addEventListener('mousemove', () => {
  if (clearPressed == false) {
    const r = Math.floor(Math.random() * 257);
    const g = Math.floor(Math.random() * 257);
    const b = Math.floor(Math.random() * 257);
    clear.setAttribute(
      'style',
      `border: 2px solid
        rgb(${r}, ${g}, ${b}); transition-duration: 0.1s
        `,
    );
  }
});

clear.addEventListener('click', () => {
  clearPressed = true;
  clear.removeAttribute('style');
  screen.textContent = '';
  operandOne = undefined;
  operandTwo = undefined;
  operatorPressed = false;
  dotPressed = false;
  clear.textContent = 'CE';
});

let dotPressed = false;

const pad = document.querySelector('.pad');
pad.addEventListener('click', (event) => {
  const target = event.target;
  if (clearPressed == true) {
    switch (target.id) {
      case 'dot':
        if (dotPressed == false) {
          dotPressed = true;
          screen.textContent += '.';
          operandOne = findOperandOne('.');
          operandTwo = findOperandTwo('.');
          if (
            operandOne &&
            operatorPressed == true &&
            Boolean(String(operandTwo))
          ) {
            screen.textContent = '';
            screen.textContent += operandTwo;
          }
        }
        break;
      case 'zero':
        screen.textContent += 0;
        operandOne = findOperandOne(0);
        operandTwo = findOperandTwo(0);
        if (
          operandOne &&
          operatorPressed == true &&
          Boolean(String(operandTwo))
        ) {
          screen.textContent = '';
          screen.textContent += operandTwo;
        }
        console.log(operandOne, operandTwo);
        break;
      case 'one':
        screen.textContent += 1;
        operandOne = findOperandOne(1);
        operandTwo = findOperandTwo(1);
        if (operandOne && operatorPressed == true && operandTwo) {
          screen.textContent = '';
          screen.textContent += operandTwo;
        }
        console.log(operandOne, operandTwo);
        break;
      case 'two':
        screen.textContent += 2;
        operandOne = findOperandOne(2);
        operandTwo = findOperandTwo(2);
        if (operandOne && operatorPressed == true) {
          screen.textContent = '';
          screen.textContent += operandTwo;
        }
        console.log(operandOne, operandTwo);
        break;
      case 'three':
        screen.textContent += 3;
        operandOne = findOperandOne(3);
        operandTwo = findOperandTwo(3);
        if (operandOne && operatorPressed == true) {
          screen.textContent = '';
          screen.textContent += operandTwo;
        }
        console.log(operandOne, operandTwo);
        break;
      case 'four':
        screen.textContent += 4;
        operandOne = findOperandOne(4);
        operandTwo = findOperandTwo(4);
        if (operandOne && operatorPressed == true) {
          screen.textContent = '';
          screen.textContent += operandTwo;
        }
        console.log(operandOne, operandTwo);
        break;
      case 'five':
        screen.textContent += 5;
        operandOne = findOperandOne(5);
        operandTwo = findOperandTwo(5);
        if (operandOne && operatorPressed == true) {
          screen.textContent = '';
          screen.textContent += operandTwo;
        }
        console.log(operandOne, operandTwo);
        break;
      case 'six':
        screen.textContent += 6;
        operandOne = findOperandOne(6);
        operandTwo = findOperandTwo(6);
        if (operandOne && operatorPressed == true) {
          screen.textContent = '';
          screen.textContent += operandTwo;
        }
        console.log(operandOne, operandTwo);
        break;
      case 'seven':
        screen.textContent += 7;
        operandOne = findOperandOne(7);
        operandTwo = findOperandTwo(7);
        if (operandOne && operatorPressed == true) {
          screen.textContent = '';
          screen.textContent += operandTwo;
        }
        console.log(operandOne, operandTwo);
        break;
      case 'eight':
        screen.textContent += 8;
        operandOne = findOperandOne(8);
        operandTwo = findOperandTwo(8);
        if (operandOne && operatorPressed == true) {
          screen.textContent = '';
          screen.textContent += operandTwo;
        }
        console.log(operandOne, operandTwo);
        break;
      case 'nine':
        screen.textContent += 9;
        operandOne = findOperandOne(9);
        operandTwo = findOperandTwo(9);
        if (operandOne && operatorPressed == true) {
          screen.textContent = '';
          screen.textContent += operandTwo;
        }
        console.log(operandOne, operandTwo);
        break;
      case 'eq':
        if (operandTwo || operandTwo == 0) {
          result = operate(Number(operandOne), Number(operandTwo), operator);
          operatorPressed = false;
          dotPressed = false;
          screen.textContent =
            result == 'Infinity'
              ? '?really'
              : result < 0
              ? `${Math.abs(result)}-`
              : Number.isInteger(result)
              ? result
              : (Math.round(result * 100) / 100).toFixed(2);
          operandOne = result;
          operandTwo = undefined;
        }
        break;
      case 'add':
        operatorPressed = true;
        dotPressed = false;
        if (operandOne && (operandTwo || operandTwo == 0)) {
          result = operate(Number(operandOne), Number(operandTwo), operator);
          console.log(result);
          screen.textContent =
            result == 'Infinity'
              ? '?really'
              : result < 0
              ? `${Math.abs(result)}-`
              : Number.isInteger(result)
              ? result
              : (Math.round(result * 100) / 100).toFixed(2);
          operandOne = result;
          operandTwo = undefined;
        }
        operator = add;
        break;
      case 'mul':
        operatorPressed = true;
        dotPressed = false;
        if (operandOne && (operandTwo || operandTwo == 0)) {
          result = operate(Number(operandOne), Number(operandTwo), operator);
          screen.textContent =
            result == 'Infinity'
              ? '?really'
              : result < 0
              ? `${Math.abs(result)}-`
              : Number.isInteger(result)
              ? result
              : (Math.round(result * 100) / 100).toFixed(2);
          operandOne = result;
          operandTwo = undefined;
        }
        operator = mul;
        break;
      case 'div':
        operatorPressed = true;
        dotPressed = false;
        if (operandOne && (operandTwo || operandTwo == 0)) {
          result = operate(Number(operandOne), Number(operandTwo), operator);
          screen.textContent =
            result == 'Infinity'
              ? '?really'
              : result < 0
              ? `${Math.abs(result)}-`
              : Number.isInteger(result)
              ? result
              : (Math.round(result * 100) / 100).toFixed(2);
          operandOne = result;
          operandTwo = undefined;
        }
        operator = div;
        break;
      case 'sub':
        operatorPressed = true;
        dotPressed = false;
        if (operandOne && (operandTwo || operandTwo == 0)) {
          result = operate(Number(operandOne), Number(operandTwo), operator);
          screen.textContent =
            result == 'Infinity'
              ? '?really'
              : result < 0
              ? `${Math.abs(result)}-`
              : Number.isInteger(result)
              ? result
              : (Math.round(result * 100) / 100).toFixed(2);
          operandOne = result;
          operandTwo = undefined;
        }
        operator = sub;
        break;
    }
  }
});
