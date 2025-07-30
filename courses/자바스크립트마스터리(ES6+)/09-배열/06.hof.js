const fruits = ['🍌', '🍓', '🍇', '🍓']
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}
console.clear();
// forEach : 배열을 빙글 빙글 돌면서 원하는것(콜백함수)을 할때
fruits.forEach(function(value,index,array){
    console.log('---------------');
    console.log(value);
    console.log(index);
    console.log(array);
})
console.clear();
fruits.forEach((value) => console.log(value));

// 조건에 맞는(콜백함수) 아이템을 찾을 때 사용
// find: 제일 먼저 조건에 맞는 아이템을 반환
const item1 = {name :'🥝',price:2}
const item2 = {name :'🍓',price:3}
const item3 = {name :'🍎',price:1}
const products = [item1,item2,item3,item1]
let result= products.find((value) => value.name === '🍎')
console.log(result)

// findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 변환
result= products.findIndex((value) => value.name === '🍎')
console.log(result)

// some : 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === '🥝');
console.log(result)

// every: 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === '🥝');
console.log(result)

// filter : 조건에 맞는 모든 아이템을 새로운 배열로
result = products.filter((item) => item.name === '🥝');
console.log(result)

console.clear();

//Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
const nums = [1,2,3,4,5]
result = nums.map((value) => value * 2)
console.log(result)
result = nums.map((value)=>{
    if(value % 2 === 0 ){
       return value * 2
    }
    else{
        return value
    }
})
console.log(result)

//flatmap: 중첩된 배열을 쫘악 펴줌
result = nums.map((item)=>[1,2])
console.log(result)

result = nums.flatMap(item => [1,2])
console.log(result)

result = ['dream','coding'].map(text => text.split(''));
console.log(result)

result = ['dream','coding'].flatMap(text => text.split(''));
console.log(result)

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 정렬하고, 기존의 배열을 변경
const texts = ['hi' , 'abc']
texts.sort();
console.log(texts);

const numbers = [1,2,3,10,24,55]
numbers.sort();
console.log(numbers);

// < 0 A가 앞으로 정렬 , 오름차순
// > 0 B가 앞으로 정렬 , 내림차순
numbers.sort((a,b) => a-b);
console.log(numbers)

// reduce 배열의 요소들을 접어서 값을 하나로!
result = [1,2,3,4,5].reduce((sum,value) => (sum += value),0)
console.log(result)
