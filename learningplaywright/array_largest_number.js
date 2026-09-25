// let numbers = [15, 72, 34, 91, 28];
// let largest = numbers[0];
// for(let num of numbers){
//     if(num > largest){
//         largest = num;
//     }
// }console.log(largest)



let numbers = [15, 72, 34, 91, 28];

let count = numbers[0];
for(let i = 1; i < numbers.length; i++){
  if(numbers[i] > count){
    count = numbers[i]
  }
}
console.log('Biggesst number is '+ count)