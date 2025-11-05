// Math객체
let now = new Date(); //date객체의 인스턴스를 만듦
now.getFullYear(); // 인스턴스 메소드

let randVal = Math.random(); // 정적(static)메소드 ↔ 인스턴스
let result = Math.floor(randVal * 10);
result = Math.max(10, 20); // 2개의 값을 비교해서 큰 값을 보여줌
console.log(result);

result = Math.min(10, 20); // 2개의 값을 비교해서 작은 값을 보여줌
console.log(result);

// 임의의 값을 생성 0 <= x < 10 => 소수점 2자리 까지
//

randVal = Math.random();
result = Math.floor(randVal * 1000) / 100;
console.log(result);

// 클래스.
class Student {
  constructor(sno, sname, score) {
    //컨스트럭터로 인스턴스를 만듦
    this.sno = sno;
    this.sname = sname;
    this.score = score;
  }
}

let Stud1 = new Student(100, "홍길동", 80); // 인스턴스 생성
let stud2 = {};
