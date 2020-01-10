// DZ

let number = 25;
let number2 = 40;
let number3 = 35;

const string1 = "Hello";
const string2 = "Bay";
const string3 = "Welcome";

var name1 = "Roman";
var name2 = "Anna";
var name3 = "Dmitriy";

// DZ1

if ((number2 % 2 )) {
  alert(number2)
} else if ((number % 2)) {
  alert(number)
} else {
 alert("Четные числа")
};

// DZ2

let year = prompt();

if (year % 4  && year % 400){
  alert("366 days")
}else {
  alert("365 days")
};

// DZ3

let x = prompt();
let y = prompt();
let z = prompt();

if ((x > y && y > z) || (z > y && y> x)) {
  alert(y)
} else if ((y > x && x > z) || (z > x && x >y)) {
  alert(x)
} else if ((x > z && z > y) || (y  > z && z > x)){
  alert(z)
} else {
  alert("Похожие номера")
};

// // DZ4

if ((x > y && x > z)) {
  alert(x)
} else if ((y > x && y > z)) {
  alert(y)
} else if ((z > x && z > y)) {
  alert(z)
} else {
  alert("Похожие номера")
};

// // DZ5

// // if ((x > y && x > z)) {
// /*  alert(x)
// } else if ((y > x && y > z)) {
//   alert(y)
// } else if ((z > x && z > y)) {
//   alert(z)
// } else {
//   alert("Похожие номера")
// };*/