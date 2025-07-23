String.prototype.contains = function (data){
    return this.indexOf(data) >= 0
}

Array.prototype.contains = function (data){
    return this.indexOf(data) >= 0
}


const a = '안녕하세요'
console.log(`안녕 in 안녕하세요 : ${a.contains('안녕')}`)
console.log(`없는데 in 안녕하세요 : ${a.contains('없는데')}`)

const b = [273,32,103,57,52]
console.log('273 in [273,32,103,57,52] :', b.contains(273))
console.log('0 [273,32,103,57,52] :', b.contains(0))
