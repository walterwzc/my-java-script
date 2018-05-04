
function test(temp, obj , dom){
    //正则处理字符串
    //1.匹配出 <% %>
    temp = temp.replace(/<%=(.+?)%>/g,"`) \n print($1) \n print(` ")
    temp = temp.replace(/<%(.+?)%>/g,"`) \n $1 print(`")
  
    temp = "print(`"+temp+"`)"

    console.log(temp);
    //经过正则的处理，我们希望模板字符串变成如下形式:
    /******************************************* 
    

    print(`<ul>`)
    for(var i=0; i<data.names.length; i++){
        print(`<li>`) 
        print(data.names[i]) 
        print(`</li>`)
    }
    print(`</ul>`)

  




    *********************************************/

    //准备一段代码，动态生成一个函数，把刚才准备好的temp代码嵌入当中
    
    let StrFn = `(function(){
        var data = obj;
        var html = "";
        function print(str){
            html += str
        }
        ${temp}
        return html;
    })`

    /*************这段代码生成后的样子******************
    (function(data){
        var strhtml = "";
        function print(str){
             strhtml += str;  
        } 
        print(`<ul>`)
   for(var i=0; i<data.names.length; i++){
        print(`<li>`)
        print(data.names[i])
        print(`</li>`)
   }
        print(`</ul>`)
        return strhtml; 
    })
    *********************************************/

    //使用eval执行代码，生成并返回这个函数

    var fn = eval(StrFn);

    //console.log(fn);
    //调用这个函数，得到最终的字符串模板

    var res = fn(obj);

    //console.log(res);

    return res;
}
