const object = {
    name : '혼자 공부하는 파이썬',
    price : 18000,
    publisher : '한빛미디어'
}

const {name , price} = object
console.log('#속성 이름 그대로 꺼내서 출력하기')
console.log(name,price)
console.log('')

const {a= name, b= price} = object
console.log('#다른 이름으로 속성 꺼내서 출력하기')
console.log(a,b)

