// dom  = document object medel
// node - element, text, attribute 노드
let list = document.getElementById("list"); // html의 id값을 기준으로 엘리먼트를 찾겠다
console.dir(list.childNodes[1]);
list.childNodes[1].innerHTML = "사과";
list.childNodes[1].onclick = function () {
  //사과 부분을 클릭하면 클릭됐다고 뜸
  //이벤트 핸들러.
  alert("클릭됨");
};

//태그네임
let tags = document.getElementsByTagName("li");
console.log(tags);
for (let i = 0; i < tags.length; i++) {
  console.log(tags[i].innerText); //이너 텍스트는 리스트 내의 글자를 보여줌
}

//클래스네임
let classlist = document.getElementsByClassName("fruit");
console.log(classlist);

//선택자  - 자바스크립트를 활용해서 html이나 문서를 좀 더 효율적으로 수정할 수 있다.
let sel = document.querySelector("ul.list");
console.log(sel);
