//while3.js
//배열의 크기: 5/ 랜덤 값은 51 - 100 사이의 숫자

let randomAry = [];

for (let i = 0; i < 5; i++) {
  randomAry[i] = Math.ceil(Math.random() * 50) + 50;     //50부터 +50까지
}

console.log(randomAry);

let max = randomAry[0];
for (i = 0; i < randomAry.length; i++) {    //반복문
  if(max < randomAry[i]) {      //조건문
    max = randomAry[i];
  }
}
console.log('max값은 : ' + max);


let min = randomAry[0];
for (i = 0; i < randomAry.length; i++) {    //반복문
  if(min > randomAry[i]) {      //조건문
    min = randomAry[i];
  }
}
console.log('min값은 : ' + min);
//-------------------------------------
let x = 20;
let y = 30;
//x와 y의 값을 서로 교환.

let temp = x;
x = y; // x:30 , y:30
y = temp;
console.log(x,y);
//-------------------------------------

for (let j = 0; j < randomAry.length - 1; j++){
  for (let i = 0; i < randomAry.length - 1; i++){
   if (randomAry[i] > randomAry[i+1]) {
//x와 y의 값을 서로 교환.

    temp = randomAry[i];
    randomAry[i] = randomAry[i+1];
    randomAry[i+1] = temp;
  } 
 }
}
console.log(randomAry);