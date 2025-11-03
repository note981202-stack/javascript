//while2.js
// 1 ~ 10 임의의 값 생성하고 생성한 값 누적하기. 종료하는 조건은 랜덤숫자가 10이 나올때 종료.

let sum = 0;      //0부터 시작한다
// let randomNum = Math.ceil(Math.random() * 10);

while(true) {     //숫자를 10까지의 숫자 중에서 랜덤으로 생성하게 한다
  let randomNum = Math.ceil(Math.random() * 10);
  console.log(randomNum)
  sum += randomNum;

  //종료조건.
  if (randomNum == 10) {    // 10이 나오면 종료한다
    break; // 반복문 종료.
  }
}
console.log('합계 ' + sum);

//--------------------------------------------------------------------------
console.clear();
sum = 0;
while(true) {
  let randomNum = Math.ceil(Math.random() * 10);
  console.log(randomNum);
  sum += randomNum;

  //종료조건.
  if (randomNum != 10) {     // 랜덤의 값이 10이 아니면 계속해서 실행하겠다
    continue;
  }
  break; // 컨티뉴랑 브레이크랑 같이 있을 수 없으니 띄워서 작성을 함
}
console.log('합계: ' + sum);
//--------------------------------------------------------------------------

/*
다중라인 주석.
**
***
****
*****
*/
let star = '';     // ''는 그냥 공백으로 놔두겠다라는 의미
for (let i = 1; i<= 5; i++) {    // 1부터 시작해서 5에서 끝내겠다는 의미
  star = '';
  for (let j = 1; j <= i; j++) {       //빈공간이 있으면 하나씩 별을 더 하겠다는 의미
    star += '*';
  }
  console.log(star);
}