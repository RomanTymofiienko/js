"use strict";

// DZ_1

// let num  =[2,3,4,64,23];

// function copyArr(arr){
//     return arr.slice(0)
// }

// let arr1 = copyArr(num)
// console.log(arr1)

// DZ_2

// let num = [2,3,4,64,23];

// let str1 = num.toString();
// let str2 = num.join();

// console.log (str1, str2);

// DZ_3
// let arr = [];
// for (let i = 0; i < 10; i++) {
// 	arr[i] = 'x';
// }
// console.log(arr);

// DZ_4

// let arr = [];

// for (let i = 1; i <= 10; i++) {
//     arr.push(i);
// };

// console.log(arr);

// DZ_5
// let arr = [];
// for (let i = 0; i < 10; i++) {
// 	arr.push(Math.random().toFixed(2));
// }
// console.log(arr);

// DZ_6

// let arr = [];

// for (let i = 1; i <= 10; i++) {
//     arr.push(i)
// };

// console.log(arr);

// DZ_7

// let arr = [2,4,-5,-7,13,14];

// for (let i = 0; i < 10; i++) {
//   if(arr[i]>0 && arr[i] < 10){
//   }
// };

// console.log(arr[i])


// DZ_8

//  let arr = [8,4,6,5,18,2,5];

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === 5){
//         alert('Есть');
//         break;
//     }
// };

// console.log(arr)

// DZ_9

// let arr = [3,54,5,2]
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
    
// }

// console.log(sum)

// DZ_10

// let arr = [3,54,5,2]
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i] * arr[i];
    
// }

// console.log(sum)

// DZ_11

// let arr = [3,54,5,2]
// let sum = 0;
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     result = sum / arr.length;
// }

// console.log(result)

// DZ_12

// let num = prompt();

// function colonOdd(num){
//     for (let i = 0; i < 10; i++) {
//         let str = num.toString();
//         let result = [str[0]];
//         for(let i=1; i < str.length; i++) {
//             if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)) {
//               result.push(':', str[i]);
//              }
//             else {
//               result.push(str[i]);
//             }
//         }
//         return result.join('');  
//       }
//     }
// console.log(colonOdd(num))

// DZ_13

// let arr = [5,5,6,54,7,7]

// function removeDuplicates(arr) {
//     let obj = {};
//     let out = [];

//     for (let i = 0; i < arr.length; i++) {
//       let str = arr[i];
//       obj[str] = true; 
//     }
//        for (i in obj) {
//          out.push(i);
//        }
//        return out;
//   }

//   let result = removeDuplicates(arr);
//   console.log(result);

// DZ_14

// let n = prompt();

// let arr = [4,5,56,5,48,8];

// console.log(arr.slice(n))

// DZ_15
// let arr = [5,5,8,9,7,12];
// let arr1 = [4,6,2,5,14,9];
// let arr2 = [];

// if(arr.length>arr1.length){
//     var count = arr.length;
// }else{
//     var count = arr1.length;
// }

// for (let i = 0; i < count; i++) {
//      arr2.push(arr[i] + arr1[i]);
    
// };

// console.log(arr2);

//DZ_16

// let num = [4,5,6,67,4,5,5,5];

// function unique(arr) {
//     let result = [];
  
//     for (let str of arr) {
//       if (!result.includes(str)) {
//         result.push(str);
//       }
//     }
  
//     return result;
//   }

//   console.log(unique(num))

// DZ_17

// let a1 = [4,6,5,7,1];
// let a2 = [4,2,9,5,1];

// function symmetricDifference(a1, a2) {
//     var result = [];
//     for (var i = 0; i < a1.length; i++) {
//       if (a2.indexOf(a1[i]) === -1) {
//         result.push(a1[i]);
//       }
//     }
//     for (i = 0; i < a2.length; i++) {
//       if (a1.indexOf(a2[i]) === -1) {
//         result.push(a2[i]);
//       }
//     }
//     return result;
//   }

//   console.log(symmetricDifference(a1,a2))

// DZ_18

// let num = [4,5,-4,8,1];
// let arr;

// function compareNumbers(arr){
//     arr = arr.sort(function(a,b){return a-b})
//     console.log(arr)
//   }


// compareNumbers(num);

// DZ_19

// let arr = [1,5,4,6,7];

// function sumOfSquares(arr) {
//     return arr.reduce(function (prev, cur) {
//       return prev + cur * cur;
//       })
//   }

//   console.log(sumOfSquares(arr))

// DZ_20

// let arr = [46,5,'',false,NaN,77];

// function filterFalse(arr){
//     return arr.filter(function(v){return !!v;})
    
// };

// console.log(filterFalse(arr))

// DZ_21

// let arr = [4,5,-4,8,1];

// function moveElement(arr,from,to) {
//     arr.splice(to,0,arr.splice(from,1)[0]);
//     return arr;
//   };

//   console.log(moveElement(arr,1,4))

// DZ_22



function generateNumbers(start, len){
    
    for (let i = start; i <= len.length; i++) {
     var result =+ i;
        
    }
    return result;

}

console.log(generateNumbers(1,10));
