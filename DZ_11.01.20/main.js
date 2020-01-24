"use strict";

// DZ

// let week = prompt();

// switch (week) {
//     case '1':
//     console.log("Понедельник");
//     break;
//     case '2':
//     console.log("Вторник");
//     break;
//     case '3':
//     console.log("Среда");
//     break;
//     case '4':
//     console.log("Четверг");
//     break;
//     case '5':
//     console.log("Пятница");
//     break;
//     case '6':
//     console.log("Субота");
//     break;
//     case '7':
//     console.log("Воскресение");
//     break;
// };

// DZ_1

// let moscowTax =4.15;
// let rostovTax = 1.98;
// let krasnodarTax=2.69;
// let kirovTax = 5;

// let code = prompt('Код города?');
// let minutes = prompt('Количество минут');


// switch (code) {
//     case '905':
//     console.log(moscowTax*minutes);
//     break;
//     case '194':
//     console.log(rostovTax*minutes);
//     break;
//     case '491':
//     console.log(krasnodarTa*minutes);
//     break;
//     case '800':
//     console.log(kirovTax*minutes);
//     break;
// };

// DZ_2

// let min = prompt('Число от 0 до 59');

// if (min >= 0 && min <= 14) {
// 	alert('В первую четверть.');
// }
// else if (min >= 15 && min <= 30) {
// 	alert('Во вторую четверть.');
// }
// else if (min >= 31 && min <= 45) {
// 	alert('В третью четверть.');
// }
// else if (min >= 46 && min <= 59) {
// 	alert('В четвертую четверть.');
// };

// DZ_3

// let num = prompt('Число от 1 до 4');
// let result = ' ';

// switch (num) {
//       case 1:
//         result = 'зима';
//         break;
//       case 2:
//         result = 'весна';
//         break;
//       case 3:
//         result = 'лето';
//         break;
//       case 4:
//         result = 'осень';
//         break; 
//     };
//     alert(result);

    // DZ_4

    // площадь прямоугольника
// let height = 28;
// let width = 10;
// let s = height*width;
// alert(s);

// // объем цилиндра 

// let heightC = 10;
// let dC = 4;
// let radius = dC/2;
// let v = heightC*3.1415*(radius*radius);
// alert(v);

// let n = 3;
// let m = 4;
// let k = Math.sqrt(Math.pow(n,2)+Math.pow(m,2));
// alert(k);

// DZ_5

// let a = 45;

// while(a < 67 ) {
//     a = a+1;
//     console.log(a);
// };

// while(a <= 670 ){
//     if(a % 10 === 0){
//     console.log(a);
// }
// };

// for (let i = 45; i <= 67; i++) {
//     console.log(i);
// };

// for (let a = 45; a <= 670; a++) {
//     if (a % 10 === 0) {
//         console.log(a);
//     }
// };

// DZ_6

// let num = prompt();
// let sum = 0;
// let result;

// for (let i = 0; i < num; i++) {

//     result = num % 10;
//     if(result%2 === 0){
//         sum += result
//     }
//     num = parseInt(num / 10);
// }
// alert(sum);

// DZ_7

// let num1 = prompt();
// let oper = prompt();
// let num2 = prompt();
// let result = 0;

// switch(oper){
//     case '+':
//         result = +num1 + +num2;
//         break;
//     case '-':
//         result = num1 - num2;
//         break;
//     case '*':
//         result = num1 * num2;
//         break;
//     case '/':
//         result = num1 / num2;
//         break;
//     default:
//         result = 'Ошибка!';
// };

// alert(result);


// DZ_8

// let num = 255;
// let sum = 0;
// let result;

// for (let i = 0; i <= num; i++) {
//     result = num % 10;
//     if(result % 2 != 0){
//         sum += result;
//     }
//     num = parseInt(num / 10);
// }

// console.log(sum);

// DZ_9

// let table = ' ';

// for (let i = 1; i <= 9; i++) {

// table = table +3 +' * '+i+' = '+3*i + '<br>';
   
// };
// document.write(table);

// DZ_10

// let number = prompt();
// let sum = '';
// for (let i = 1; i <= number; i++) {
//    sum =+ sum  + i;
    
//    console.log(sum);
// }

// DZ_11


// let exit = Boolean(false);
// for (let i = 1; i <= 3; i++) {
//     if(exit == Boolean(true))
//     break;
//     let str = prompt();
//     switch (str){
//         case ('Троллейбус'):
//             alert('Правельно');
//             exit = Boolean(true);
//             break;
//         case ('Сдаюсь'):
//             alert('Правильный ответ: троллейбус.');
//             exit = Boolean(true);
//             break;
//         default:
//             alert('Подумай еще.');
//     }
// };
// DZ_12

// let numberFirst = prompt();
// let numberLast = prompt();
// let sum = ' ';


//         for (var i = numberFirst; i < numberLast; i++)
//         {
//             if (i % 2 === 1) sum =+ sum + i;
//         }
//         console.log(sum);

// DZ_13

// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1;
//   }
  
//   alert( factorial(5) );

//   DZ_14

// function power(base, exp){
//     var result = 1;
//     for(var i = 0; i <exp; i++)
//     {
//         result = result * base;
//     }
//     return(result);
// }
// console.log(power(2,10));