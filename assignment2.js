const testblock1="first version";
function blockdata1(){
    if(true){
        var blockdatav1="version1";
        console.log("inside blockdata")
    }
    console.log(blockdatav1);
}
function blockdata2(){
    if(true){
        let blockdatav2="version2";
        console.log("outside blockdata")
        console.log(blockdatav2);
    }
   // console.log(blockdatav2); //error let
   console.log(testblock1);  // const with global
}

blockdata1()
blockdata2()

