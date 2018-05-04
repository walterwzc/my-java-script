var timer = null;
function move(target){
    //1.关闭开启定时器；
    clearInterval(timer);
    timer = setInterval(function(){
        var speed = (target - oDiv.offsetLeft) / 8;
        //speed = Math.ceil(speed);
        //speed = Math.floor(speed);
        // if(speed > 0){
        // 	speed = Math.ceil(speed);
        // }else{
        // 	speed = Math.floor(speed);
        // }
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); 
        // 500 - 1 
        // 499 498 497 ...
        //console.log(speed)
        if(target == oDiv.offsetLeft){
            clearInterval(timer);
        }else{
            oDiv.style.left = oDiv.offsetLeft + speed + "px";
        }
    },30)
}