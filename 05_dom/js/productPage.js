// 여기 부분 코드 좀 이상함 집에서 잡아내

//카테고리 영역누르면 카테고리가 뜰 수 있도록
const categories = [];
for (let product of products) {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
}

const categorySelect = document.querySelector("select.categories");
for (let category of categories) {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categorySelect.appendChild(option);
}

//이벤트 등록.
//카테고리에 조회누르면 아래에 항목이 뜸
categorySelect //
  .addEventListener("change", (e) => {
    const category = e.target.value;
    const filterProduct = [];
    for (let product of products) {
      //카테고리가 동일한 상품 이거나 전체(All) 선택일 경우.
      if (product.category == category || category == "All") {
        filterProduct.push(product);
      }
    }
    showProductlist(filterProduct);
  });

//페이지 이벤트. 페이지가 넘어가면 항목이 5개씩 바뀜
let page = 1;
document
  .querySelector("div.pagination") //
  .addEventListener("click", (e) => {
    let pagingProducts = [];
    console.dir(e.target);
    //A태그 일경우만 처리
    if (e.target.nodeName == "A") {
      console.log("aaaaaaa");
      e.preventDefault();
      page = e.target.innerText;
      if (Number(page) == NaN) {
        return;
      }
      showPaginglist();
      let start = 0,
        end = 0;
      start = (page - 1) * 5;
      end = page * 5;
      for (let i = start; i < end; i++) {
        // console.log(products[i]);
        pagingProducts.push(products[i]); // 5개씩 배열에 담기.
      }
      showPaginglist();
      showProductlist(pagingProducts); //5개씩 출력.
    }
  });

//상품 목록 배열추가
//tr > td* => tbody appendChild
let target = document.querySelector("#list");
function showProductlist(productAry = []) {
  target.innerHTML = "";
  const fields = ["productCode", "productName", "purchasePrice", "category"];
  let totalproduct = productAry;
  for (let product of totalproduct) {
    //상품의 갯수 만큼 반복.
    let tr = document.createElement("tr");
    //보여줘야하는 항목만큼.
    for (let field of fields) {
      let td = document.createElement("td");
      td.innerText = product[field]; // product['productcode ~ category']
      tr.appendChild(td); // tr부모 - td자식 연결
    }
    target.appendChild(tr); // 최종목적지가 tbody.
  }
}
showProductlist(products);

//페이징목록 생성함수. 밑에 숫자 부분을 말함
let pagination = document.querySelector("div.pagination");
function showPaginglist(totalCount = 50) {
  pagination.innerHTML = "";
  let startPage = 0,
    endPage = 0;
  let prev = false,
    next = false;
  //시작, 마지막페이지.
  endPage = Math.ceil(page / 10) * 10; // 10page.
  startPage = endPage - 9;
  let realEnd = Math.ceil(totalCount / 5);
  if (endPage > realEnd) {
    endPage = realEnd; // 실제마지막 페이지를 계산.
  }
  //이전, 이후 페이지.
  if (startPage != 1) {
    prev = true;
  }
  if (endPage < realEnd) {
    next = true;
  }

  //    <a href="#">1</a>
  //이전페이지
  let tag = document.createElement("a");
  tag.innerHTML = "&laquo";
  tag.herf = "#";
  tag.className = "disabled";
  pagination.appendChild(tag);
  if (prev) {
    tag.className = ""; //활성화.
  } // 페이징 목록.
  for (let p = startPage; p <= endPage; p++) {
    let tag = document.createElement("a");
    tag.innerText = p;
    tag.herf = "#";
    if (p == page) {
      tag.className = "active";
    }
    pagination.appendChild(tag);
  }
  //이후페이지
  tag = document.createElement("a");
  tag.innerHTML = "&laquo";
  tag.herf = "#";
  tag.className = "disabled";
  pagination.appendChild(tag);
  if (next) {
  }
} //매개변수의 초기값50
showPaginglist(50);
