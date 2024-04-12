let str={a,y,a,a,n};

var i
var j
str[i]=0;
str[j]=str.length-1-j
var temp=0;
while(j<i){
        temp=str[i]
        str[i]=str[j];
        str[j]=temp;
        i++;
        j--;
        


}
console.log(str);
   