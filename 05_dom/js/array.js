//array.js
// console.log(products);
// for 반복문, 상품코드, 상품명, 카테고리(사무용품)만 콘솔에 출력.

// //사무용품 하위항목 출력하기
// for (let product of products) {
//   // console.log(product);
//   if ((product.category = "사무용품")) {
//     console.log(product.productName, product.productCode);
//   }
// }

// //이름중에 노트북이 들어간 상품 찾기
// products.forEach((elem) => {
//   if (elem.productName.indexOf("노트북") >= 0) {
//     console.log(
//       elem.productCode,
//       elem.productName,
//       elem.category,
//       elem.purchasePrice
//     );
//   }
// });

// //각 카테고리가 몇개인지를 찾기
// const categories = [];
// for (let product of products) {
//   if (categories.indexOf(product.category) < 0) {
//     categories.push(product.category);
//   }
// }
// console.log(categories);

// //5만원넘는 제품 찾기
// const priceOver50000 = []; //프라이스 50000만을 선언함
// for (let product of products) {
//   //for (let 각 개체 of 전체집단) {
//   if (product.purchasePrice > 50000) {
//     //if 조건문
//     priceOver50000.push(product.purchasePrice); // 컨스트에 담을 영역을 바구니에 담아줌
//   }
// }
// console.log(priceOver50000);

// //5만원이 넘는 상품중 첫번째 상품 찾아내기
// // const priceOver50000 = []; //프라이스 50000만을 선언함
// for (let product of products) {
//   //for (let 각 개체 of 전체집단) {
//   if (product.purchasePrice > 50000) {
//     //if 조건문
//     priceOver50000.push(product.purchasePrice); // 컨스트에 담을 영역을 바구니에 담아줌
//     break; //브레이크 문 만 넣으면 됨
//   }
// }
// console.log(priceOver50000);

// const priceunder50000 = []; //프라이스 50000만을 선언함
// for (let product of products) {
//   //for (let 각 개체 of 전체집단) {
//   if (product.purchasePrice < 50000) {
//     //if 조건문
//     priceunder50000.push(product.purchasePrice); // 컨스트에 담을 영역을 바구니에 담아줌
//   }
// }
// console.log(priceunder50000);

//각 각의 상품카테고리 별 상품 합계금액
let result = {};

let categorySum = {};

for (let product of products) {
  console.log(result[product.category]);
  if (result[product.category] == undefined) {
    result[product.category] = 0;
  }
  result[product.category] += product.purchasePrice;
}
console.log(result);
