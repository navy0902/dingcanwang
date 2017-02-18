//JavaScript Document
yc.$("login").onclick=function(){
	yc.$("hidebg").style.display="block";	
	yc.$("Login").style.display="block";	
}
yc.$("close").onclick=function(){
	yc.$("hidebg").style.display="none";	
	yc.$("Login").style.display="none";	
}

yc.$("codeimg").onclick=function(){
	yc.$("codeimg").src="http://localhost:8088/res/verifyCodeServlet?valcode="+Math.random();	
}
yc.$("word").onclick=function(){
	url="op=login&"+yc.serialize(myform);
	yc.xssRequest("http://localhost:8088/res/resuser.action?"+url,{
		"completeListener":function(){
			json=this.responseJSON;
			console.log(json.code);
			if(json.code==0){
				alert("用户名或者密码错误");	
			}else if(json.code==1){
				yc.$("hidebg").style.display="none";	
				yc.$("Login").style.display="none";
				yc.$("login").style.display="none";	
				
				yc.$("showuser").style.display="block";	
				yc.$("showuser").innerHTML="欢迎，"+yc.$("username").value+"，<a id='exit'>退出</a>";
				
				yc.$("exit").onclick=function(){
					yc.xssRequest("http://localhost:8088/res/resuser.action?op=logout",{
						"completeListener":function(){
							var json=this.responseJSON;
							if(json.code==1){
								alert("退出成功");
								yc.$("showuser").style.display="none";	
								yc.$("showuser").innerHTML="";
								yc.$("login").style.display="block";
							}else{
								alert("退出失败");		
							}
						}	
					});
					
				}
			}
		}	
	});	
}

