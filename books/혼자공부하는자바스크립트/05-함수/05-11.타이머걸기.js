setTimeout(()=>{
    console.log('1초 후에 실행됩니다.')
},1 * 1000)

let count = 0;
setInterval(()=>{
    console.log(`1초마다 실행됩니다.(${count}번쨰)`)
    count++
},1000)
