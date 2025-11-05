// dom2.js
let target = document.querySelector("div>ul");
console.log(target.innerHTML); //태그 형식으로 보여줌
console.log(target.innertext); //택스트 형식으로만 보여줌, 디스플레이 넌인것들은 안보여줌
console.log(target.textContent); //텍스트 전부 다 보여줌

//이미지 클릭 이벤트
document.querySelector("img").onclick = function (e) {
  console.dir(e.target);
  let no = Math.ceil(Math.random() * 4);
  e.target.src = "images/" + no + ".jpg";
  e.target.width = width;
};
