// function sumAll(a,b){
//     let output = 0;
//     for (let i = a; i < b; i++){
//         output += i;
//     }
//     return output;
// }
//
// console.log(`1부터 100까지의 합은 ${sumAll(1,100)}`)
// console.log(`5부터 50까지의 합은 ${sumAll(5,50)}`)
// function multiplyAll(a,b){
//     let output = 1;
//
//     for(let i = a; i < b; i++){
//         output *= i;
//     }
//     return output;
// }
// console.log(`1부터 10까지의 곱은 ${multiplyAll(1,10)}`)

// function min(array){
//     let output = array[0]
//
//     for(const item of array){
//         if(output > item){
//             output = item
//         }
//     }
//     return output;
// }
// function max(array){
//     let output = array[0];
//     for(const item of array){
//         if(output < item){
//             output = item
//         }
//     }
//     return output;
// }
// function simple (a,b,...c){
//     console.log(a,b,c)
// }
// simple(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17)
// const testArray = [52,273,32,103,275,24,57]
// console.log(`${testArray} 중에서`)
// console.log(`최소값 = ${min(testArray)}`)
// console.log(`최대값 = ${max(testArray)}`)
// function min(first, ...rests){
//     let output
//     let items
//
//     if(Array.isArray(first)){
//         output = first[0]
//         items = first
//     }else if (typeof(first) === "number"){
//         output = first
//         items = rests
//     }
//     for(const item of items){
//         if(output > item){
//             output = item
//         }
//     }
//     return output;
// }
// console.log(`min(배열) : ${min([52,273,32,103,275,24,57])}`)
// console.log(`min(숫자,...) : ${min(52,273,32,103,275,24,57)}`)

// a부터 b까지 범위를 지정했을 때 범위 안에 있는 숫자를 모두 곱하시오
// function multiplyAll(a,b){
//     let output = 1;
//     for(let i = a; i <= b; i++){
//         output *= i
//     }
//     return output
// }
// console.log(multiplyAll(1,2));
// console.log(multiplyAll(1,3));

//매개변수로 max([1,2,3,4])와 같은 배열을 받는 max()함수를 만들어보세요
// const max = function (array){
//     let output = array[0]
//     for(const item of array){
//         if(item > output){
//             output = item
//         }
//     }
//     return output
// }

//매개변수로 max(1,2,3,4)와 같이 숫자를 받는 max() 함수를 만들어보세요
// const max = function (...array){
//     let output = array[0]
//     for(const item of array){
//         if(item > output){
//             output = item
//         }
//     }
//     return output
// }

//max([1,2,3,4])와 max(1,2,3,4) 형태를 모두 입력할수 있는 max()함수를 만들어보세요
// const max = function (first,...rests){
//     let output;
//     let items;
//
//     if(Array.isArray(first)){
//         output = first[0];
//         items = first
//     }else if (typeof first === 'number'){
//         output = first;
//         items = rests
//     }
//
//     for(const item of items){
//         if(item > output){
//             output = item;
//         }
//     }
//
//
//     return output;
// }
// console.log(max(1,2,3,4))

// const numbers = [273,52,103,32,57]
//
// numbers.forEach((item,index,array)=>{
//     console.log(item,index,array)
// })

// 홀수만 추출 100이하의 수만 추출 5로 나눈 나머지가 0인 수만 추출
// let numbers = [273,25,75,52,103,32,57,24,76]
//
// numbers = numbers.filter((a)=>{
//     return a % 2 !== 0 && a <= 100 && a % 5 === 0
// })
//
// console.log(numbers)

// forEach
const array = ['사과','배','귤','바나나']

console.log('# for in 반복문')
array.forEach((item,index)=>{
    console.log(index)
})


console.log('# for of 반복문')
array.forEach((item,index)=>{
    console.log(item)
})
