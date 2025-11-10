// array.js
console.log(products);
// for반복문. 상품코드,상품명,카테고리,가격..만 콘솔에 출력.
// 상품명에 "노트북" 포함

let result = {}; // { 전자기기: 0, 음향기기: 0, 모바일기기: 0, 액세서리: 0 };
// result["전자기기"] = 0;
// result["음향기기"] = 0;
//console.log(result['equal50000']);
// 상품카테고리별: 상품합계금액 => {전자기기: 170000, 음향기기:  5540000, ... }
for (let product of products) {
  // 카테고리가 생성이 되었는 지 여부..판단.
  // 없으면 카테고리 생성.
  if (result[product.category] == undefined) {
    result[product.category] = 0; // {전자기기:0}
  }
  // 있으면 기존의 값에 가격을 누적.
  result[product.category] += product.purchasePrice;
}
console.log(result);