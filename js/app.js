// getting html element
const realTime = document.getElementById("realTime");
const input = document.getElementById("input");
const result = document.getElementById("result");

// inject real time.
const realTimeDisplay = () => {
  const today = new Date();
  const time = today.toLocaleTimeString();
  realTime.innerText = time;
};

setInterval(() => {
  realTimeDisplay();
}, 1000);

// dispaly button element.
const displayValue = (value) => {
  input.value += value;
};

// print the result.
const resultDisplay = () => {
  const evalResult = eval(input.value);
  result.innerText = evalResult;
};

// making balank the input field.
const blank = () => {
  input.value = "";
  result.innerText = 0;
};

// delete last value;
const deleteLast = () => {
  const valueOfInput = input.value;
  const deletedValue = valueOfInput.substring(0, valueOfInput.length - 1);
  input.value = deletedValue;
};
