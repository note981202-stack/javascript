//todo.js    함수하고 반복문을 사용해서 만드세요.

//1. 함수(gugudan) 미지수 매개값으로 5 = > 5단을 출력/ 6이면 6단을 출력.

//2. 함수(summary) 미지수 매개값으로 7입력 받으면 1부터 7까지의 합을 콘솔에 출력.

//3. 함수(addNumber) 매개값을 2개를 받아 x, y => 예를 들어 4, 10이면 4부터10까지의 숫자의 합을 다 더해서 출력.



// //1번 문제
function gugudan(dan) {           //dan은 함수의 매개변수 수학에서 n이라고 이해하면됨
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`); //${} 하면 ''없이 간단하게 입력하여 넣을 수 있다
  }
}
let input = prompt("몇 단을 출력할까요?");
let dan = parseInt(input);
gugudan(dan); // 프롬프트가 있으니가 dan을 써도 됨 근데 프롬프트가 없으면 숫자를 넣어야됨
// //------------------------------1번문제 끝------------


// //2번 문제
//------------------------------2번
function summary(n) {
  let sum = 0;                 // 합계를 저장할 변수
  for (let i = 1; i <= n; i++) {
    sum += i;                  // sum = sum + i
  }
  console.log(`1부터 ${n}까지의 합: ${sum}`);
}

let input = prompt("1부터 합계를 구할 숫자를 입력하세요:");

let num = parseInt(input);

if (!isNaN(num) && num > 0) {
  summary(num);
} else {
  console.log("올바른 양의 정수를 입력하세요.");
}





//3번 문제

function addNumber(x, y) {
  let sum = 0;
  
  let start = Math.min(x, y);
  let end = Math.max(x, y);
  
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  
  console.log(`${x}와 ${y} 사이의 합: ${sum}`);
}

let inputX = prompt("첫 번째 숫자를 입력하세요:");
let inputY = prompt("두 번째 숫자를 입력하세요:");

let x = parseInt(inputX);
let y = parseInt(inputY);

if (!isNaN(x) && !isNaN(y)) {
  addNumber(x, y);
} else {
  console.log("숫자만 입력해주세요.");
}
