//promise.js      --- 비동기 방식의 정보 처리
// pending(요청)/ fulfilled(정상)/rejected(실패). then,catch

const promise = new Promise((resolv, reject) => {
  //화살표 함수
  try {
    let num1 = 3 + 4;
    resolv(num1);
  } catch (err) {
    reject(err);
  }
}); // 프로미스 객체 호출       -- 비동기 방식의 처리방식

promise
  .then((result) => {
    console.log("성공시: ", result);
  })

  .catch((err) => {
    console.log("실패시: ", err);
  });

// 비동기 방식 처리 --------------------------------------
function delayFunc(ms, message) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`${message}`);
      resolve(`${message}`);
    }, ms);
  });
}

delayFunc(1000, "1번 작업 처리") //
  .then(() => delayFunc(1500, "2번작업처리"))
  .then(() => delayFunc(2000, "3번작업처리"))
  .then(() => {
    console.log("end of prog.");
  });

// promise1 //
//   .then((result) => {
//     console.log(result);
//   });

//-------------------------------------------------------------------------------------
//비동기 방식 처리 함수(setTimeout, fetch) == '콜백지옥'
setTimeout(function () {
  // console.log("1번처리.");
  setTimeout(function () {
    // console.log("2번처리.");
    setTimeout(function () {
      // console.log("3번처리.");
    }, 600); //0.6초
  }, 1500); //1.5초
}, 1000); //1초
console.log("end of prog.");
//-----------------------------------------------------------------------------------
// fetch("http://localhost:3000/comments")
//   .then((resp) => {
//     return resp.json(); //url의 정보를 댄에서 받아옴
//   })
//   .then((result) => {      //댄에서 받은 정보의 결과를 보여줌
//     console.logg(result);
//   })
//   .catch((err) => {
//     console.log(err); //오류가 생기면 에러가 났다고 이 명령어가 실행됨
//   });
