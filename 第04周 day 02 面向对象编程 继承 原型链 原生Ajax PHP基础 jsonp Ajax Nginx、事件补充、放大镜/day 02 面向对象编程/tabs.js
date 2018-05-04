function Tabs(btn,show){
		this.init(btn,show);
}
Tabs.prototype.init = function(btn,show){
	//参数判断;
	this.btn = document.querySelectorAll(btn);
	this.show = document.querySelectorAll(show);
	var that = this;
	for(var i = 0 ; i < this.btn.length ; i++){
		this.btn[i].index = i;
		this.btn[i].onclick = this.changeShow.bind(this);
	}
}	
Tabs.prototype.changeShow = function(event){
	var index = event.target.index;
	for(var i = 0 ; i < this.show.length ;i++){
		this.show[i].style.display = "none";
		this.btn[i].className = "";
	}
	this.show[index].style.display = "block";
	this.btn[index].className = "active"
}