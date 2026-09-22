// let a= 122;
// let original = a;
// let reverse = 0;

// while (a>0){
//     let digit = a%10;
//     a= Math.floor(a/10);
//     reverse = reverse *10 + digit;
// }
// if (original == reverse){
//     console.log("Palindrome");
// }
// else{
//     console.log("Not Palindrome");
// }



let a= "madamm";
let reversed = a.split("").reverse().join("");
if (a === reversed){
    console.log("palindrome");
}else{
    console.log("Not a palindrome");
}