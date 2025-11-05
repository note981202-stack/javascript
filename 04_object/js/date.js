// // date 객체.
// const now = new Date(); // [], {}
// console.log(now); // 현재 시간 알려줌
// console.log(now.getDate()); // 오늘 날짜를 알려줌
// console.log(now.getMonth()); // 1월이 0/ 2월이 1니까 11월은 10
// console.log(now);

// console.log(now.getDay()); // 일요일은 0, 월 1, 화2 // 2020년의 정보를 알려줌
// now.setMonth(11);
// now.setDate(0);
// //원래 12월 1일이 돼야 하는데 日값이 0이니까 11월 말일이 나옴

// const now = new Date(); //
// console.log(now);

// now.setMonth(month);
// now.setDate(0);
// let lastDate = now.getDate();
//-----------------------------------------------------------------//
// 년, 월 달력 출력.
let year = 2020;
let month = 11;

//숙제. drawCalendar (yyyy, mm) => drawCalendar(2020, 10)

const now = new Date();
//요일정보 계산하기.
now.setFullYear(year);
now.setMonth(month - 1);
now.setDate(1); // 1보다 하루전날 0일.
let spaces = now.getDay();
//말일정보 계산하기.
now.setMonth(month); // 11=> 12월.
now.setDate(0); //마지막날.
let lastDate = now.getDate();

console.log(now.getDay());
console.log(now);

//----------------------------------------------------------------//
//달력(말일(31,30,28/29), 1일의 요일정보를 알면 달력을 그릴 수 있음)
//<table><thead>......</thead>
//       <tbody>......</tbody></table>
let dayary = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let calStr =
  "<table border='1'><caption>" +
  year +
  "년" +
  month +
  "월</caption><thead><tr>";
//요일출력.
for (let i = 0; i < dayary.length; i++) {
  calStr += `<th>${dayary[i]}</th>`; //<th>를 반복문으로 7개를 만들어줌
}
//날짜 출력. tbody
calStr += "</tr></thead><tbody><tr>";
//공백 부분
for (let s = 0; s < spaces; s++) {
  //1째줄 빈공간 6개를 만들어줌    // spaces로 변수를 넣어줌
  calStr += "<td> </td>";
}
for (let d = 1; d <= lastDate; d++) {
  //날짜 출력.
  calStr += `<td>${d}</td>`;
  if ((d + spaces) % 7 == 0) {
    //★//
    calStr += "</tr><tr>"; //줄바꿈
  }
}

calStr += "</tr></tbody>";
calStr += "</table>";
document.writeln(calStr);
