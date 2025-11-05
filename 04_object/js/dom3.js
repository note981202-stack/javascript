// event 등록
document.querySelectorAll("#itemlist>li").forEach((elem) => {
  console.log(elem);
  elem.addEventListener("mouseover", function () {
    //누르면 빨간색을 보여줌
    elem.style.color = "red";
  }); //엘리먼트에 이벤트 리스트를 추가시키겠다
  elem.addEventListener("mouseout", function () {
    elem.style.color = "";
  });
});

//추가, 순서
// 1. 추가버튼에 '클릭'이벤트 등록
// 2. input태그의 입력값
// 3. <li>node.js</li> 생성
// 4. ul태그의 하위요소로 등록

document //p.657 참고
  .querySelector("#addBtn") //
  .addEventListener("click", (e) => {
    let userVal = document.querySelector("#addInput").value; // 사용자의 입력값
    //입력값이 있으면 등록 없으면 종료.
    if (!userVal) {
      alert("값을 입력.");
      return; //함수 종료
    }
    let li = document.createElement("li"); //li태그를 만듦
    li.addEventListener("mouseover", () => (li.style.color = "red")); //마우스 오버 이벤트 등록
    li.addEventListener("mouseout", () => (li.style.color = "")); //마우스 아웃 이벤트 등록
    let txt = document.createTextNode(userVal);

    li.appendChild(txt); //<li>Node.js</li> 부모 요소에 자식요소를 넣는 것
    console.log(li);
    document.querySelector("#itemlist").appendChild(li);
    //입력값 초기화.
    document.querySelector("#addInput").value = "";
  });

// console.log(e.target);  뭐가 뭔지 모르겠으면 이런식으로 봐야 한다
//addEventListener  - 이벤트를 넣어 주는 코드등록 방법
//querySelector - 자바스크립트에서 html요소를 찾는 방법
// 부모요소에
