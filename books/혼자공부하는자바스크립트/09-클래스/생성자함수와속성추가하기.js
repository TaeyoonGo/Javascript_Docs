class Student{
    constructor(이름,국어,영어,수학,과학){
        this.이름 = 이름,
        this.국어 = 국어,
        this.영어 = 영어,
        this.수학 = 수학,
        this.과학 = 과학
    }
}

const students = []
students.push(new Student('구름',42,33,66,77))
students.push(new Student('별이',55,33,66,77))
students.push(new Student('가을',100,34,47,10))
students.push(new Student('겨울',100,99,55,100))

console.log(students)
