//11월 3일 과제
//학생번호, 학생명, 영어점수, 수학점수
//student에 학생 3명 저장
//영어점수+수학점수 = 합계점수내고 합계점수를 평균 낼것
//커밋 푸쉬해서 깃허브에 올려놓을것

let students=[]
students[0] = {
    Number: 1111,
    name: '김철수', 
    Escore: 70,
    Mscore: 80, 
}

students[1] = {
    Number: 2222,
    name: '이유리', 
    Escore: 80,
    Mscore: 90, 
}

students[2] = {
    Number: 3333,
    name: '이훈이', 
    Escore: 65,
    Mscore: 70, 
}

let result = {
    sum : students[0]['Escore'] + students[0]['Mscore'] + students[1]['Escore'] + students[1]['Mscore'] + students[2]['Escore'] + students[2]['Mscore'],
    average :(students[0]['Escore'] + students[0]['Mscore'] + students[1]['Escore'] + students[1]['Mscore'] + students[2]['Escore'])/3
}   
console.log(result['sum'])
console.log(result['average'])










