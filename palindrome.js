

// var n=prompt("enter the number")
// var temp=n;
// var rev=0;
// while(n!=0){
//     var r=n%10;
//     rev=rev*10+r;
//     n=n/10;
// }
// if(temp==rev){
//     console.log("is palindrome")
// }else{
//     console.log("is not a plindrome")
// }


//palindromes
var string=prompt("enter the number or string")
var length=string.length;
for(var i=0;i<length/2;i++){
    if(string[i]==string[length-1-i]){
        console.log("is a palindrome")
    }else{
        console.log("not a palindrome")
    }
}