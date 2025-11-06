// dom 제어-------------------------------------------------------------------------------------
let yyyy = 2025,
  mm = 11;

document
  .querySelector('input[name="yyyy"]') // 이름이 yyyy인 인풋 테그가 체인지 이벤트가 변경되면 출력된다
  .addEventListener("change", (e) => {
    console.log(e.target.value);
    yyyy = e.target.value;
    // 달력 그리는 함수 호출
    showCalendar(yyyy, mm);
  });

document
  .querySelector('input[name="mm"]') // 이름이 yyyy인 인풋 테그가 체인지 이벤트가 변경되면 출력된다
  .addEventListener("change", (e) => {
    console.log(e.target.value);
    mm = e.target.value;
    showCalendar(yyyy, mm);
  });

// thead 부분.------------------------------------------------------------------------------

function showHeader() {
  //thead
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let tr = document.createElement("tr"); //tr
  for (let day of days) {
    // for 반복문.
    console.log(day);
    let th = document.createElement("th");
    if (day == "Sun") {
      th.className = "sunday"; //th class="sunday"
    } else if (day == "Sat") {
      th.className = "saturday"; //th class="saturday"
    }
    th.innerText = day;
    tr.appendChild(th);
  }
  document.querySelector("table>thead").appendChild(tr); //thead > tr생성
}
showHeader();

function showCalendar(year, month) {
  //기존의 값 삭제 하고 새로운 달 그려줌
  document.querySelector("table>tbody").innerHTML = "";
  // console.log(year, month);
  const now = new Date(); // 공백 만들어 넣기
  now.setFullYear(year);
  now.setMonth(month - 1);
  now.setDate(1); // 1보다 하루전날 0일.
  let spaces = now.getDay();

  let tr = document.createElement("tr"); //tr
  for (let s = 0; s < spaces; s++) {
    let td = document.createElement("td");
    tr.appendChild(td);
  }

  //tbody---------------------------------------------------------------------------------
  for (let d = 1; d <= 30; d++) {
    let td = document.createElement("td");
    td.innerText = d;
    tr.appendChild(td);
    //새로운 tr
    if ((spaces + d) % 7 == 0) {
      //7일씩 끊고 다음줄로 넘김
      td.className = "saturday";
      document.querySelector("table>tbody").appendChild(tr);
      tr = document.createElement("tr"); // tr
    } else if ((spaces + d) % 7 == 1) {
      td.className = "sunday"; // class 속성을 지정
    }
  }
  document.querySelector("table>tbody").appendChild(tr);
}
showCalendar(yyyy, mm);









=

:

.


