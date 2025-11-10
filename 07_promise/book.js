//book.js
const bookList = [
  {
    bookNo: "001",
    title: "모던 자바스크립트 기초",
    author: "김모던",
    price: 20000,
  },
  {
    bookNo: "002",
    title: "자바스크립트 핵심가이드",
    author: "알베르토",
    price: 22000,
  },
];

//페이지 로딩시 바로 실행되는 코드
function showBookList() {
  //기존목록 지우고.
  document.querySelector("#list").innerHTML = "";
  //배열의 값만큼 화면 출력.
  bookList.forEach((elem) => {
    console.log(elem);
    let { bookNo, title, author, price } = elem;
    let fields = ['<input type="checkbox"/>', bookNo, title, author, price];
    let tr = document.createElement("tr");
    tr.innerHTML = `${fields
      .map((field) => "<td>" + field + "</td>")
      .join("")}`;
    document.querySelector("#list").appendChild(tr);
  });
}
showBookList();

// form에다가 submit 이벤트 등록
document
  .querySelector('form[name="addBook"]')
  .addEventListener("submit", function (e) {
    e.preventDefault();
    //사용자가 입력한 값을 추가하기
    let bookNo = document.querySelector('input[name="bookNo"]').value;
    let title = document.querySelector('input[name="title"]').value;
    let author = document.querySelector('input[name="author"]').value;
    let price = document.querySelector('input[name="price"]').value;
    bookList.push({ bookNo, title, author, price });
    console.log({ bookNo, title, author, price });
    showBookList();
  });

// 저장버튼 누를려면 필수 요소들 다 적혀있어야 함

// 저장버튼 누르면 다 리셋됨

// 체크 박스 누르며 다 선택되는 기능
document
  .querySelectorAll("tbody input")
  .forEach((elem) => (elem.ariaChecked = false));
