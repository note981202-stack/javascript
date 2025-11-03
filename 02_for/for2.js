//for2. js
let numbers = [23, 17, 92, 33, 48, 52];
// numbers[0], sumbers[1] ...... , numbers[numbers.length -1]
let sum = 0;
for (let i = 0; i < numbers.length; i++) {      //넘버스 랭스까지를 i에 대입하겠다
  console.log(numbers[i]); // i 값의 범위: 0 ~ 5
  // if (i % 2 == 0 && numbers[i] % 2 == 0){      //홀수 번째 위치 or 값이 짝수를 더해줘라
  if (i % 2 == 0 || numbers[i] % 2 == 1){      //홀수 번째 위치 '이면서' 값이 홀수를 더해줘라
  sum += numbers[i];
  }
}
console.log('합계점수: ' + sum);

let students = [{sno: 100, sname: '김민주', score: 88, gender: 'female'},
  {sno: 200, sname: '박성하', score: 90, gender: 'male'},
  {sno: 300, sname: '오혜경', score: 77, gender: 'female'},
  {sno: 400, sname: '황성찬', score: 58, gender: 'male'},
  {sno: 500, sname: '최유진', score: 67, gender: 'female'},
];
// 각 학생번호: 100, 이름: 김민주, 점수: 88

for (let i = 0; i < students.length; i++) {
  console.log('학생번호' + students[i]['sno'] + ', 학생이름' + students[i]['sname'] + ', 점수' + students[i]['score']);
}

console.clear(); // 콘솔부분을 지우는 역할 - 로그만 지우는 것지 데이터가 지워지는 것이 아님

let totalScore = 0; //학생의 점수 합계한 결과.
let average = 0; // 학생의 점수 평균값
let count = 0; //조건을 만족하는 사람을 알아내기 위함
for (let i = 0; i < students.length; i++) {
  // if(students[i].score >= 60)    //점수가 60점이상인 학생들
    if(students[i].gender == 'female') {   //여학생들의 평균.

  totalScore += students[i].score; // students[i]['score']; 두개의 방법이 있음
  count++;
  }
}
//평균 계산하기
average = totalScore / count;

console.log('합계점수:' + totalScore + ',평균: ' + average);