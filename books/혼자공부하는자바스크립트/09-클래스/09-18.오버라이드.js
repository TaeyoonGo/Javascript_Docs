class LifeCycle{
    call(){
        this.a()
        this.b()
        this.c()
    }
    a(){console.log('a() 메소드를 호출합니다.')}
    b(){console.log('b() 메소드를 호출합니다.')}
    c(){console.log('c() 메소드를 호출합니다.')}
}

class Child extends LifeCycle{
    a(){
        super.a()
        console.log('자식의 a() 메서드입니다.')
    }
}

new Child().call()
