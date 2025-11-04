//매개값으로 number, string, array 사용.   - 지금하는 것들은 당장 이해 안돼도 괜찮다
function doItFunction(param) {
  //파람 은 매개 변수를 의미함
  let x = 10; //x라는 변수에 10을 저장한다는 말
  let result = param(x);
  console.log(result);
}

//매개값의 2배를 반환.
const get2Times = (n) => {
  let result = n * 2;
  return result;
};

//매개값의 4배를 반환.
const get4Times = (n) => {
  let result = n * 4;
  return result;
};
doItFunction(get2Times);
doItFunction(get4Times);
