const object = {
    name : '혼자 공부하는 파이썬',
    price : 18000,
    publisher : '한빛미디어'
}

object.name = object.name !== undefined ? object.name : '제목 미정'
object.anchor = object.anchor !== undefined ? object.anchor : '저자 미상'

console.log(JSON.stringify(object,null,2))
