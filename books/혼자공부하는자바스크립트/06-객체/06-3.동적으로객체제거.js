const student = {}

student.이름 = '고태윤'
student.취미 = '악기'
student.장래희망 = '생명공학자'

delete student.장래희망

console.log(JSON.stringify(student,null, 2))
