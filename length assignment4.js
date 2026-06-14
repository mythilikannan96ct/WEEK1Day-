function lengthoflastword(str){
    let words=str.trim().split(" ");
    console.log(words);
    let lastword=words[words.length-1];
    console.log(lastword);
    return lastword.length;
}
//console.log(lengthoflastword("hello word"));
//console.log(lengthoflastword("fly me to the moon"));
function isanagram(str1,str2){
    let first=str1.toLowerCase().split("").sort().join("");
    let second=str2.toLowerCase().split("").sort().join("");
    return first===second;
}
console.log(isanagram("listen","silent"));