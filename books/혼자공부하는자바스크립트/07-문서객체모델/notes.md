# 문서 객체 모델

*** 

## 07-1 문서 객체 조절하기

> html,head,body,title 등을 HTML에서는 요소 자바스크립트에서는 문서 객체라고 부른다</br>
> 문서 객체를 조합해서 만든 전체적인 형태를 문서 객체 모델(DOM -> Document Object Model)

### DomContentLoaded 이벤트

```js
// DomContentLoaded 이벤트는 웹 브라우저가 문서 객체를 모두 읽고 나서 실행하는 이벤트
document.addEventListener('DOMContentLoaded', () => {

})
// load 이벤트는 구버전에서 사용했으나 현재 사용하지 않음
document.addEventListener('load', () => {

})
```

### 문서 객체 가져오기

#### CSS 선택자

| 이름      | 선택자 형태      | 설명                     |
|---------|-------------|------------------------|
| 태그 선택자  | 태그          | 특정 태그를 가진 요소를 추출       |
| 아이디 선택자 | #아이디        | 특정 id 속성을 가진 요소를 추출    |
| 클래스 선택자 | .클래스        | 특정 class 속성을 가진 요소를 추출 |
| 속성 선택자  | [속성 = 값]    | 특정 속성 값을 갖고 있는 요소를 추출  |
| 후손 선택자  | 선택자_A 선택자_B | 선택자_A 아래의 선택자_B를 선택    |

#### js 문서 가져오는 매서드

```js
//단일 객체 불러오는 메서드
document.querySelector('선택자')
//문서 객체 여러개를 배열로 읽어들이는 메서드
document.querySelectorAll('선택자')
//내부에 접근해서 활용하려면 반복문을 돌려야하는데 보통 forEach() 사용
document.querySelectorAll('선택자').forEach(() => {
})
```

### 글자 조작하기

| 매소드 이름           | 설명                       | 
|------------------|--------------------------|
| 문서객체.textContent | 입력된 문자열을 그대로 넣습니다.       | |
| 문서객체.innerHTML   | 입력된 문자열을 HTML 형식으로 넣습니다. |

### 속성 조작하기

| 매소드 이름                     | 설명               | 
|----------------------------|------------------|
| 문서 객체.setAttribute(속성이름,값) | 특정 속성에 값을 지정합니다. | |
| 문서 객체.getAttribute(속성이름)   | 특정 속성을 추출합니다.    |

### 스타일 조작하기

- 문서 객체의 스타일 조작할 때는 style 속성을 사용 (style 객체)
- 자바스크립트에서 속성 사용 적용 시 CamelCase 사용

### 문서 객체 생성하기

- 나를 중심으로 위의 요소를 부모요소 아래 요소를 자식요소라고 하며 이러한 구조형태를 트리구조

```js
// 문서 객체를 생성할때 사용 메서드 
document.createElement(문서객체이름)
// 부모 객체 아래 자식 객체 추가 메서드
부모객체.appendChild(자식객체)
```

### 문서 객체 이동하기

- appendChild() 메소드는 문서 객체를 이동할때 사용 가능하다<br/>문서객체는 언제나 하나여야하기 때문에 다른 문서 객체에 추가하면 문서 객체로 이동

### 문서 객체 제거하기

```js
//부모객체를 제거할 때는 removeChild() 메소드 
부모객체.removeChild(자식객체)
//문서객체의 부모요소를 찾은후 removeChild로 제거하면 결국 위랑 아래랑 같음
문서객체.parentNode.removeChild(문서객체)
```

### 이벤트 설정하기

- 모든 문서가 생성 및 동작시에는 이벤트가 발생합니다.
- 이벤트가 발생할 때 실행할 콜백 함수를 이벤트 리스너 또는 이벤트 핸들러라고 부릅니다.

```js
//이벤트 발생할 때 실행하는 함수
문서객체.addEventListener(이벤트이름, 이벤트리스너)
//이벤트 제거할 때 실행하는 함수
문서객체.removeEventListener(이벤트이름, 이벤트리스너)
```

***

## 07-2 이벤트 활용

### 이벤트 모델

- 모든 이벤트 리스너의 첫번째 매개변수는 이벤트객체를 받음
- 최근에는 프론트엔드프레임워크에서 인라인 이벤트 모델을 많이 활용해서<Br/> 현재는 표준과 인라인 이벤트 모델을 많이 사용

```html

<script>
    // 표준 이벤트 모델
    // 이벤트 연결할때 addEventListener() 사용
    document.body.addEventListener('keyup', () => {
    })
    // 고전 이벤트 모델
    // on으로 시작하는 속성에 함수를 할당 이벤트를 연결
    document.body.onkeyup = (event) => {
    }

    // 인라인 이벤트 모델
    // HTML에 직접 이벤트를 연결 
    const listener = (event) => {
    }
</script>
<body>
<div onkeyup="listener(event)"></div>
</body>
```

### 키보드 이벤트

- keydown keypress 이벤트는 웹 브라우저에 따라 아시아권 문자를 제대로 처리 못하는 이슈가 있어서<br/> 일반적으로 keyup 이벤트 사용
- keyup 이벤트도 특정 키를 꾹 누르고 있으면 글자수를 세지않는 이슈가 있어서 따로 처리

| 이벤트      | 설명                                            |
|----------|-----------------------------------------------|
| keydown  | 키가 눌릴 때 실행됩니다. 키보드를 꾹 누르고 있을 때도 입력할 때도 실행됩니다. | 
| keypress | 키가 입력되었을 때 실행됩니다. 아시아권 문자를 제대로 처리 못하는 이슈가 있음  | 
| keyup    | 키보드에서 키가 떨어질 때 실행됩니다.                         | 

#### 키보드 키 코드 사용하기

- code 속성은 입력한 키를 나태내는 문자열 / altKey,ctrlKey,shiftKey 불 자료형 값

| 이벤트 속성 이름 | 설명             |
|-----------|----------------|
| code      | 입력한 키          | 
| keyCode   | 입력한 키를 나태내는 숫자 | 
| altKey    | alt 키를 눌렀는지    | 
| ctrlKey   | ctrl 키를 눌렀는지   | 
| shiftKey  | shift 키를 눌렀는지  | 

### 이벤트 발생 객체
- 이벤트 내부에서 문서 객체 변수를 사용하지않고 외부에서 호출하는 방식은 크게 2가지
```js
    // 1. currentTarget 사용 (모든 함수 사용 가능)
const listener = (event) => {
    const length = event.currentTarget.value.length
    h1.textContent = `글자 수 : ${length}`
}
// 2. this 사용 (화살표함수 사용 ❌)
function listener(){
    const length = this.value.length
    h1.textarea = `글자수 : ${length}`
}

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.querySelector('textarea')
    const h1 = document.querySelector('h1')
    textarea.addEventListener('keyup', listener)
})
```
### 글자 입력 양식 이벤트
- 함수 안에 if문 안에 return 키워드를 사용해서 함수를 실행하지 않게 할수있는데 이를 조기 리턴이라고 한다
- 유효성 검사를 할때는 정규표현식을 사용 

### 기본 이벤트 막기
- 웹 브라우저에서 우클릭 시 컨텍스트 메뉴가 호출됨 웹 브라우저에서 기본적으로 처리하는것을 기본 이벤트라고 부릅니다.
- 기본이벤트를 제거할때는 event 객체에 preventDefault() 메소드 

### localStorage 객체 
- 웹 브라우저에 데이터를 저장하는 localStorage 객체
  - localStorage.getItem(키) : 저장된 값을 추출 없으면 undifined
  - localStorage.setItem(키,값) : 값을 저장 
  - localStorage.removeItem(키) : 특정 키의 값을 제거
  - localStorage.clear() : 저장된 모든 값을 제거
- 웹 브라우저에서 제공해주는 기능을 웹 API라고 부릅니다.
