document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const display = document.querySelector("#display");
});

function addToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function calculate() {
  const display = document.getElementById("display");
  let result;

  try {
    result = eval(display.value);
    if (result === Infinity || isNaN(result)) {
      display.value = "Erro";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Erro na expressão";
  }
}
function valsto() {
  if (display.value != "") {
    display = document.querySelector("#display");
    localStorage.setItem("num", display.value);
    localStorage.getItem("num");
    display.value = "";
    
  }
  console.log(localStorage);
}
function dec() {
  if (display.value != "") {
    let num1 = localStorage.getItem("num");
    localStorage.setItem("num2", display.value);
    let num2 = localStorage.getItem("num2");
    display.value = num1 - num2;
    localStorage.setItem("num", display.value);
    display.value = "";
  }
}
function exib() {
  display.value = localStorage.getItem("num");
  console.log(localStorage.getItem("num"));
}
function rem() {
  localStorage.removeItem("num");
  localStorage.removeItem("num2")

}
