// let numbers = [12, 45, 7, 89, 23];
// let largest = 0;
// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]> largest){
//         largest = numbers[i];
//     }
// }
// console.log(largest);

let numbers = [12, 45, 7, 89, 23];
let largest = 0;
for(let i=0; i< numbers.length; i--){
  if(numbers[i]< largest){
    largest = numbers[i];
    
    
  }
}console.log(largest)