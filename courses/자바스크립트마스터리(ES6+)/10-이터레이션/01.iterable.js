// Iterable 하다는건! 순회가 가능하다는 거지!
// [Symbol.iterator](): Iterator;
// 심블정의를 가진 객체나, 특정한 함수가 Iterator 리턴한다는것은
// 순회 가능한 객체이다 라는걸 알 수 있다.
// 순회가 가능하면 무엇을 할수있냐? for..of , spreed
const array = [1,2,3]
for (const item of array.entries()){
    console.log(item)
}

const obj = {0:1,1:2}
for(const item in obj){
    console.log(item)
}

const iterator = array.values();
while(true){
    const item =iterator.next();
    if(item.done) break;
    console.log(item.value)
}
