var aDiv = document.getElementsByTagName("div");
for(var i = 0 ; i < aDiv.length ; i++){
    aDiv[i].onmouseover = function(){
        move(this,100)
    }
    aDiv[i].onmouseout = function(){
        move(this,30)
    }
}
function move(dom,target){
    clearInterval(dom.timer);
    dom.timer = setInterval(function(){
        var iNow = Math.round(parseFloat(getStyle(dom,"opacity") * 100));
        var speed = (target - iNow) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if(target == iNow){
            clearInterval(dom.timer);
        }else{
            dom.style.opacity = (iNow + speed) / 100 ;  
        }
    },30)
}
function getStyle(dom,attr){
    return getComputedStyle(dom,false)[attr];
}