const display = document.getElementById("display");

function AppendToDisplay(input) {
  display.value += input;
}

function ClearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = err;
  }
}
function deleteLast() {
  let del = display.value;

  if (del.length > 0) {
    display.value = del.slice(0, -1);
  }
}
