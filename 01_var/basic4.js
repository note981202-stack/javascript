//basic4.js
//객체타입. / string, number, boolean => 원시유형(primitive type) vs. 복합유형.
let myInfo = {
  name: '홍길동',
  age: 20,
  phone: '010-1111-1111',
  address: '대구 중구 중앙대로 100번지',
  height: 178
}


myInfo['address'] = '대구 중구 중앙대로 200번지';
console.log(myInfo['address']);  // 숫자는 [] 안에 그냥 기입해도 되지만 address처럼 텍스트 환경은 ''를 입력해줘야 인식을 할 수 있음

//학생(학생번호, 이름, 점수)

let student1 = {
  sno: 100,
  sname: '홍길동',
  score: 85
}

let students = [student1];
students[1] ={       //[1]은 2번째 학생을 의미함
  sno: 200,
  sname: '김민석',
  score: 92
}


//--------------문제 ----------------------//
let result; //홍길동 + 김민석의 점수 합한 결과 => result에 대입    //**result는 변수를 선언하겠다는 의미
result = students[0]['score'] + students[1]['score'];    // 두개를 계산해줘
console.log(result)    // 계산 한걸 화면에 보여줘

