// fetch -> then -> then -> then
// 게시글 목록.
//async, await

async function postlist() {
  try {
    const result = await fetch("http://localhost:3000/posts");
    const data = await result.json(); // 자바스크립트 객체 변경.
    console.log(data);
    for (let { id, title, author } of data) {
      //객체의 디스트럭처링
      let li = document.createElement("li");
      let fields = [id, title, author, "<button class='delete'>삭제</button>"];
      // li.innerHTML = `<span>${id}</span> <span>${title}</span> <span>${author}</span>`;      // 15~ 19라인까지랑 같은 코드임
      li.innerHTML = `${fields
        .map((elem) => "<span>" + elem + "</span>")
        .join("")}`;
      document.querySelector("#list").appendChild(li);
    }
  } catch (err) {
    console.log("예외발생: ", err);
  }
  let dltn = document.querySelectorAll("button.delete");
  console.log(dltn);
  for (let button of dltn) {
    button.addEventListener("click", (e) => {});
  }
}
postlist();

function deleteElement(e) {
  const deleteButton = document.getElementById(btn - detele);
  if (deleteButton) {
    fetch("http://localhost:3000/posts/" + e, {
      method: "delete",
    });
  }
}
