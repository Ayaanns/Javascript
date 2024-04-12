
// var str="ayaan";
// for(var i=str.length-1;i>=0;i--){
//     console.log(str[i])

// }

function reverse(str){
    var  rev=''
    for(var i=str.length;i>=0;i--){
        rev+=str[i];
    }
    return rev;
}
var ostr="ayaan";
var revstr=reverse(ostr);
console.log(revstr);


  
