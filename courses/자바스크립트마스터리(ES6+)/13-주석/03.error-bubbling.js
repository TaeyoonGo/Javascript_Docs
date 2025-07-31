// Bubbling up, Propagating

function a(){
    throw new Error('error')
}
function b(){
    try{
        a();
    }catch (error){
        console.log('생각해보니까 이 에러는 내가 핸들링 할 수 없군')
        throw error
    }
}
function c(){
    b()
}
try{
    c();
}catch (e){
    console.log('Catched')
}
console.log('done')


