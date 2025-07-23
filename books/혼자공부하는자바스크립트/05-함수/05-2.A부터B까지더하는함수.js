// function sum(a,b){
//     let output = 0;
//
//     for(let i = a; i <= b; i++){
//         output += i
//     }
//
//     return output
// }
//
// console.log(`1부터 100까지의 합은${sum(1,100)}`)
// console.log(`1부터 500까지의 합은${sum(1,500)}`)


function multiply(a,b){
    let output = a;

    for(let i = a; i <= b; i++){
        output *= i
    }

    return output
}

console.log(`1부터 5까지의 곱의 값은 ${multiply(1,5)}`)
