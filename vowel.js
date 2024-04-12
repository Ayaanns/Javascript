var String=prompt("enter the string")
 const reg=/[aeiou]/gi
 var chars=String.match(reg);
 console.log(chars.join(','));
 console.log(chars.length)
