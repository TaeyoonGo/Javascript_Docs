// let numbers = [273,25,75,52,103,32,57,24,76]
// numbers = numbers.filter((value)=>{
//     return value % 2 !== 0 && value <= 100 && value % 5 === 0
// })
// console.log(numbers)


const array = ['사과','배','귤','바나나']

console.log('#for in 반복문')
array.forEach((item,index)=>{
    console.log(index)
})
console.log('#for of 반복문')
array.forEach((item,index)=>{
    console.log(item)
})
;
