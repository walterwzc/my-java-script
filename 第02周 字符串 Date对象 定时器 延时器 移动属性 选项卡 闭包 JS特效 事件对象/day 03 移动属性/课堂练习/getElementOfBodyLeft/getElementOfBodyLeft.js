function offset(ele){

    var offsetLeft = 0;

    if(ele.offsetParent.nodeName !== "BODY"){
        offsetLeft += offset();
    }else{
        offsetLeft = ele.offsetLeft;
    }


    return offsetLeft;
    

}