// function.js      // 함수는 코드의 묶음임
let n1 = 10; //null 값으로 대체
let n2 = 20; 
sum(n1, n2);

let a1 = 11; //null 값으로 대체
let a2 = 22; 
sum(a1, a2);

sum(30, 50);     //매개값    ↔    function 

sum(30);            //언디파인 = 값이 아직 정의 되지 않음 / null 은 값이 의도적으로 없음

//함수 => 기능 
function sum(x, y) {        //기능하고자 하는 함수의 모습 정하기  function 이라고 먼저 적어야됨
  if (x == undefined || x == null) {    // 엑스 값이 없을때 엑스 값을 지정하라는 메세지
    console.log('x값을 지정.');
  }
  if (y == undefined || y == null) {     // 와이 값이 없을때 와이 값을 지정하라는 메세지
    console.log('y값을 지정.');
    return; // 함수의 종료 - 반복문의 break와 유사함
  }
  result = x + y;
  console.log('두 수의 합은' + result);
}
  


// sum (10, 20);
// function sum(x, y){
//   result = x + y;
//   console.log(result);
// }