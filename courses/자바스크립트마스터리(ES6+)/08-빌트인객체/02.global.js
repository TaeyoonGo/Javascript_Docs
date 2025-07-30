console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);
console.clear()
eval('const num = 2; console.log(num)')
console.log(isFinite(1))
console.log(isFinite(Infinity))

console.log(parseFloat('12.34'))
console.log(parseInt('12.34'))
console.log(parseInt('12'))

//URL (URI , Uniform Resource Identifier 하위 개념)
//아스키 문자로만 구성되어야 함
//한글이나 특수문자는 이스케이프 처리를 해야
const url = 'https://드림코딩.com'
const escape = encodeURI(url)
console.log(escape)
const decoded = decodeURI(escape)
console.log(decoded)

//전체 URL이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com'
console.log(encodeURIComponent(part))
