// const book = {}
// book.name = '혼자 공부하는 파이썬';
// book.price = 18000;
// book.publisher = '한빛미디어'
// console.log(book)


// String.prototype.contain = function(data){
//     return this.indexOf(data) >= 0
// }
//
// Array.prototype.contains = function(data){
//     return this.indexOf(data) >= 0
// }
//
// const a = '안녕하세요'
// console.log('안녕 in 안녕하세요,',a.contain('안녕'))
// console.log('없는데 in 안녕하세요,',a.contain('없는데'))
//
// const b = [273,32,103,52,57]
// console.log('273 in [273,32,103,52,57]',b.contains(273))
// console.log('0 in [273,32,103,52,57]',b.contains(0))



// const books = [
//     {
//     name : '혼자공부하는파이썬',
//     price : 18000
//     },
//     {
//         name : 'HTML5 웹 프로그래밍 입문',
//         price : 26000
//     },
//     {
//         name : '머신러닝 딥러닝 실전 개발 입문',
//         price : 30000
//     },
//     {
//         name : '딥 러닝을 위한 수학',
//         price : 25000
//     }
// ]
//
// const output = _.sortBy(books,(book)=>book.price)
// console.log(JSON.stringify(output,null,2))


// function printLang(code){
//     return printLang._lang[code]
// }
//
// printLang._lang = {
//     ko:"한국어",
//     en:"영어"
// }
//
// console.log('printLang("ko")',printLang('ko'))
// console.log('printLang("En")',printLang('en'))

const degree = 90
let radian = degree * (Math.PI / 180)


console.log(Math.sin(radian))
