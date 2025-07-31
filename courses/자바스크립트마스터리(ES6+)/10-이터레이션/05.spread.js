// Spread 연산자 , 전개구문
// 모든 Iterable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 촤르르륵 펼쳐 질 수 있다.
// func(...iterable)
// [...iterable]
// {...obj}
// EcmaScript 2018

function add(a,b,c){
    return a + b + c
}
const nums = [1,2,3]
console.log(add(...nums))

//Array concat
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1,...arr2]
console.log(arr3)

//object
const ellie = {name : 'Ellie',age:20,home:{address:'home'}}
const updated = {
    ...ellie,
    job:'s/w engineer'
}
console.log(ellie)
console.log(updated)
