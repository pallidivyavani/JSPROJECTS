let a= 58392;
let count = 0;
while (a>0){
    let digit = a%10;
    count ++;
    a=Math.floor(a/10);
}
console.log(count);