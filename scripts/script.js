// event delegation

let operandOne = undefined;
let operator = '';
let operatorPressed = false;
let operandTwo = undefined;
let clearPressed = false;
let dotPressed = false;

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

function clearScreen() {
  clearPressed = true;
  clear.removeAttribute('style');
  screen.textContent = '0';
  operandOne = undefined;
  operandTwo = undefined;
  operatorPressed = false;
  dotPressed = false;
  clear.textContent = 'CE';
}

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
  clearScreen();
});

function displayResult() {
  if ((operandOne == 0 || operandOne) && (operandTwo || operandTwo == 0)) {
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
}

function displayNum(num) {
  operandOne = findOperandOne(num);
  operandTwo = findOperandTwo(num);
  if (screen.textContent == '0') screen.textContent = '';
  screen.textContent += num;
  if (operandOne && operatorPressed == true && operandTwo) {
    screen.textContent = '';
    screen.textContent += operandTwo;
  }
}

const pad = document.querySelector('.pad');
pad.addEventListener('click', (event) => {
  const target = event.target;
  if (clearPressed == true) {
    switch (target.id) {
      //fix dot functionality
      /* case 'dot':
        if (dotPressed == false) {
          dotPressed = true;
          operandOne = findOperandOne('.');
          operandTwo = findOperandTwo('.');
          //console.log(operandOne, operandTwo);
          //console.log(operandOne.split('').reverse().join(''))
          if (operandOne) {
            screen.textContent = operandOne.split('').reverse().join('');
          } else if (
            operandOne &&
            operatorPressed == true &&
            Boolean(String(operandTwo))
          ) {
            screen.textContent = operandTwo.split('').reverse().join('');
          }
        }
        break; */
      case 'zero':
        /* if (dotPressed == true) {
          screen.textContent = screen.textContent.split('').reverse().join('');
          console.log('zero');
        } */
        console.log(`textcontent: ${screen.textContent}`);
        if (screen.textContent == '0') screen.textContent = '';
        screen.textContent += 0;
        //console.log(screen.textContent);
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
        displayNum(1);
        console.log(operandOne, operandTwo);
        break;
      case 'two':
        displayNum(2);
        console.log(operandOne, operandTwo);
        break;
      case 'three':
        displayNum(3);
        console.log(operandOne, operandTwo);
        break;
      case 'four':
        displayNum(4);
        console.log(operandOne, operandTwo);
        break;
      case 'five':
        displayNum(5);
        console.log(operandOne, operandTwo);
        break;
      case 'six':
        displayNum(6);
        console.log(operandOne, operandTwo);
        break;
      case 'seven':
        displayNum(7);
        console.log(operandOne, operandTwo);
        break;
      case 'eight':
        displayNum(8);
        console.log(operandOne, operandTwo);
        break;
      case 'nine':
        displayNum(9);
        console.log(operandOne, operandTwo);
        break;
      case 'eq':
        displayResult();
        break;
      case 'add':
        operatorPressed = true;
        dotPressed = false;
        displayResult();
        operator = add;
        break;
      case 'mul':
        operatorPressed = true;
        dotPressed = false;
        displayResult();
        operator = mul;
        break;
      case 'div':
        operatorPressed = true;
        dotPressed = false;
        displayResult();
        operator = div;
        break;
      case 'sub':
        operatorPressed = true;
        dotPressed = false;
        displayResult();
        operator = sub;
        break;
    }
  }
});
