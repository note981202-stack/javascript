// 배열. 순번이 0부터 시작함(인덱스)
let foods = ['감자탕', '짜장면', '탕수육', '햄버거'];
console.log(foods[0], foods[1]);  // [숫자] = 숫자번에 적힌 단어를 표출해줌

//배열요소의 변경
foods[1] = '짬뽕';
console.log(foods); //1번째 음식이 짜장면이아니라 짬뽕으로 표출됨

// 배열요소 추가.
foods[4] = '삼겹살';
console.log(foods); //4번을 추가해줌

//Math.random() 랜덤 값 => 0(포함) ~ 100(포함)   :    실수 -> 정수값으로 변역하려면 math.floor
console.log('임의의 값: ' + Math.random());  // 0 <= x값 < 1
console.log('임의의 값: ' + Math.floor(Math.random() * 101));  // 0 <= x값 < 101       0~100 값을 랜덤으로 설정해주고, 실수를 정수로 올림해서 만들어줌
console.log('임의의 값: ' + Math.ceil(Math.random() * 101));  // 0 <= x값 < 101        실수를 정수로 내림해서 만들어줌

let points = [Math.ceil(Math.random() * 101),
              Math.ceil(Math.random() * 101), 
              Math.ceil(Math.random() * 101), 
              Math.ceil(Math.random() * 101), 
              Math.ceil(Math.random() * 101)];

// let result; // 계산 명령어
//let result = points[0] + points[3];     //(points 첫번 + points 네번째) - **1번은 0이고 4번째는 3이야 순번 조심해
//console.log(result);

let result = points[0] + points[points.length - 1];  //★length는 마지막을 숫자의 마지막을 의미함 / lengt - 1 은 마지막의 이전 숫자를 의미함
console.log(points.length);

//------------------------------------배열---------------------------------//

let numbers = [];
// prompt 활용해서 숫자를 3번 입력. => 배열추가.
//result에 대입. consoledp result 출력.

numbers[numbers.length] = parseInt(prompt('숫자값을 입력하세요'));
numbers[numbers.length] = parseInt(prompt('숫자값을 입력하세요'));
numbers[numbers.length] = parseInt(prompt('숫자값을 입력하세요'));

result = numbers[0] + numbers[1] + numbers[2];
console.log(numbers)     //30이  10+10+10이라는 걸 보여줌
console.log(result)


//---------------------△  예시 문제  △-------------------------------//

