function min(...items){
    let output = items[0]

    for(const item of items){
        if(output > item){
            output = item
        }
    }

    return output
}

// console.log(`min(52,273,32,103,275,24,57)중에서\n최소값 = ${min(52,273,32,103,275,24,57)}`)

function max(...items){
    let output = items[0]

    for (const item of items){
        if(output < item){
            output = item
        }
    }

    return output
}

console.log(`max(52,273,32,103,275,24,57)중에서\n최대값 = ${max(52,273,32,103,275,24,57)}`)
