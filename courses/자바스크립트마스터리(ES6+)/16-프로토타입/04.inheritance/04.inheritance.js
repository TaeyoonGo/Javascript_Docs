// 프로토타입을 베이스로한 객체지향 프로그래밍

function Animal(name,emoji){
    this.name = name;
    this.emoji = emoji;
}

Animal.prototype.printName = function(){
    console.log(`${this.name} ${this.emoji}`);
}

function Dog(name,emoji,owner){
    // super(name,emoji)
    Animal.call(this,name,emoji);
}
// Dog.prototype = OBject.create(Object.prototype)
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.play = ()=>{
    console.log('같이놀자')
}
function Tiger(name,emoji){
    Animal.call(this,name,emoji);
}
Tiger.prototype = Object.create(Animal.prototype)
Tiger.prototype.hunt = function(){
    console.log('사냥하자')
}
const dog1 = new Dog('멍멍','🐶','엘리')
const tiger1 = new Tiger('어흥','🐯')
tiger1.hunt();
tiger1.printName();
dog1.play();
dog1.printName();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
