//v1.0 ->  v2.0
//git 커밋(현재시점의 코드를 백업하겠다) -> 현시점의 스냅샷.
// 함수(function - 기능을 줌)
console.log("자바스크립드 시작");  // - 개발자 영역에 출력할 때 쓰는 명령어
// alert("안녕하세요") //괄호가 있으면 함수라는 뜻 - 경고창처럼 뜸
// confirm("저장하겠습니까?") - 예 아니오 가능
// prompt("이름을 입력하세요") - 사용자가 텍스트를 입력할 수 있도록 해줌
document.writeln("<h3>이름은 홍길동</h3>");
console.log("콘솔창에 출력.");  //-개발자 영역에 출력할때 쓰는 명령어

// 변수. 자료형(datatype)
let myname = '곽현우';// 문자열(변수=string) -  마이네임이라는 곳에 설정되는 출력값이 곽현우라고 출력이 된다는 말이다.
let mypoint = 120; // 숫자열(number)
let isAdult = true; // 불리언(boolean)
let myHobbies = ['독서', '여행', '요리'] // 배열(object) - 같은 종류의 다른 것
let myAssets = {     //객체(object) - 다른 종류의 배열
  car: 'sonata', 
  house: '아파트',
  cash: 10000
};
let myfamily = null // undefined -> null: object

// alert(myname); //경고창에 곽현우가 뜨게 됨
// alert(mypoint); //경고창에 120이 뜨게 됨

console.log(typeof myname);