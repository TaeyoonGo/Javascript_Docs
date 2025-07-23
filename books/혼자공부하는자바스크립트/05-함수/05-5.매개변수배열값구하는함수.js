const testArray = [52, 273, 32, 103, 275, 24, 57]

// function min(first, ...rests) {
//     let output;
//     let items
//
//
//     if (Array.isArray(first)) {
//         output = first[0];
//         items = first
//     } else if (typeof(first) === 'number') {
//         output = first
//         items = rests
//     }
//     for (const item of items) {
//         if (item < output) {
//             output = item
//         }
//     }
//
//     return output
// }


function max(first, ...rests) {
    let output
    let items

    if (Array.isArray(first)) {
        output = first[0]
        items = first
    }else if (typeof first === 'number'){
        output = first
        items = rests
    }
    for(const item of items){
        if(output < item){
            output = item
        }
    }
    return output
}


// console.log(`${testArray} 중에서\n최소값 = ${min(testArray)}`)
// console.log(`min(52,273,32,103,275,24,57)중에서\n최소값 = ${min(52,273,32,103,275,24,57)}`)
console.log(`${testArray} 중에서\n최대값 = ${max(testArray)}`)
console.log(`max(52,273,32,103,275,24,57)중에서\n최소값 = ${max(52, 273, 32, 103, 275, 24, 57)}`)
