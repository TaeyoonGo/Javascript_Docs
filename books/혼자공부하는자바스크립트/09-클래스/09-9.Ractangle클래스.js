class Ractangle{
    constructor(width,height) {
        this.width = width;
        this.height = height;
    }
    getPerimeter(){
        return 2 * (this.width + this.height);
    }
    getArea(){
        return this.width * this.height;
    }
}
const ractangle = new Ractangle(10,20);
console.log(`사각형의 둘레 : ${ractangle.getPerimeter()}`)
console.log(`사각형의 넓이 : ${ractangle.getArea()}`)
