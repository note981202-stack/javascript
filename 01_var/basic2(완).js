// basic2.js
let num1 = 10; // 숫자 리터럴      =는 같다라는 의미가 아니라 오른쪽의 값을 왼쪽에 적용시키겠다는 말임
let num2 = 20;

console.log('두 변수의 + 연산결과: ' + (num1 + num2)); 

let str1 = 'hello,';  //문자 리터럴
let str2 = 'world';

console.log(str1 + str2);

let temp1 = prompt('숫자값을 입력하세요'); //반응 값을 템프1 에다가 넣어줌 // 숫자 십을 1 0으로 판단함
let temp2 = prompt('숫자값을 입력하세요'); 
// console.log(parseInt(temp1) + parseInt(temp2)); // parseInt는 1 0 을 숫자 십으로 형변환 시켜줌
// console.log(temp1 - temp2); // '10' - '20'   =>    10 - 20  더하기랑 다르게 빼기랑 곱하기는 자동으로 숫자로 변경해서 계산 해줌
console.log(temp1 == temp2); // 템프 1과 템프2를 비교해보겠다 (같은 값이 작성되면 트루/ 다른값이 작성되면 폴스가 뜸)
// 'Hello' -> ??  :  NaN (Not A Number)