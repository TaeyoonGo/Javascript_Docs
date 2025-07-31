// 주어진 seconds(초0가 지나면 callback함수를 호출함
// 단 Second가 0 보다 작으면 에러를 던지자 ⏱️


function runInDelay(callback,seconds){
    if(seconds < 0){
        throw new Error('타이머는 0보다 커야합니다.')
    }
    if(!seconds){
        throw new Error('값을 넣어주세요')
    }
    setTimeout(callback,seconds * 1000);
}
try{
    runInDelay(()=>console.log('타이머 완료!'),-1)
}catch (error){
   console.log(error.message)
}
