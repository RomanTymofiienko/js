"use strict";

let button = document.getElementById("button");
let conclusion = document.getElementById("conclusion");

button.onclick = function() {
  ajaxGet("https://jsonplaceholder.typicode.com/users");
};

function ajaxGet(url) {
  let request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status == 200) {
      request = request.responseText;
      let result = JSON.parse(request);
      for (let i = 0; i < 3; i++) {
        conclusion.innerHTML += result[i].name + "<br>";
        console.log(result[i].name);
      }
    }
  };

  request.open("GET", url);
  request.send();
}

class Validate {
  constructor(value) {
    this.value = value;
  }
  checkMaxMin() {
    if (this.value.length < 5 || this.value.length > 25) {
      return false;
    } else {
      return true;
    }
  }
  checkNumbers() {
    if (this.value.search(/\d/) != -1) {
      return false;
    } else {
      return true;
    }
  }
  checkSymbols() {
    if (this.value.search(/\W/) != -1) {
      return false;
    } else {
      return true;
    }
  }
  isEmpty() {
    if (this.value === "") {
      return false;
    } else {
      return true;
    }
  }
}

let submit = document.getElementById("submit");

submit.addEventListener("click", function() {
  let text = document.getElementById("text").value;
  let validate = new Validate(text);
      
    switch (false) {
      case validate.checkNumbers():
        document.getElementById("box").innerHTML = "Введите без цифр";
        break;
      case validate.checkSymbols():
        document.getElementById("box").innerHTML = "Введите без спецсимволов";
        break;
      case validate.isEmpty():
        document.getElementById("box").innerHTML = "Заполнитя строку";
        break;
      case validate.checkMaxMin():
        document.getElementById("box").innerHTML =
          "Не верное количесво символов";
        break;
      default:
        document.getElementById("box").innerHTML = "Все правильно";
        return true;
    }
});
