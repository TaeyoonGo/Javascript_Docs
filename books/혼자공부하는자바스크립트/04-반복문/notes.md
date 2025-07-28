# 반복문

***

## 04-1 배열

> 배열은 여러 자료를 묶어서 활용할 수 있는 특수한 자료

### 배열 만들기

- 배열(array)는 여러 개의 변수를 한 번에 선언해 다룰 수 있는 자료형
- 배열은 대괄호 [] 를 통해 생성 내부의 값은 쉼표로 구분
- 배열 내부의 값을 요소(element)

### 배열 요소에 접근하기

- 배열의 요소의 순서는 index

```js
const fruits = ['사과', '배', '키위', '바나나']
console.log(fruits[0]) //사과
```

### 배열 개수 확인하기

- 배열 내부에 들어 있는 요소의 개수를 확인할 때는 배열의 length 속성 사용

```js
const fruits = ['사과', '배', '키위', '바나나']
console.log(fruits.length) // 4
console.log(fruits[fruits.length - 1]) // 바나나
```

### 배열 뒷부분에 요소 추가하기

#### push() 매소드를 사용 배열 뒷부분에 요소 추가하기

- 배열의 뒷부분에 요소를 추가할때는 push()매소드 사용

```js
const fruits = ['사과', '배', '키위', '바나나']
fruits.push('딸기')
console.log(fruits) //['사과','배','키위','바나나','딸기']
```

#### 인덱스를 사용해 배열 뒷부분에 요소 추가하기

- length 속성을 사용하여 배열의 마지막 위치에 추가

```js
const fruits = ['사과', '배', '키위', '바나나']
fruits[fruits.length] = '딸기'
console.log(fruits) //['사과','배','키위','바나나','딸기']
```

### 배열 요소 제거하기

#### 인덱스를 기반으로 제거하는 경우

- splice() 메소드를 활용
- 배열.splice(인덱스,제거할 요소의 갯수)

```js
const fruits = ['사과', '배', '키위', '바나나']
fruits.splice(2, 1)
console.log(fruits) // ['사과', '배', '바나나']
```

#### 값을 기반으로 제거하는 경우

- 배열 내부에서 값을 찾는 indexOf() 메소드를 활용해서 값을 찾은 후 splice() 메소드로 제거
- indexOf() 매서드는 값이 없으면 -1을 return

```js
const fruits = ['사과', '배', '키위', '바나나']
const index = fruits.indexOf('키위')
console.log(index) // 2
fruits.splice(index, 1)
console.log(fruits) // ['사과', '배', '바나나']
```

##### 문자열 indexOf Method

- 특정 문자열의 위치를 찾을 수 있음 (배열 사용법과 유사)

### 배열의 특정 위치에 요소 추가하기

- splice() Method 사용

```js
const fruits = ['사과', '배', '키위', '바나나']
fruits.splice(1, 0, '양파')
console.log(fruits) // ['사과','양파' ,'배', '키위', '바나나']
```

### 자료의 비파괴와 파괴

- 비파과적 처리 : 처리 후에 원본 내용이 변경되지 않습니다.
- 파괴적 처리 : 처리 후에 원본 내용이 변경됩니다.

*** 

## 04-2 반복문

### for in 반복문

- 반복변수에는 index
- 조금 위험한 반복문으로 for of 반복문이나 for 반복문 사용 권장

```js
for (const 반복변수 in 배열또는객체) {
    문장
}
```

### for of 반복문

- 반복변수에는 요소의 값

```js
for (const 반복변수 of 배열또는객체) {
    문장
}
```

### for 반복문

- 특정 횟수를 반복하고 싶을때 사용하는 반복문
- 다른 반복문과 달리 let 선언
- 반복문을 배열과 조합하려면 보통 배열의 length 속성만큼 반복돌려서 사용

```js
for (let i = 0; i < 반복횟수; i++) {
    문장
}
```

### while 반복문

- while 반복문은 불 표현식이 true 계속 반복
- 조건이 거짓으로 문장이 없을 경우 계속 반복되는데 이것을 무한 루프라고 합니다.
- while 반복문은 조건에 큰 비중이 있을때 사용

```js
while (불표현식) {
    문장
}
```

### break 키워드

- switch 조건문이나 반복문을 벗어날 때 사용하는 키워드

### continue 키워드

- 반복 작업을 멈추고 반복문의 처음으로 돌아가 다시 반복 작업 수행하는 키워드
