let numbers = [15, 72, 34, 91, 28];
let largest = numbers[0];
for(let num of numbers){
    if(num > largest){
        largest = num;
    }
}console.log(largest)