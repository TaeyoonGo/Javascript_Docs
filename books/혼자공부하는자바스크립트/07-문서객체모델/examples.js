document.addEventListener('DOMContentLoaded',()=>{
    // const divA = document.querySelector('#first')
    // const divB = document.querySelector('#second')
    // const h1 = document.createElement('h1')
    // h1.textContent = '이동하는 h1태그'
    //
    // const toFirst = () => {
    //     divA.appendChild(h1)
    //     setTimeout(toSecond,1000)
    // }
    // const toSecond = () =>{
    //     divB.appendChild(h1)
    //     setTimeout(toFirst,1000)
    // }
    // toFirst()


    // let counter = 0;
    // let isContact = false;
    //
    // const h1 = document.querySelector('h1')
    // const p = document.querySelector('p')
    // const connectButton = document.querySelector('#connect')
    // const disconnectButton = document.querySelector('#disconnect')
    //
    // const listener = (event) => {
    //     h1.textContent = `클릭 횟수 : ${counter++}`
    // }
    //
    // connectButton.addEventListener('click',()=>{
    //     if(isContact === false){
    //         h1.addEventListener('click',listener)
    //         p.textContent = '이벤트 연결 상태 : 연결'
    //         isContact = true
    //     }
    // })
    // disconnectButton.addEventListener('click',()=>{
    //     if(isContact === true){
    //         h1.removeEventListener('click',listener)
    //         p.textContent = '이벤트 연결 상태 : 해제'
    //         isContact = false
    //     }
    // })


    // const textarea = document.querySelector('textarea');
    // const h1 = document.querySelector('h1');
    //
    // textarea.addEventListener('keydown',(event)=>{
    //     const length = textarea.value.length;
    //     h1.textContent = `글자 수 : ${length}`
    // })


    // const star = document.querySelector('h1')
    // star.style.position = 'absolute'
    //
    // let [x,y] = [0,0]
    // const block = 20;
    //
    // const print = () => {
    //     star.style.left = `${x * block}px`
    //     star.style.top = `${y * block}px`
    // }
    // print()
    //
    // const [left,up,right,down] = [37,38,39,40]
    // document.body.addEventListener('keydown',(event)=>{
    //     switch(event.keyCode){
    //         case left:
    //             x -= 1
    //             break;
    //         case up:
    //             y -= 1
    //             break;
    //         case right:
    //             x += 1
    //             break;
    //         case down:
    //             y += 1
    //             break;
    //     }
    //     print()
    // })




    // const input = document.querySelector('input');
    // const button = document.querySelector('button');
    // const p = document.querySelector('p');
    // button.addEventListener('click',()=>{
    //     const inch = Number(input.value);
    //     if(isNaN(inch)){
    //         p.textContent = '숫자를 입력해주세요'
    //         return;
    //     }
    //     const cm = inch * 2.54
    //     p.textContent = `${cm} cm`
    // })

    // const input = document.querySelector('input');
    // const p = document.querySelector('p');
    //
    // const isEmail = (value)=> {
    //     return (value.indexOf('@') > 1 && value.split('@')[1].indexOf('.') > 1);
    // }
    //
    // input.addEventListener('keyup',(event)=>{
    //     const value = event.currentTarget.value;
    //     if(isEmail(value)){
    //         p.style.color='green'
    //         p.textContent = `이메일 형식입니다 : ${value}`
    //     }else{
    //         p.style.color='red'
    //         p.textContent = `이메일 형식이 아닙니다: ${value}`
    //     }
    // })


    // const select = document.querySelector('select')
    // const p = document.querySelector('p');
    //
    // console.log(select,p)
    //
    // select.addEventListener('change',(event)=>{
    //     const options = event.currentTarget.options;
    //     const index = event.currentTarget.options.selectedIndex;
    //     p.textContent = `선택 : ${options[index].textContent}`
    // })

    // const select = document.querySelector('select');
    // const p = document.querySelector('p');
    //
    // select.addEventListener('change',(event)=>{
    //     const options = event.currentTarget.options
    //     const list = []
    //     for(const option of options) {
    //         if(option.selected){
    //             list.push(option.textContent)
    //         }
    //     }
    //     console.log(list);
    //     p.textContent = `선택 : ${list.join(',')}`
    // })

    // let 현재값
    // let 변환상수 = 10;
    //
    // const select = document.querySelector('select')
    // const input = document.querySelector('input')
    // const span = document.querySelector('span')
    //
    // const calculate = () => {
    //     span.textContent = (현재값 * 변환상수).toFixed(2);
    // }
    //
    // select.addEventListener('change',(event)=>{
    //     const options = event.currentTarget.options;
    //     const index = options.selectedIndex;
    //     변환상수 = Number(options[index].value);
    //     calculate()
    // })
    //
    // input.addEventListener('keyup',(event)=>{
    //     현재값 = Number(event.currentTarget.value);
    //     calculate()
    // })


})
