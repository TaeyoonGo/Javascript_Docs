class Square{
    #length
    static #counter = 0
    static get counter () {
        return Square.#counter
    }
    constructor(length) {
        this.#length = length
        Square.#counter += 1
    }

    static perimeterOf(length){
        return length * 4
    }
    static areaOf(length){
        return length * length
    }

    get length() {return this.#length}
    get perimeter () {return this.#length * 4}
    get area() {return this.#length * this.#length}

    set length (length){
        if(length <= 0){
            throw '길이는 0보다 커야 합니다'
        }
        this.#length = length
    }
}

//static 속성 사용하기
const squareA = new Square(10)
const squareB = new Square(20)
const squareC = new Square(30)
console.log(`지금까지 생성된 Square 인스턴스는 ${Square.counter}입니다.`)

console.log(`한 변의 길이가 20인 정사각형 둘레는 ${Square.perimeterOf(20)}`)
console.log(`한 변의 길이가 30인 정사각형 넓이는 ${Square.areaOf(30)}`)
