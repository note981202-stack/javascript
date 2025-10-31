//조건문 p.527
if (10 <= 10) {
 //if 블럭에 구현.
}
//회원(회원번호, 회원명, 회원점수(75점)) => 객체.
//1001, 김민준, 123점/ 1002, 박설명, 95점/ 1003, 이충희, 100점
// 배열 members 에  저장.
//result에 세명의 회원점수의 합을 저장하고 콘솔에 출력하게 할것.
//result의 회원 평균의 값을 콘솔 출력 할것.

let members=[]
members[0] = {
  number: 1001,
  name: '김민준',
  score: 123
}

members[1] = {
  number: 1002,
  name: '박설명',
  score: 95
}


members[2] = {
  number: 1003,
  name: '이충희',
  score: 100
}

let result = {
  sum : members[0]['score'] + members[1]['score'] + members[2]['score'],          
  average : (members[0]['score'] + members[1]['score'] + members[2]['score'])/3
}
//''안에 들어가는 것들은 내가 설정한 값의 이름이야 ['']의 형식으로 작성해야해


console.log(result ['sum'])
console.log(result ['average'])

let idx = 2;
if (members[idx]['score'] > result['average']) {                  //'' 부분은 내가 설정한 이름 부분을 의미함
  console.log(members[idx]['name'] + '의 점수는 평균보다 큽니다.');
}else if (members[idx]['score'] < result['average']) {
  console.log(members[idx]['name'] + '의 점수는 평균보다 작습니다.');
}else {
 console.log(members[idx]['name'] + '의 점수는 평균과 같습니다.');
}
  
  
//-------------//








//---------틀린 풀이법-----------//
// member1 = {
//   number: 1001,
//   name: '김민준',
//   score: 123
// }
// let members=[member1]

// members[1] = {
//   number: 1002,
//   name: '박설명',
//   score: 95
// }


// members[2] = {
//   number: 1003,
//   name: '이충희',
//   score: 100
// }

// let result;
// result = members[0]['score'] + members[1]['score'] + members[2]['score'];
// console.log(result)