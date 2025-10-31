//연산자. p.523
console.log(heading);
console.log(result);

result = 30 % 20; // 몫(1), 나머지(10) = 계산한 나머지를 구할 때 % 사용함 즉, 리절트의 결과값은 10임
console.log(result);
result++;
console.log(result);
result--;
console.log(result); // ++값에서 --하겠다는거니까 11-1 = 10이 나옴

//할당 연산자.  p.524
let srt = 'Hello'; //오른쪽에 있는 값을 왼쪽으로 넣어주겠다
result = str = 'World';    //월드를 str에다 담고 str의 값을 리절트에다가 담겠다
console.log(result, str);  // 월드, 월드 라는 값이 나온다

console.clear(); // 이전의 로그 삭제

result = result + ', Another';    //월드 어나더 라는 값이 나옴
result += 'World'; //월드, 어나더월드 라는 값이 나옴 = 누적을 시킨다는 의미
console.log(result);

let num = 10;
num += 10;    // +=는 y= y+x를 의미함
num += 10;
num += 10;

console.log(num);  // 넘이 10이니까 10+10+10+10 을 하겠다 라는 의미/ 곱하기 하면 10*10*10*10=10000 이 나옴

//비교 연산자. p.524 = 트루와 폴스를 비교구문(if-후술)
console.log(10 == '10'); // 숫자 십이랑 문자 1 0 을 비교하겠다 - 같으면 트루 다르면 폴스
console.log(10 === '10');  //연산 값과 자료형의 타입도 구분을 하겠다는 의미 숫자 10은 넘버, 1 0은 텍스트라서 폴스라고 나옴

let team = 'red';
team = 10;

console.log(10 < '10'); 

//논리연산자. p.526 true && true => true, true || false => true, false || false => false
console.log( 10 <= 10 || 10 < 10 ); // or연산자 값의 둘 중 하나가 트루여도 값이 트루가 나옴
console.log( 10 <= 10 && 10 < 10 ); //&& = 둘다 모두 트루여야 트루임, 둘 중 하나라도 폴스이면 폴스가 나옴
console.log( 10 <= 10 || !(10 < 10 )); // ! = 값의 반댓값을 보여줌