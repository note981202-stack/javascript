// function2.js
//반환값.
// let count2Times = (x) => {       //입력받은 값을 2배해서 결과값으로 반환해줌
//   let result = x * 2;
//   return result; // 반환.
// }
// // count2Times = 10;
// let result = count2Times(10);
// console.log(result);
// //----------------------------
//매개값을 x, y 가지는 함수: addNumbers
// x ~ y 사이의 정수를 합한 결과를 반환해주는 함수를 만들어보세요.

// let addNumbers = (x, y) => {
//   let result = 0;
//   for (let x = 1; x <= y; x++);
//   return result;
// }

// let result = addNumbers(1, 10);
// console.log(result);

//------------------------------
const addNumbers = (x, y) => {
  let sum = 0;
  for(let i = x; i <= y; i++){
    sum += i;
  }
  return sum;
}
result = addNumbers(10, 20);
console.log(`addNumbers(10, 20)의 결과: ${result}`);



//매개값을 [10, 20, 30] 가지는 함수: sumArray
//배열의 전체값을 다 더한 결과를 반환하는 함수를 만들어보세요.

// function sumArray(x, y, z) {
//   let result2 = x + y + z;
//  }
// let result2 = sumArray(10, 20, 30);
// console.log(result2);

const sumArray = (array) => {
  let sum =0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
result = sumArray([10, 20, 30]);
console.log(`sumArray([10, 20, 30]) 의 결과: ${result}`);






// //----------------------------

// const name = 'Hong';     //const는 변수를 고정시킴 = let으로 하면 콘솔에 황으로 나오고 const로 하면 콘솔에 홍으로 나옴
// name = 'Hwang';          //상수 변수 값을 재할당 할 수 없음

// console.log (name);