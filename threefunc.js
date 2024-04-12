function armstrongNumber(a)
{
    var sum=0;
    var c=0;
    var b=a;
    var count=b.toString().length;
while(b>0)
    {
        var c=a%10;
        sum = sum+(c**count);
        b=parseInt(b/10);
    }

    if(a===sum)
    {
        return 1;
    }
    else {
        return 0;
    }
}

function perfectNumber(a){
    var b=a;
    var sum=0;
    for(var i=1;i<=(b/2);i++){
        if(b%i===0){
            sum=sum+i;
        }
       
    }
    if(b===sum && a!==0)
    {
        return 1;
    }
    else{
        return 0;
    }
}

function primeNumber(a){
    var b=a;

    for(i=2;i<(b/2);i++)
    {
        var isPrime=true;
        if(b % i ===0)
        {
            isPrime=false;
            break;
        }
    }

    if(isPrime===true)
    {
        return 1;
    }
    else{
        return 0;
    }

}

var n=prompt("Enter a number ");
const a=n**2;

    
if(armstrongNumber(a)===1){
    for(var i=0;i<n;i++)
    {
        if(i%2===0)
        {
            console.log("Even numbers are "+i);
        }
    }
}
else if(perfectNumber(a)===1){
    for(var i=0;i<n;i++)
    {
        if(i%2!==0){
            console.log("Odd Numbers are "+i);
        }
    }
}
else if(primeNumber(a)===1){
    console.log(n**2);
}
else{
    console.log(n**3);
}