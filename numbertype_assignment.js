function checknumber(num){
    if(num>0){
        return "positive";
    }else if(num<0){
        return "negative";
    }else{
        return "zero";
    }
}
let result =checknumber(-7);
console.log(result);