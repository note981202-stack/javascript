//
let students = JSON.parse(localStorage.getItem("students"));

localStorage.setItem("students", JSON.stringify(students));

//페이지가 로딩되는 시점에 처리.
students.forEach((elem) => {
  const data = [elem.sno, elem.sname, elem.score];
  let tr = makeRow(data);
  console.log(data);
  document.querySelector("#studentlist").appendChild(tr);
});
//------------------------------------------------------//

document
  .querySelector("#addform") // 에드폼을 선택함
  .addEventListener("submit", (e) => {
    //제출버튼 역할
    e.preventDefault(); // 폼의 기본기능 차단
    let sno = document.querySelector("#studNo").value; //studNo의 값을 userVal에 저장함
    let sname = document.querySelector("#studName").value;
    let score = document.querySelector("#score").value;

    let input = [sno, sname, score]; // 입력값을 배열로 등록
    let tr = makeRow(input);
    document.querySelector("#studentlist").appendChild(tr);

    if (!sno || !sname || !score) {
      alert("값을 입력.");
      return; //함수 종료
    }

    const inputs = [sno, sname, score];
    students.push({ sno: sno, sname: sname, score: score });
    localStorage.setItem("students", JSON.stringify(students));

    //-----------------------------------------------------//

    //티바디에 자식요소로 어펜드 차일드
    document.querySelector("#studentlist").appendChild(tr);
    document.querySelector("#studNo").value = "";
    document.querySelector("#studName").value = "";
    document.querySelector("#score").value = "";
  });

// 학번, 이름, 점수 = tr생성
function makeRow(inputs) {
  let tr = document.createElement("tr"); //태그를 만듦
  // tr.addEventListener("click", (e) => {
  //   if (confirm("삭제하겠습니까?")) {
  //     const idx = students.findIndex(students) => students.sno == input.sno);
  //     students.splice
      e.target.parentElement.parentElement.remove();
    }
    
  inputs.forEach((elem) => {
    let td = document.createElement("td");
    let txt = document.createTextNode(elem);
    td.appendChild(txt);
    tr.appendChild(td);
  });
  //삭제버튼
  let td = document.createElement("td");
  let btn = document.createElement("button");
  btn.innerText = "삭제";
  // 클릭 이벤트 등록.
  btn.addEventListener(`click`, (e) => {
    if (confirm("삭제하겠습니까?")) {
      const idx = students.findIndex((students) => students.sno == inputs.sno);
      students.splice
      e.target.parentElement.parentElement.remove();
      
    }
  });
  td.appendChild(btn);
  tr.appendChild(td);
  //반환
  return tr;
}

