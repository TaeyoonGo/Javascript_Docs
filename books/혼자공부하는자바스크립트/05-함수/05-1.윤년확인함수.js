function isLeapYear(year){
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
}

console.log(`2020년은 윤년일까 === ${isLeapYear(2020)}`)
console.log(`2010년은 윤년일까 === ${isLeapYear(2010)}`)
console.log(`2000년은 윤년일까 === ${isLeapYear(2000)}`)
console.log(`1990년 윤년일까 === ${isLeapYear(1990)}`)
