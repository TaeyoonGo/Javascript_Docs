// let 재할당 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello'
// text = 'hi'; 이렇게 하면 안됨!

//1. 상수
const MAX_FRUITS = 5;

//2. 재할당이 불가능한 상수변수 또는 변수
const orange ={
    name: '오렌지',
    color:'orange',
    display:'🍊'
}
// orange = {}

console.log(orange)
orange.name = "사과"
console.log(orange)
