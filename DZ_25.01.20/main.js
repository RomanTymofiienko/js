"use strict";

// DZ_1

let element = document.getElementById("elem");

// element.classList.add("www");

// DZ_2

// element.classList.remove("zzz");

// DZ_3

// let classCheck = element.classList.contains("zzz");

// document.write(classCheck);

// DZ_4

// element.classList.toggle('www');

// DZ_5

// element.classList.length;

// DZ_6

// let classNames = element.classList;

// for (let i = 0; i < classNames.length; i++) {
//     alert(classNames[i]);

// }

// DZ_7

// element.style.cssText = 'color: red; font-size: 30px; ';

// DZ_8

// element.onclick = function () {
//     document.write(element.tagName)
// }



// DZ_9

// document.write(element.tagName.toLocaleLowerCase());

// DZ_10

// let elem = document.getElementById('list');

// let value = document.createElement('li')
// value.innerHTML = 'пункт';

// elem.appendChild(value)

// DZ_11

// let arr = [1,15,2,4,6];

// let parent = document.getElementById('parent');

// for(let i = 0 ; i < arr.length; i++){
//     let li = document.createElement('li');
//     li.innerHTML = arr[i];
//     parent.appendChild(li);
// }

// DZ_12

// let arr = [1,15,2,4,6];

// let parent = document.getElementById('parent');

// for(let i = 0 ; i < arr.length; i++){
//     let value = document.createElement('li');
//     value.innerHTML = arr[i];
//     value.addEventListener('click', click)
//     parent.appendChild(value);
// }

// function click() {
//     alert(this.innerHTML)
// }

// DZ_13
let parent = document.getElementById('parent')
let value = document.getElementById('li');

let li =  document.createElement('li');

li.innerHTML = '!!!';
parent.appendChild(li);
parent.insertBefore(li, value)

