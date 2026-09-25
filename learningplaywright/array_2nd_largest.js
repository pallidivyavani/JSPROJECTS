// let n =[10,20,40,90,70,85];

// n.sort((a,b) => b-a);
// console.log(n[1]);


let n =[10,20,40,90,70,85];

let largest = n[0];
let second = n[1];

for(let num of n){
    if(num > largest){
        second = largest;
        largest = num;
    }else if(num > second){
        second = num;
    }
}console.log(second);
    