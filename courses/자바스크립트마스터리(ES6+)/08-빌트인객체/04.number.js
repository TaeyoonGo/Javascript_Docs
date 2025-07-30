const num = 1234;
const num2 = new Number(123)
console.log(typeof num)
console.log(typeof num2)

console.log(Number.MAX_VALUE); // 숫자의 최대값
console.log(Number.MIN_VALUE); // 숫자의 최소값
console.log(Number.MAX_SAFE_INTEGER) // 숫자의 안전한 정수 최대값
console.log(Number.MIN_SAFE_INTEGER) // 숫자의 안전한 정수 최소값
console.log(Number.NaN); // 숫자가 아닌것
console.log(Number.NEGATIVE_INFINITY) // 음의 무한
console.log(Number.POSITIVE_INFINITY) // 양의 무한

if(num < Number.MAX_VALUE){

}
if(Number.isNaN(num)){
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed())
console.log(num4.toString())
console.log(num4.toLocaleString('ar-EG'))

// 원하는 자리수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); // 전체 자리수 표기가 안될때는 지수표기법

if(Number.EPSILON > 0 && Number.EPSILON < 1){
    console.log(Number.EPSILON) // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}
const num6 = 0.1 + 0.2 - 0.2 // 0.1
console.log(num6);

function isEqual(original ,expected){
    return Math.abs(original - expected) < Number.EPSILON
}

console.log(isEqual(1,1))
console.log(isEqual(0.1,0.1))
console.log(isEqual(num6,0.1))
