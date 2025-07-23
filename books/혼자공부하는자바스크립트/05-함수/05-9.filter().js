const numbers = [0,1,2,3,4,5];

const evenNumbers = numbers.filter(function(value){
    return value % 2 === 0;
})

console.log(numbers);
console.log(evenNumbers);
