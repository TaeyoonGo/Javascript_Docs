// 주어진 second(초0가 지나면  함수를 호출함
// 단 Second가 0 보다 작으면 에러를 던지자 ⏱️

function runInDelay(seconds){
    return new Promise((resolve, reject)=>{
        if(!seconds || seconds < 0){
            reject(new Error(('seconds가 0보다 작음')))
        }
        setTimeout(resolve,seconds * 1000)
    })
}
runInDelay(1)
    .then(()=>{console.log('타이머 완료!')})
    .catch(console.error)
    .finally(()=>console.log('끝났다!'))
