//사용자에게 숫자를 입력받아 양수,0,음수를 구분하는 프로그램을 만드세요.
// const rawInput = prompt('숫자를 입력해주세요')
// const number = Number(rawInput)
// if(number > 0){
//     alert('양수입니다.')
// }else if (number === 0 ){
//     alert('0입니다.')
// }else{
//     alert('음수입니다.')
// }

//사용자에게 숫자를 입력받아 홀수와 짝수를 구분하는 프로그램을 만드세요.
// const a = Number(prompt('숫자를 입력해주세요',''))
// let message;
// if(a % 2 === 0){
//     message = '짝수'
// }else{
//     message = '홀수'
// }
// alert(`입력한 숫자는 ${message}입니다.`)

// 현재가 몇 월인지 확인하고, 계절을 구분하는 프로그램을 만들어보세요.
// const a = Number(prompt('월을 입력해주세요.', ''))
// let message;
// if(a <= 3){
//     message = '봄'
// }else if (3 < a  && a <= 6){
//     message = '여름'
// }else if (6 < a  && a <= 9){
//     message = '가을'
// }else{
//     message = '겨울'
// }
// alert(`${message}입니다.`)

// 사용자에게 두 개의 숫자를 입력받아, 어느 숫자가 더 큰지 또는 같은지를 출력하는 프로그램을 작성하세요.
// 출력 예시: 첫 번째 숫자가 더 큽니다., 두 숫자는 같습니다.
// const a = Number(prompt('숫자를 입력해주세요'))
// const b = Number(prompt('숫자를 입력해주세요'))
// if(a > b){
//     alert('a가 b보다 큽니다.')
// }else if (a === b){
//     alert('a랑 b랑 같습니다.')
// }else{
//     alert('b가 a보다 큽니다.')
// }

// 성적 등급 판별 프로그램
// 사용자에게 0~100 사이의 점수를 입력받아 다음 기준에 따라 성적 등급을 출력하세요.
// 90 이상: A
// 80 이상: B
// 70 이상: C
// 60 이상: D
// 그 외: F
// const a = Number(prompt('성적을 입력해주세요'))
// let grade;
// if(a >= 90){
//     grade = 'a'
// }else if (a >= 80 && a < 90){
//     grade = 'b'
// }else if (a >= 70 && a < 80){
//     grade = 'c'
// }else if (a >= 60 && a < 70){
//     grade = 'e'
// }else{
//     grade = 'f'
// }
// alert(`성적은 ${grade}입니다.`)

// 비밀번호 확인 프로그램
// 미리 저장된 비밀번호(예: 1234)와 사용자가 입력한 비밀번호를 비교하여 일치 여부를 출력하세요.
// 출력 예시: 비밀번호가 맞습니다. / 비밀번호가 틀렸습니다.
// const value = 1234
// const a = Number(prompt('비밀번호를 입력해주세요'))
// if(a === value){
//     alert('비밀번호가 맞습니다.')
// }else{
//     alert('비밀번호가 틀렸습니다')
// }

// 윤년 판별 프로그램
// 사용자에게 연도를 입력받아 그 해가 윤년인지 아닌지 판별하는 프로그램을 작성하세요.
// 윤년의 조건:
// 4의 배수이면서 100의 배수가 아닐 때 또는 400의 배수일 때
// 출력 예시: 윤년입니다. / 윤년이 아닙니다.
// const a = Number(prompt('년도를 입력해주세요',''))
// if((a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0)){
//     alert('윤년입니다.')
// }else{
//     alert('윤년이 아닙니다.')
// }
// 나이에 따른 입장료 할인 프로그램
// 사용자에게 나이를 입력받아 다음 기준에 따라 입장료를 출력하세요.
// 0~3세: 무료
// 4~12세: 50% 할인
// 13~64세: 정상 요금
// 65세 이상: 30% 할인
// (기본 요금은 10,000원이라고 가정)
// const a = Number(prompt('나이를 입력해주세요', ''))
// let count = 10000
// if (a <= 3) {
//     count = 0;
// } else if (a <= 12) {
//     count = count * 0.5
// }else if (a <= 64){
//     count = count;
// }else{
//     count = count * 0.3;
// }
//
// alert(`값은 ${count} 입니다.`)
