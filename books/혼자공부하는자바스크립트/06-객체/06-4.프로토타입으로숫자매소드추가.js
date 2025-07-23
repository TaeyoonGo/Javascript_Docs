Number.prototype.power = function (n =2){
    return this.valueOf() ** n
}

const a = 12
console.log(a.power());
console.log(a.power(3));
console.log(a.power(4));
