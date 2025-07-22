let output = ''

// for (let i = 1 ; i < 10; i++){
//     for(let j =0; j < i; j++){
//         output += '*'
//     }
//
//     output += "\n"
// }


for(let i = 1; i < 15; i++){
    for(let j = 15; i < j; j--){
        output += ' '
    }
    for(let k = 0; k < i * 2 - 1; k++){
        output += '*'
    }


    output += '\n'
}

console.log(output)
