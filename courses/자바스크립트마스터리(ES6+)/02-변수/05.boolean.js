let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용예
let isFree = true;
let isActivate = false;
let isEntrolled = true;

console.clear()
// falsy
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)

// truthy
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);
