




// console.log("전체상품목록", product);

//카테고리 영역누르면 카테고리가 뜰 수 있도록
const categories = [];
for (let product of products) {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
}
//셀렉트 태그에 하위요소 추가하기.
const categorySelect = document.querySelector("select.categories");
for (let category of categories) {     //반복작업의 시작.
  const option = document.createElement("option"); //옵션생성.
  option.value = category; //value 속성.
  option.textContent = category; //innerText 값 추가.
  categorySelect.appendChild(option); // 자식요소로 추가.
}





//변수 선언
let page = 1; //페이지를 저장하는 변수.
let tempList = []; //페이징 건수
tempList = products; //페이지 로드될 때 한번 처리

//이벤트 목록
//1) 카테고리 체인지 이벤트
//2) 페이지링크 클릭 이벤트


// 1)카테고리 체인지 이벤트
categorySelect //
  .addEventListener("change", (e) => {
    //
    const category = e.target.value;
    const filterProduct = [];
    for (let product of products) {
      //카테고리가 동일한 상품 이거나 전체(All) 선택일 경우.
      if (product.category == category || category == "All") {
        filterProduct.push(product);
      }
    }
    tempList = filterProduct; //조회된 결과 tempList 에 지정.
    page = 1; // 조회된 결과를 기준으로 1페이지부터 출력
    showProductList(tempList.slice(0, 5)); // 상품목록.
    showPagingList(tempList.length); // 페이징목록.
  });

// 2)페이지 이벤트. 페이지가 넘어가면 항목이 5개씩 바뀜
document
  .querySelector("div.pagination") //
  .addEventListener("click", (e) => {
    let pagingProducts = [];
    console.dir(e.target);
    //A태그 일경우만 처리
    if (e.target.nodeName == "A") {
      page = e.target.dataset.page; //data-page="2"
      showPagingList(tempList.legth); //페이징 목록 생성
      //페이지별 첫상품 ~ 마지막상품 생성.
      let start = 0,
        end = 0;
      start = (page - 1) * 5; //5
      end = page * 5; //10
      showProductList(tempList.slice(start, end)); //5개씩 출력.
    } //end of if.
  });
  
/*
 * 함수 목록.
 * 1) showProductList : 상품목록(5개씩) 출력.
 * 2) showPagingList : 조회된 건수를 기준으로 페이징 생성.
 */

// 1) showProductList : 상품목록을 화면에 출력.
let target = document.querySelector("#list"); // tbody.
function showProductList(productAry = []) {
  target.innerHTML = "";
  // tr>td*4 생성. => tbody에 appendChild
  const fields = ["productCode", "productName", "purchasePrice", "category"];
  let totalProduct = productAry;
  for (let product of totalProduct) {
    // 상품갯수만큼 반복.
    let tr = document.createElement("tr");
    // 항목만큼 반복.
    for (let field of fields) {
      let td = document.createElement("td");
      td.innerText = product[field];
      tr.appendChild(td); // tr부모-td자식
    }
    target.appendChild(tr); // 최종목적지 tbody.
  }
}
showProductList(tempList.slice(0, 5)); // ?? 전체목록에서 5개 상품만 출력하도록...

// 2) showPagingList : 페이징목록 생성함수.
let pagination = document.querySelector("div.pagination");
function showPagingList(totalCount = 50) {
  pagination.innerHTML = "";
  // << 1 2 3 4 5 .. 10 >>
  let startPage = 0,
    endPage = 0;
  let prev = false,
    next = false;
  // 시작, 마지막 페이지.
  endPage = Math.ceil(page / 10) * 10; // 10page.
  startPage = endPage - 9;
  // 건수를 계산한 마지막 페이지.
  let realEnd = Math.ceil(totalCount / 5); // 15page.
  if (endPage > realEnd) {
    endPage = realEnd; // 실제마지막 페이지를 계산.
  }
  // 이전, 이후 페이지 여부.
  if (startPage != 1) {
    prev = true;
  }
  if (endPage < realEnd) {
    next = true;
  }
  // <a href="#">1</a>
  // 이전페이지
  let tag = document.createElement("a");
  tag.innerHTML = "&laquo";
  tag.href = "#";
  tag.className = "disabled";
  // 페이지 값을 담아놓는 속성.
  tag.setAttribute("data-page", startPage - 1);
  pagination.appendChild(tag);
  if (prev) {
    tag.className = ""; // 활성화.
  }
  // 페이징 목록.
  for (let p = startPage; p <= endPage; p++) {
    let tag = document.createElement("a");
    tag.innerText = p;
    tag.href = "#";
    // 페이지 값을 담아놓는 속성.
    tag.setAttribute("data-page", p);
    if (p == page) {
      tag.className = "active";
    }
    pagination.appendChild(tag);
  }
  // 이후페이지.
  tag = document.createElement("a");
  tag.innerHTML = "&raquo";
  tag.href = "#";
  tag.className = "disabled";
  // 페이지 값을 담아놓는 속성.
  tag.setAttribute("data-page", endPage + 1);
  pagination.appendChild(tag);

  if (next) {
    tag.className = "";
  }
}
showPagingList(tempList.length); // ?? 전체상품의 갯수를 전달.

























































































  //------------------------------------------------------------------
// // 함수목록
// //1) showproductlist :상품목록 (5개씩) 출력
// //2)

// //상품 목록 배열추가
// //tr > td* => tbody appendChild
// let target = document.querySelector("#list");
// function showProductlist(productAry = []) {
//   target.innerHTML = "";
//   const fields = ["productCode", "productName", "purchasePrice", "category"];
//   let totalproduct = productAry;
//   for (let product of totalproduct) {
//     //상품의 갯수 만큼 반복.
//     let tr = document.createElement("tr");
//     //보여줘야하는 항목만큼.
//     for (let field of fields) {
//       let td = document.createElement("td");
//       td.innerText = product[field]; // product['productcode ~ category']
//       tr.appendChild(td); // tr부모 - td자식 연결
//     }
//     target.appendChild(tr); // 최종목적지가 tbody.
//   }
// }
// showProductlist(tempList.slice(0, 5));

// // (2)showPagingList 페이징목록 생성함수. 밑에 숫자 부분을 말함
// let pagination = document.querySelector("div.pagination");
// function showPaginglist(totalCount = 50) {
//   pagination.innerHTML = "";
//   // << 1 2 3 4 5 ...10 >>
//   let startPage = 0,
//     endPage = 0;
//   let prev = false,
//     next = false;
//   //시작, 마지막페이지.
//   endPage = Math.ceil(page / 10) * 10; // 10page.
//   startPage = endPage - 9;
//   //건수를 계산한 마지막 페이지
//   let realEnd = Math.ceil(totalCount / 5);
//   if (endPage > realEnd) {
//     endPage = realEnd; // 실제마지막 페이지를 계산.
//   }
//   //이전, 이후 페이지 여부.
//   if (startPage != 1) {
//     prev = true;
//   }
//   if (endPage < realEnd) {
//     next = true;
//   }

//   //    <a href="#">1</a>
//   //이전페이지
//   let tag = document.createElement("a");
//   tag.innerHTML = "&laquo";
//   tag.herf = "#";
//   tag.className = "disabled";
//   //페이지 값을 담아놓는 속성.
//   tag.setAttribute("data-page", startPage - 1);
//   pagination.appendChild(tag);
//   if (prev) {
//     tag.className = ""; //활성화.
//   }
//   // 페이징 목록.
//   for (let p = startPage; p <= endPage; p++) {
//     let tag = document.createElement("a");
//     tag.innerText = p;
//     tag.herf = "#";
//     //페이지 값을 담아놓는 속성.
//     tag.setAttribute("data-page", p);
//     if (p == page) {
//       tag.className = "active";
//     }
//     pagination.appendChild(tag);
//   }
//   //이후페이지
//   tag = document.createElement("a");
//   tag.innerHTML = "&raquo";
//   tag.herf = "#";
//   tag.className = "disabled";
//   //페이지 값을 담아놓는 속성.
//   tag.setAttribute("data-page", endPage + 1);
//   pagination.appendChild(tag);

//   if (next) {
//     tag.className = "";
//   }
// } //매개변수의 초기값50

// // showPaginglist(tempList.length);
// showPaginglist(50);
