//
const students = [
  {sno:100, sname:'홍길동', score:90 },
  {sno:101, sname:'이순신', score:95 },
  {sno:102, sname:'유관순', score:98 },
  {sno:103, sname:'박병관', score:88 },
  {sno:104, sname:'김충식', score:77 },
];

//페이지가 로딩되는 시점에 처리.
students.forEach(elem => {
  const data = [elem.sno, elem.sname, elem.score];
  let tr = makeRow(data);
  console.log(data)
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
  
//-----------------------------------------------------//

//티바디에 자식요소로 어펜드 차일드
  document.querySelector("#studentlist").appendChild(tr);
  document.querySelector("#studNo") = "";
  document.querySelector("#studName").value = "";
  document.querySelector("#score").value = "";

  });

  // 학번, 이름, 점수 = tr생성
  function makeRow(inputs) {
    let tr = document.createElement("tr"); //태그를 만듦
    inputs.forEach((elem) => {
      let td = document.createElement("td");
      let txt = document.createTextNode(elem);
      td.appendChild(txt);
      tr.appendChild(td);
    });
    //삭제버튼
      let td = document.createElement("td");
      let btn = document.createElement("button");
      btn.innerText = '삭제';
      // 클릭 이벤트 등록.
      btn.addEventListener(`click`, (e) => {
        if (confirm('삭제하겠습니까?'))
        e.target.parentElement.parentElement.remove();
      });
      td.appendChild(btn);
      tr.appendChild(td);
      //반환
      return tr;

  }








//     //----------------------------------------------
//     let txt = document.createTextNode(userVal);

//     let td = document.createElement("td"); //태그를 만듦
//     txt = document.createTextNode(userVal);

//     td = document.createElement("td"); //태그를 만듦
//     txt = document.createTextNode(userVal);

//     td = document.createElement("td"); //태그를 만듦
//     txt = document.createTextNode(userVal);

//     li.appendChild(txt); //<li>Node.js</li> 부모 요소에 자식요소를 넣는 것
//   });

// td.appendChild(txt);
// document.querySelector("#studentlist").appendChild(tr);
