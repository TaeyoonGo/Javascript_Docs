function createStudent(이름,국어,영어,수학,과학){
    return {
        이름,국어,영어,수학,과학,
        getSum(){
            return this.국어 + this.영어 + this.수학 + this.과학
        },
        getAverage(){
            return this.getSum() /4
        },
        toString(){
            return `${this.이름}\t${this.getSum()}점\t${this.getAverage()}점\n`
        }
    }
}
const students = []
students.push(createStudent('구름',87,98,88,90))
students.push(createStudent('겨울',100,100,100,100))
students.push(createStudent('가을',30,40,50,60))
students.push(createStudent('봄이',100,40,50,20))

let output = '이름\t총점\t평균\n'
for (const s of students){
    output += s.toString()
}
console.log(output)
