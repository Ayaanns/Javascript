let arr=[1,7,4,98,23,67,87,44];
const n=arr.length;
var temp=0;

for(var i=0;i<n-1;i++){
    for(var j=i+1;j<n;j++){
        if(arr[i]>arr[j])
        {
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}

console.log("Second Largest Number is :"+arr[arr.length-2]);
