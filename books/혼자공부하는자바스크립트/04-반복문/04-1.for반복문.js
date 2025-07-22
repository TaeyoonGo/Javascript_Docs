const todos = ['우유 구매','업무 메일 확인하기','필라테스 수업']
//for in 반복문
// for (const i in todos){
//     console.log(`${i}번째 할일 ${todos[i]}`)
// }

//for of 반복문
// for(const i of todos){
//     console.log(`오늘의 할일 : ${i}`)
// }

//for 반복문
// for(let i =0; i<todos.length; i++){
//     console.log(`${i}번째 할일 : ${todos[i]}`)
// }

//for 반복문 역순
for (let i = todos.length - 1; i >= 0; i--){
    console.log(`${i}번째 할일 : ${todos[i]}`)
}
