//setTimeout 함수.
//비동기 함수(설정된 시간에 따라 다름) vs 동기 함수(순차적으로 실행되는 함수)
//초기값 => 10 더하기 => *2 => 5를 뺀 결과를 계산.
let initvalue = 10;

// let result = initvalue + 10; //1번
// result = result * 2; //2번
// result = result - 5; //3번
// console.log(result);

// setTimeout(function() {     //매개값을 두개 받음 (메세지), {지연시간}
// console.log('setTimeout call.');
// }, 2000);    //2초 있다가 메세지를 표시해줌

let result;

setTimeout(function () {
  result = initvalue + 10;
  console.log(`첫번째 ${result}`);

  setTimeout(function () {
    result = result * 2;
    console.log(`두번째 ${result}`);

    setTimeout(function () {
      result = result - 5;
      console.log(`세번째 ${result}`);
      console.log(`최종결과 ${result}`);
    }, 1000);
  }, 1500);
}, 2000);
console.log(result);
