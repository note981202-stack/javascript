//function.js
//함수표현식 정의.

//--------------------------------------- 1번방법
// function sum(x, y) {
//   let result = x + y;
//   console.log(`${x}, ${y}의 합은 ${result}`);
// }

//---------------------------------------2번방법
let sum = (x, y) => {      // 화살표 함수 = 매개변수를 받아서 중괄호를 실행하겠다는 의미
  let result = x + y;
  // console.log(`${x}, ${y}의 합은 ${result}`);           // 함수 정의 구문
  return result;  // 함수 계산한 후 반환 = 종료
}
//----------------------------------------

// console.log(sum); //괄호가 있으면 함수라고 생각하면됨
let result = sum(10, 20);
console.log(result);

let sum2 = sum;   // sum2 도 sum으로 생각하고 실행하겠다
sum2(100, 200);

result = sum(sum(10, 20), sum2(100, 200));
console.log(`sum(10, 20) + sum2(100, 200) => ${result}`);

// let input = prompt('값을 입력');

