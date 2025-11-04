// 객체 실습
const stud1 = new Object(); //  = { sno: 100 };
stud1.sno = 100;
stud1.sname = "홍길동"; //속성(스트링)추가
stud1.score = 90; //속성(넘버)추가
stud1.study = function () {
  console.log(`${stud1.sname}이 공부합니다.`);
};
stud1.friendName = ["김길동", "최은식", "마동일"]; // 속성(배열)추가
stud1.teacher = { tname: "허정무", age: 40 };
stud1.study(); // 메소드 (함수) 호출. 속성값이 함수에 들어가서 나타내도록 하는 역할
stud1.addFriend = function (newFriend) {
  stud1.friendName[stud1.friendName.length] = newFriend;
};
stud1.addFriend("박충식");

console.log(stud1); // = ["teacher"]["age"];
// console.log(stud1.teacher.age); // = ["teacher"]["age"];

//배열.
const numbers = []; //new Array(); //
numbers.push(10); //[10]   배열요소를 출력할때 push라는 명령어를 사용할 수 있다.
numbers.push(20); //[10, 20]     push = 배열의 추가
numbers.unshift(30); // [30, 10, 20] 숫자를 제일 앞쪽에 배치하게함
// numbers.pop(); // [30, 10] 제일 뒤의 숫자를 제거함
// numbers.shift(); // [10] 제일 앞쪽의 숫자를 없앰
numbers.push(100);
numbers.push(150);

// forEach 반복문.
let sum = 0;
numbers.forEach(function (elem, idx, ary) {
  //for each는 함수를 매갯값으로 주는 것임 elem배열요소 idx인덱스 ary배열
  //1번값은 배열요소 2번값은 인덱스 3번값은 배열
  console.log(elem);
  if (elem < 100) {
    sum += elem; //10보다 작은 수의 합 명령어
  }
});

console.log(`numbers의 합계: ${sum}`);

//배열 [객체, 객체, 객체]
const members = [
  { memberId: "user01", memberName: "홍길동", phone: "010-1111-1111" },
];
// 새로운 값을 추가
members.push({
  memberId: "user02",
  memberName: "김우진",
  phone: "010-2222-2222",
});
members.push({
  memberId: "user03",
  memberName: "박명환",
  phone: "010-3333-3333",
});
// 찾을 회원의 이름을 입력 => 전화번호를 알려주도록 기능함.
members.forEach(function (elem, idx, ary) {
  // console.log(elem); // 엘리먼트가 무엇인지 확인하는 명령어
  // console.log(idx);
  console.log(`이름: ${elem.memberName}`);
});
// forEach 반복문.

let searchName = prompt("이름을 입력하세요: ");
let searphone = "";
members.forEach(function (elem, idx, ary) {
  //상태값만 지정.
  if (elem.memberName == searchName) {
    searphone = elem.phone;
  }
});
// false => falsy('', null, 0, undefined)
if (searphone) {
  alert(`연락처: ${searphone}`);
} else {
  alert("찾는 이름이 없습니다.");
}

//---------- ▽내가 작성한 풀이법은 사람수만큼 판단을 하니까 박스가 여러개가 나오게 됨
// members.forEach(function (elem, idx, ary) {
//   if (elem.memberName != searchName) {
//     alert("찾는 이름이 없습니다");
//   }
//   if (elem.memberName == searchName) {
//     alert(`전화번호: ${elem.phone}`);
//   }
// });
