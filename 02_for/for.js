//for.js

let sum = 0; // 변수 초기화.

// 1~100 까지의 홀수 값의 합.
for (let i = 1; i <= 100; i++){      // for(초깃 값; 조건; 증가식) // i++은 증가한다는 말
  if (i % 2 == 1) {    //i를 2로 나누면 나머지가 1이 된다
   sum = sum + i;
  }
}
console.log('1~100까지 홀수의 합: ' + sum);

// math.random() = 값을 생성 1 ~ 10 사이의 생성 하도록.
// 10번 반복해서 실행할때마다 결과를 result 저장. 출력.

// console.log('임의의 값: ' 0 + 1 <= Math.floor(Math.random() * 10)) + 1 < 10 + 1;
let result = 0;
for (let i = 1; i <= 10; i++){
  result += Math.floor(Math.random() * 10) + 1;
  console.log('result => ' + result);
}
console.log('합: '+ result);

//prompt (몇 단 출력?)

let temp1 = prompt('숫자값을 입력하세요');
document.writeln('<ul>');
for (let i = 1; i < 10; i++) {
document.writeln('<li> temp1 * ' + i +' = ' + (temp1 * i) + '</li>');
}
document.writeln('</ul>');


let temp1 = prompt('숫자값을 입력하세요');
let html = '';
html += '<ul>';
for (let i = 1; i < 10; i++) {
html += '<li> temp1 * ' + i +' = ' + (temp1 * i) + '</li>';
}
html += 
document.writeln('</ul>');