const testArray = [52,273,32,103,275,24,57]
// function min (array){
//     let output = array[0]
//     for(const item of array){
//         if(output > item){
//             output = item
//         }
//     }
//     return output
// }
// console.log(`${testArray} 중에서\n최소값 = ${min(testArray)}`)


function max(array){
    let output = array[0]
    for(const item of array){
        if(output < item){
            output = item
        }
    }
    return output
}
console.log(`${testArray} 중에서\n최대값 = ${max(testArray)}`)
