// 1. concat
let ary1 = [1, 2, 3];
let ary2 = [4, 5, 6];
let result = ary1.concat(ary2);
console.log(ary1, ary2, result); //기존 배열에 배열요소 추가해서 새로운 배열.
result.push(11); //[1,2,3,4,5,6,11] = false가 나옴
// console.log([1, 2, 3].concat([4, 5, 6])); // 기존배열에 새로운 배열요소 추가
// => [1, 2, 3, 4, 5, 6]

// 2.every :   // 배열의 모든 요소가 주어진 함수에 대해 참이면 트루 하나라도 틀리면 폴스
let isTrueofNot = result.every(function (elem, idx, ary) {
  if (elem % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(isTrueofNot);

// 3.indexof
let idx = result.indexOf(5);
console.log(`idx => ${idx}`);

idx = ["홍길동", "김민규", "박창식"].indexOf("박창식"); //배열의 값에 인덱스 오브의 값이 있으면 트루 없으면 폴스
if (idx > -1) {
  alert("친구있음.");
} else {
  alert("친구없음.");
}
