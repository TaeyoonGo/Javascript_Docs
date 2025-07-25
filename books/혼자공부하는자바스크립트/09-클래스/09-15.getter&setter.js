class Square{
    #length

    constructor(length) {
        this.setLength(length)
    }
    setLength(value) {
        if(value <= 0){
            throw '길이는 0보다 커야 합니다.'
        }
        this.#length = value
    }
    getLength(value){
        return this.#length
    }
    getPerimeter() {return 4 * this.#length}
    getArea(){return this.#length * this.#length}
}
const square = new Square(10)
console.log(`한 번에 길이는 ${square.getLength()}`)

square.setLength(-10)
