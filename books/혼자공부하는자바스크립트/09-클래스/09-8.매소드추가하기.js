class Student {
    constructor(이름,국어,영어,수학,과학) {
        this.이름 = 이름
        this.국어 = 국어
        this.영어 = 영어
        this.수학 = 수학
        this.과학 = 과학
    }
    getSum(){
        return this.국어 + this.영어 + this.수학 + this.과학
    }
    getAverage(){
        return this.getSum() / 4
    }
    toString(){
        return `${this.이름}\t${this.getSum()}점\t${this.getAverage()}점`
    }
}

const students = []
students.push(new Student('구름',97,100,23,40))
students.push(new Student('겨울',100,100,100,100))
