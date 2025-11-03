//while.js
let i = 1;
while(i <= 10) {    //while(조건식)
  //while블럭. = 조건이 되면 실행을 하겠습니다 
  console.log('현재 i의 값: ' + i);
  i++;
}
//---------------------------------------------------------------------------
let randomNum = Math.ceil(Math.random()*10);
// while(randomNum != 5) {
//   console.log(randomNum);
//   randomNum = Math.ceil(Math.random()*10);
// }
do {     // 조건이 완성되기 전에 일단은 한 번 실행을 해본다 라는 명령어 do~~ while
  console.log(randomNum);
  randomNum = Math.ceil(Math.random()*10);
} while(randomNum != 5)

console.log('end of program.');
//-----------------------------------------------------------------------------
//학생점수. 입력 후 quit라는 값을 넣으면 반복종료하게 하고 싶다.
let input = prompt('학생 성적을 입력>> 종료는 quit를 입력하세요');
while(input != 'quit') {
  console.log('입력한 값은: ' + input);
  input = prompt('학생 성적을 입력>> 종료는 quit입력하세요.');
}
console.log('end of program.');
