let heldValue = null;
let heldOperation = null;
let nextValue = 0;

$(".digits button").click(function() {
  // nextValue = $(this).text();
  // $(".next-value").text(showValue();
  nextValue = nextValue + $(this).text();
  updateDisplay();
  console.log(nextValue);
});

$(".add").click(function() {});

$(".subtract").click(function() {});

$(".multiply").click(function() {});

$(".divide").click(function() {});

$(".equals").click(function() {});

$(".clear-all").click(function() {
  heldValue = null;
  heldOperation = null;
  nextValue = null;
  updateDisplay();
});

$(".clear-entry").click(function() {
  nextValue = null;
  updateDisplay();
});

function showValue(location, value) {
  console.log(location, value);
  if (value == null) {
    $(location).text("");
  } else {
    $(location).text(Number(value));
  }
}

function updateDisplay() {
  showValue(".held-value", heldValue);
  showValue(".next-value", nextValue);
}

// Once you've written that, we can write the click functions for .clear-all and .clear-entry to:

// call the appropriate function from the previous step
// call updateDisplay as the final thing

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function setHeldOperation(operation) {
  if (heldOperation !== null) {
    heldValue = heldOperation(heldValue, nextValue);
  } else if (nextValue !== null && heldOperation === null) {
    heldValue = nextValue;
  }

  nextValue = null;
  heldOperation = operation;
}
