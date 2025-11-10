//
let name = "홍길동";
let age = 20;
let msg;
if (age >= 20) {
  msg = "성인입니다";
} else {
  msg = "미성년입니다";
}
console.log("이름은 " + name + "이고, 나이는 " + age + "입니다");
console.log(
  `이름은 ${name}이고, 나이는 ${age}입니다${
    age >= 20 ? "성인입니다" : "미성년입니다" // =삼항 연산자
  }` // ?는 조건을 의미함. 조건을 만족하면  :의 앞부분, 불만족하면 뒷부분을 표기함
);

let score = 58;
//홍길동은 합격입니다.
console.log(
  `이름은 ${name}이고, 점수는 ${score}입니다${
    score >= 60 ? "합격입니다" : "불합격입니다"
  }`
);

let numAry = [60, 70, 55, 80, 49]; //forEach, filter, map, reduce
// let result = numAry.forEach();  //매갯값을 함수로 받음 >= 60;
let result = numAry.filter((elem) => elem >= 60);
// console.log`<span>${numAry.filter(elem >= 60).join("</span><span>")}</span>`; // 60, 70, 80    --> 배열을 문자로 연결해줌

result = numAry.map((elem, idx) => {
  const obj = {};
  obj.ord = idx;
  obj.val = elem;
  return obj; //`순번은 ${idx} => 값은 ${elem}`;
});
console.log(result);
console.log(`${numAry.map((elem) => "<span>" + elem + "</span>").join("")}`);
