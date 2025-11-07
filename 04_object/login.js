//login.js
const db = [
  { userId: "user01", password: "1111" },
  { userId: "user02", password: "2222" },
  { userId: "user03", password: "3333" },
];

const students = [
  {
    sno: 100,
    sname: "홍길동",
    score: 90,
    phone: "010-1111-1111",
    email: "hong@email.com",
  },
  {
    sno: 101,
    sname: "이순신",
    score: 95,
    phone: "010-2111-1111",
    email: "hong@email.com",
  },
  {
    sno: 102,
    sname: "유관순",
    score: 98,
    phone: "010-3111-1111",
    email: "hong@email.com",
  },
  {
    sno: 103,
    sname: "박병관",
    score: 88,
    phone: "010-4111-1111",
    email: "hong@email.com",
  },
  {
    sno: 104,
    sname: "김충식",
    score: 77,
    phone: "010-5111-1111",
    email: "hong@email.com",
  },
];

// localStorage.setItem("students", JSON.stringify(students));

//form 이벤트
document
  .querySelector('form[name="loginForm"]') //
  .addEventListener("submit", (e) => {
    e.preventDefault(); // 기본제출막기
    let id = document.querySelector('input[name="id"]').value.trim();
    let pw = document.querySelector('input[name="pw"]').value.trim();
    //존재여부
    let isExist = false;
    // for (let i = 0; i < db.length; i++){ 18라인이랑 같은 의미
    // if (db[i].userId == id && db[i].password === pw) {
    for (let user of db) {
      //--------------------------------------------
      // db의 유정 정보를 가져오겠다
      if (user.userId === id && user.password === pw) {
        isExist = true;
        break; // 반복문 종료 // 함수종료는 리턴
      }
    }

    //로그인 결과 처리
    if (isExist) {
      //로그인 성공
      if (!localStorage.getItem("students")) {
        localStorage.setItem("students", JSON.stringify(students)); //데이터 초기화.
      }
      location.href = "form.html";
    } else {
      alert("ID, pw확인하세요");
      location.reload();
    }
  });
