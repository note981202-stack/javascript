const obj = {
  sno: "100",
  sname: "홍길동",
  phone: "010-1234-1234",
};
//Object -> text 기반 -> 공유.
// const json = JSON.stringify(obj); //자바의 문자열은 제이슨 문자열로 바꿈
// console.log(json);
// const str = `{"sno":100,"sname":"홍길동","phone":"010-1234-1234"}`;
// console.log(JSON.parse(str)); //제이슨 문자열은 자바로 만듦

const students = [
  { id: 100, name: "hong" },
  { id: 100, name: "hwang" },
  { id: 100, name: "park" },
];
let idx = -1;
for (let i = 0; i < 3; i++) {
  if (students[i].name == "Hong") {
    idx = i;
  }
}
idx = students.findIndex((student) => student.name == "Hong");

students.splice(idx, 1); //삭제

console.log(students);
