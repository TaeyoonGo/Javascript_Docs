class Pet{
    constructor(name,age) {
        this.name = name
        this.age = age
    }

    toString(){
        return `이름 :${this.name}\n 나이 :${this.age}`
    }
}

const pet = new Pet('구름',6)
console.log(pet)
console.log(pet + '')
