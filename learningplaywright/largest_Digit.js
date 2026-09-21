let a = 19;
let largest = 0;

while(a>0){
  let digit = a%10
  if (digit > largest) {
    largest = digit;
  }
  a= Math.floor(a/10);   
}
console.log(largest)