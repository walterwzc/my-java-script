var context = canvas.getContext("2d");
/*小鸟部分*/
var img = new Image();
img.src = "依赖包/图片/鸟/下.png";

var movingTimer = null;
var birdX = 300;
var birdY = 100;

img.onload = function(){
	if(!movingTimer){   //阻止更换图片 重新加载BUG
		movingTimer = setInterval(function(){
				context.clearRect(0,0,800,600);
				drawBird();
				columnDraw();
		},30)
	}	
}
function drawBird(){
		if(birdY <= 300){
			birdY+= 5;
		}
		context.drawImage(img,birdX,birdY);
		//阻止掉出屏幕外;
}
canvas.onmousedown = function(){
	img.src = "依赖包/图片/鸟/上.png";
	birdY -= 50;
}
canvas.onmouseup = function(){	
	img.src = "依赖包/图片/鸟/下.png";
}
/*小鸟 end*/
/*障碍物*/
var columnX = 800;  //起始点
var columnY = 0;
var columnImgA = new Image();
var columnImgB = new Image();
columnImgA.src = "依赖包/图片/柱子/反.png";
columnImgB.src = "依赖包/图片/柱子/正.png";
var columnArr = []; //柱子数据存储数组；
function createColumn(){
	if(Math.random() >= 0.2 ){ //增加不确定性
		var column = {};
		column.positionY = -Math.round(Math.random()*100) - 50; //Y坐标;
		column.positionX = 800; //Y坐标;
		columnArr.push(column);
		column.id = Math.random();
	}
}
//定时创建 柱子 ；
var createColumnTimer = null;
createColumnTimer = setInterval(function(){
		createColumn()
		//console.log(columnArr);//定期创建柱子
},1500)

var mark = 0;
var same = null;

function columnDraw(){
	for(var i in columnArr){
		if(columnArr[i]){ //如果存在柱子;
			columnArr[i].positionX -= 5;
			context.drawImage(columnImgA,columnArr[i].positionX,columnArr[i].positionY);//绘制上面的个柱子；
			context.drawImage(columnImgB,columnArr[i].positionX,columnArr[i].positionY + 350);//绘制下面的柱子；
		}
		//删除无用柱子;
		if(columnArr[i].positionX <= -80){ //当柱子移出屏外的时候， 删除柱子;
			columnArr.splice(i,1);
		}	
		//判断死亡; 
		//经过柱子;
		if(birdX+40 >= columnArr[i].positionX && birdX < columnArr[i].positionX + 70){	
			//console.log("经过"+i);
			if(columnArr[i].id != same){ //分数增加;
				mark ++ ;
				columnArr[i].id = same;
				document.getElementById("mark").innerHTML = "得分："+mark;
			}
			if(birdY <= columnArr[i].positionY + 230  || birdY  >= columnArr[i].positionY + 350 ){  //柱子长度 除去在屏幕外的长度 是柱子一端的 坐标;
				//小鸟飞过了柱子的一端;
				console.log("die");
				var oRes = document.createElement("div");
				oRes.className = "res";
				var src = null;
				if(mark < 10 ){
					src = "依赖包/图片/奖牌/铜牌.png";
				}else if(mark >= 10 && mark < 100 ){
					src = "依赖包/图片/奖牌/银牌.png";
				}else{
					src = "依赖包/图片/奖牌/金牌.png";
				}
				oRes.innerHTML = "<h2>U Div</h2> <p>得分 :"+mark+"</p> <img src="+src+"> "
				document.body.appendChild(oRes);
				clearInterval(movingTimer);
				setTimeout(function(){
					document.onclick = function(){
						location.reload();
					}
				},500)
//				location.reload();
			}
		}
	}
}
