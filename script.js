let currentNumber = "";
let previousNumber = "";
let operation = "";

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("result").value = currentNumber;
}

function appendOperation(op) {
  operation = op;
  previousNumber = currentNumber;
  currentNumber = "";
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operation = "";
  document.getElementById("result").value = "";
}

function calculate() {
  let num1 = parseFloat(previousNumber);
  let num2 = parseFloat(currentNumber);

  if (operation === "+") {
    let result = num1 + num2;
    currentNumber = result.toString();
    document.getElementById("result").value = currentNumber;
  } else if (operation === "-") {
    let result = num1 - num2;
    currentNumber = result.toString();
    document.getElementById("result").value = currentNumber;
  } else if (operation === "*") {
    let result = num1 * num2;
    currentNumber = result.toString();
    document.getElementById("result").value = currentNumber;
  } else if (operation === "/") {
    if (num2 === 0) {
      alert("Division by zero is not allowed!");
      return;
    }
    let result = num1 / num2;
    currentNumber = result.toString();
    document.getElementById("result").value = currentNumber;
  }
}
