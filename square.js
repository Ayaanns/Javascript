var arr=[20,16,33]
var count=0;
// var sqr=0;
for(var i=0;i<arr.length;i++){
    arr[i]=arr[i]**2;
}
console.log(arr);
for(var i=0;i<arr.length;i++){
    if(arr[i]>=300){
        count++;
        
    }
}
console.log(count)
