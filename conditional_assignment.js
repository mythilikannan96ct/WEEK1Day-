function launchbrowser(browsername){
    if(browsername==="chrome"){
        console.log("launching chrome browser");
    }else{
        console.log("launching other browser");
    }
}
function runtests(testtype){
    switch(testtype){
        case "smoke":
            console.log("running somke tests");
            break;
       case"sanity":
            console.log("running sanity tests");
            break;
        case "regression":
            console.log("running regression teste");
            break;
            default:
                console.log("running smoke tests");   
    }
}
launchbrowser("chrome");
runtests("sanity");