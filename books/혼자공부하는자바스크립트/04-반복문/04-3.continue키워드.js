let output = 0;

for(let i = 1; i <= 10; i++){
    if(i % 2 !== 0){
        continue
    }
    output += i
}
console.log(output)
