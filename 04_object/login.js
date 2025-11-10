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

// form 이벤트.
document
  .querySelector('form[name="loginForm"]') //
  .addEventListener("submit", (e) => {
    e.preventDefault();

    let id = document.querySelector('input[name="userId"]').value;
    let pw = document.querySelector('input[name="password"]').value;
    // 존재여부.
    let isExist = false;
    for (let user of db) {
      if (user.userId == id && user.password == pw) {
        isExist = true;
        break; // 반복문 종료.
      }
    }
    if (isExist) {
      // 로그인성공.
      if (!localStorage.getItem("students")) {
        localStorage.setItem("students", JSON.stringify(students)); // 데이터 초기화.
      }
      location.href = "form.html";
    } else {
      // 로그인실패.
      alert("ID,PW 확인하세요");
      location.reload();
    }
  });