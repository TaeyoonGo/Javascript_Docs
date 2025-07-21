const students = []
students.push({이름:'구름',국어:87,영어:98,수학:99,과학:90})
students.push({이름:'별이',국어:32,영어:46,수학:99,과학:66})
students.push({이름:'겨울',국어:76,영어:57,수학:99,과학:77})
students.push({이름:'바다',국어:54,영어:55,수학:99,과학:88})

let output = '이름\t총점\t평균\n'
for(const s of students){
    const sum = s.수학 + s.영어 + s.과학 + s.국어
    const average = sum/4

    output += `${s.이름}\t${sum}점\t${average}점\n`
}

console.log(output)
