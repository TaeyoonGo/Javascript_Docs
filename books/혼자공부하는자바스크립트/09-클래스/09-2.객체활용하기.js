const students = []
students.push({이름:'구름',국어:100,영어:80,수학:30,과학:100})
students.push({이름:'겨울',국어:100,영어:100,수학:100,과학:100})
students.push({이름:'가을',국어:70,영어:40,수학:30,과학:50})
students.push({이름:'별',국어:80,영어:30,수학:40,과학:20})


let output ='이름\t총점\t평균\n'

for(const s of students){
    const sum = s.국어 + s.영어 + s.수학 + s.과학
    const average = sum / 4
    output += `${s.이름}\t${sum}점\t${average}점\n`
}
console.log(output)
