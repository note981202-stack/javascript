//fuction2.js

//함수의 정의: differenceBetweenNumber
// 매개 변수: 두 수의 차이를 구하는 함수. 콘솔에 출력하는 함수를 만드세요.


differenceBetweenNumber(40, 60);

function differenceBetweenNumber(x, y){
  let result = x - y;
  if (x > y) result = x - y;
  if (y > x) result = y - x;
  console.log('두 수의 차이는' + result);
}
 // end of differenceBetweenNumber.
