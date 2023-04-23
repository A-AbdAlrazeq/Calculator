const display = document.getElementById("display");
let num1 = "";
let num2 = "";
let op = "";
const Calc = document.querySelector("#calculator");
const btn = document.querySelectorAll("button");
const opr = document.querySelectorAll(".operator");
const equl = document.querySelector("#equals");
function ChangeStyle(element) {
  if (element == "style1") {
    Calc.style.backgroundColor = "#191970";
    display.style.color = "white";
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove("HoverClass2", "HoverClass3");
      btn[i].classList.add("HoverClass1");
      btn[i].style.color = "#5F9EA0";
      btn[i].style.backgroundColor = "#FFE4B5";
    }
    for (let i = 0; i < opr.length; i++) {
      opr[i].style.color = "black";
      opr[i].style.backgroundColor = "white";
    }
    equl.style.backgroundColor = "white";
    equl.style.color = "black";
  } else if (element == "style2") {
    Calc.style.backgroundColor = "#A9A9A9";
    display.style.color = "black";
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove("HoverClass1", "HoverClass3");
      btn[i].classList.add("HoverClass2");
      btn[i].style.color = "#5F9EA0";
      btn[i].style.backgroundColor = "#2F4F4F";
    }
    for (let i = 0; i < opr.length; i++) {
      opr[i].style.color = "white";
      opr[i].style.backgroundColor = "green";
    }
    equl.style.backgroundColor = "white";
    equl.style.color = "black";
  } else {
    Calc.style.backgroundColor = "#EEE8AA";
    display.style.color = "white";
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove("HoverClass1", "HoverClass2");
      btn[i].classList.add("HoverClass3");
      btn[i].style.color = "#5F9EA0";
      btn[i].style.backgroundColor = "#FDF5E6";
    }
    for (let i = 0; i < opr.length; i++) {
      opr[i].style.color = "white";
      opr[i].style.backgroundColor = "blue";
    }
    equl.style.backgroundColor = "white";
    equl.style.color = "black";
  }
}
function press(num) {
  num1 += num;
  display.innerHTML = num1;
}

function setOP(key) {
  op = key;
  num2 = num1;
  display.innerHTML = +num2;
  num1 = "";
}

function clr() {
  num1 = "";
  num2 = "";
  op = "";
  display.innerHTML = "0";
}

function calculate() {
  let a = parseFloat(num2);
  let b = parseFloat(num1);
  let res = 0;
  switch (op) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      res = a / b;
      break;
  }
  num1 = res;
  op = "";
  display.innerHTML = res;
}
