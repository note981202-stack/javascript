// 객체.
// 함수(입금기능), 함수(출금기능) => 5만 라인 일때 코드가 너무 길어지니까 작은 단위의 정보로 나눔
// 작은 기능 1, 작은 기능 2, 작은 기능 3 .... 작은기능 n => 작은 기능들을 나눠서 힘 = 객체지향 프로그래밍.
// 학생(객체): 학번, 이름, 점수, 시험응시여부, 공부한다, 잠을 잔다 => 속성, 기능 => 개체(instance)

let obj = {
  //여기부터 15번 라인까지 오브젝트(객체)이면서 인스턴스(개체)
  //객체
  name: "홍길동",
  age: 20,
  score: 80,
  showinfo: function () {
    //메소드 (함수)
    console.log(this); // 객체(obj) 안에서만 사용가능하고 스스로를 읽어줌 / obj밖에서는 this사용 못함
    return `학생이름: ${this.name}이고 점수는 ${this.score} 입니다.`;
  },
};
// obj.name = "김병지"; // obj를 입력하면 객체를 바꿈
// obj.age = 40; // 上同
console.log(obj.name); // = obj['name']
console.log(obj.showinfo()); // 객체. 메소드 호출.    =  리턴값이 없으면 언디파인이 뜸

//객체의 속성들 (for... in..)
for (let prop in obj) {
  //prop는 속성을 말함
  //for in은 반복되는 정보를 읽을 수 있음
  console.log(`prop => ${prop}, value => ${obj[prop]}`);
}
