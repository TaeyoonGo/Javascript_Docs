try{
    const array = new Array(99999999999999999999)
}catch (e){
    console.log(e)
    console.log()
    console.log(`예외 이름 : ${e.name}`)
    console.log(`예외 이름 : ${e.message}`)
}
