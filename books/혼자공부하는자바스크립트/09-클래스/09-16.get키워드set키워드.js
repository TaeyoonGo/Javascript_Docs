class Square{
    #length

    constructor(length) {
        this.length = length
    }
    get length (){
        return this.#length
    }
    get perimeter(){
        return this.#length * 4
    }
    get area(){
        return this.#length * this.#length
    }
    set length(length){
        if(length <= 0){
            throw '길이는 0보다 커야 합니다.'
        }
        this.#length = length
    }
}
const squareA = new Square(10)
console.log(`한 변의 길이 : ${squareA.length}`)
console.log(`둘레 : ${squareA.perimeter}`)
console.log(`길이 : ${squareA.area}`)
const squareB = new Square(-10)
