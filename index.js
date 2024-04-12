//console.log("tejas")

// var a=2;
// var b=2;
// var c= a**b;
// console.log(" a to the power b is",c)

//const a;
// console.log(a);
// var a=50;
// console.log(a);


// var a=true;
// var b="true";
// if(a==b){
//     console.log("true")
// }
// if(a===b){
//     console.log("false")
// }

var a=2;
var b=6;
console.assert(a+b==11,"false")

console.table({language:"java",stack:"fullstack",year:"fourth"})


// if(a==1){
//     console.log("hey")
// }
// else
// {
//     console.log("hi")
// }

if(a==2){
    console.log("data not found") 
 
}  
//armstrong number!!
var number=prompt("enter the number");
var temp=number;
var NOD=number.toString.length;
var sum=0;
while(temp>0){
    var digit=temp%10;
    sum+=digit**NOD;
    temp=parseInt(temp/10);
}
if(number==sum){
    console.log("is not an armmstrong  number")

}else{
    console.log("is not an armstrong number!")
}



//perfect number

var num=6;
var sum=0;
for(var i=1;i<num/2;i++){
    if(num%i==0){
        sum=sum+i;
    }

}
if(sum==num){
    console.log("is a perfect number")
}else{
    console.log("is not a perfect number")
}

//number of A's in array?/

var arr=[a,b,a,c,a,d]
var count=0;
for(i=0;i<arr.length;i++){
    if(arr[i]==a){
        count++;
        console.log("a appears")
        console.log(count)
    }else{
        console.log("a is not present in the array given!")
    }
}

//vowel count
function vowel(str){
    var vowel="aeiou"
    var count=0
    for(var i=0;i<str.length;i++){
        if(vowel.indexOf(str[1]>-1)){
            count++;
        }
    }
    console.log("no of vowels in string are:"+count)

}
vowel("javascript is a programming language")

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


let input1 = prompt("Enter the first number:");


let number1 = parseFloat(input1);


let input2 = prompt("Enter the second number:");

let number2 = parseFloat(input2);

let sum1 = number1 + number2;

// Display the result using an alert
alert("The sum is: " + sum1);



//priime number
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= num/2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Hard-coded value of n
const n = 50; // You can change this to any positive integer

// Print prime numbers from 1 to n
console.log(`Prime numbers from 1 to ${n}:`);
for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}






    //multiplication table///
// var i=1;

// for( i=1;i<11;i++){
//     console.log("5  X " +i+"=",5*i)
// }








// switch(b)
// {
//     case 1:
//         console.log("hey")
//         break;

//     case 2:
//         console.log("hi")
//         break;

//     default:
//         break;    
// }


// if(a%2==0){
//     console.log("variable is even")
// }
// else
// {
//     console.log("variable is odd")
// }


