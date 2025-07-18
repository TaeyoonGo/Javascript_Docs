/*사용자로부터 숫자를 입력받아 cm을 inch 로 변환
* 1cm은 0.393701 inch
* */
// const rawInput = prompt('cm을 입력해주세요')
// const cm = Number(rawInput)
// const inch = cm * 0.393701
// alert(`${cm}cm는 ${inch}inch 입니다.`)

/* 사용자로부터 원의 반지름을 입력받아 원의 넓이와 둘레를 구하는 프로그램
* 넓이는 3.14 * 반지름 * 반지름 , 둘레 = 2 * 3.14 * 반지름
* */
// const rawInput = prompt('원의 반지름을 입력해주세요')
// const radius = Number(rawInput)
// const pie = 3.14
// const  shape= pie * radius * radius
// const round = 2 * pie * radius
// alert(`원의 반지름 : ${radius}
// 원의 넓이 : ${shape}
// 원의 둘레 : ${round}`)

/*
* 현재 환율을 기반으로 사용자에게 숫자를 입력받아 달러 (USD)에서 원화 (KRW)로 환율을 변환
* 1달러 1207원
* */
// const rawInput = prompt('달러 단위의 금액을 입력해주세요')
// const dollar = Number(rawInput)
// const won = dollar * 1207
// alert(`달러 : ${dollar}
// -> 원화 : ${won}`)

/* 사용자로부터 키(cm)와 몸무게(kg)를 입력받아 BMI를 계산하는 프로그램
 * BMI = 몸무게(kg) / (키(m) * 키(m))
 * (cm를 m로 변환해서 계산: cm / 100)
 */
// const rawCmInput = prompt('키가 몇CM 인가요?')
// const rawKgInput = prompt('몸무게는 몇KG 인가요?')
// const kg = Number(rawKgInput);
// const cm = Number(rawCmInput);
// const m = cm / 100
// const bmi = kg / (m * m)
// alert(`BMI의 수치는 ${bmi}입니다.`)
/* 사용자로부터 밑변과 높이를 입력받아 삼각형의 넓이를 구하는 프로그램
 * 넓이 = (밑변 * 높이) / 2
 */
// const rawInputWidth = prompt('밑변은 몇CM 인가요?')
// const rawInputHeight = prompt('높이는 몇CM 인가요?')
// const width = Number(rawInputWidth)
// const height = Number(rawInputHeight)
// const shape = width * height / 2
// alert(`삼격형의 넓이는 ${shape}입니다.`)
/* 사용자로부터 초(second)를 입력받아
 * 시:분:초 형태로 변환하는 프로그램
 * 예: 3665초 → 1시간 1분 5초
 */
// const rawInput = prompt('Second 입력해주세요')
// const second = Number(rawInput)
// const hour = Math.floor(second / 3600)
// const minute = Math.floor(second % 3600 / 60)
// const seconds = second % 60
// alert(`${second}초의 시간은 ${hour}시간 ${minute}분 ${seconds}초`)

/* 사용자로부터 연필 개수를 입력받아
 * 1통에 12자루씩 담을 때 필요한 통의 수를 계산하는 프로그램
 * (예: 25자루 → 3통 필요)
 */
// const rawInput = prompt('연필 개수를 입력해주세요')
// const pencil = Number(rawInput);
// const dozens = Math.ceil(pencil / 12)
// alert(`${pencil}자루 -> ${dozens}통 필요`)

/* 사용자로부터 정수를 입력받아
 * 각 자리수의 합을 구하는 프로그램
 * 예: 123 → 1 + 2 + 3 = 6
 */
// const rawInput = prompt('값을 입력해주세요')
// const value = String(rawInput)
// let sum = 0;
// for(let i = 0; i < value.length; i++){
//     sum += Number(value[i]);
// }
// alert(sum);
