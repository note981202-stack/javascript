// promise2.js
// 비동기 방식처리. XMLHttpRequest()     -- 아래와 같은 방식으로 사용하지 않는다
const xhtp = new XMLHttpRequest();
xhtp.open("get", "http://localhost:3000/posts"); //요청페이지 지정.
xhtp.send(); //서버로 부터 요청실행
xhtp.onload = function () {
  console.log(JSON.parse(xhtp.responseText));
  let data = JSON.parse(xhtp.responseText);
  let postId = data[0].Id;

  const xhtp2 = new XMLHttpRequest();
  xhtp2.open("get", "http://localhost:3000/comments");
  xhtp2.send();
  xhtp2.onload = function () {
    let data2 = JSON.parse(xhtp2.responseText);
    let result = data2.filter((comment) => comment.postId == postId);
    console.log(result[0]);
  };
};
