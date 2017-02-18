// JavaScript Document
function shop(){

	yc.xssRequest("http://localhost:8088/res/resorder.action?op=getCartInfo",{
			"completeListener":function(){
				var json=this.responseJSON;
				//用来计数
				var count=0;
				for( var temp in json.obj){
					if( json.obj.hasOwnProperty(temp)  ){
						count++;	
						}	
					}	
					
					//console.log(json.obj);
					if(count>0){
						for( var i in json.obj){
							fprice=json.obj[i].smallCount;	
							if(json.obj.hasOwnProperty(i) ){
								fnum=json.obj[i].num;
								fid=json.obj[i].food.fid;
								fod=json.obj[i].food;
								var div=document.createElement("div");
								var p=document.createElement("p");
								var span1=document.createElement("span");
								var span2=document.createElement("span");
								var span3=document.createElement("span");
								var span4=document.createElement("span");
								span3.id="addnum";
								span4.id="reducenum";
								
								//添加和减少
								(function(fid){
									span3.onclick=function(){
										var options={
											"completeListener":function(){
												yc.$("shopcar").innerHTML="";
												yc.$("shopcar").innerHTML='<span id="order">确认下单</span>';
												shop();	
											}
										}
										yc.xssRequest("http://localhost:8088/res/resorder.action?op=orderJson&num=1&fid="+fid,options);
									}	
									
									span4.onclick=function(){
										var options={
											"completeListener":function(){
												yc.$("shopcar").innerHTML="";
												yc.$("shopcar").innerHTML='<span id="order">确认下单</span>';
												shop();	
												
											}
										}
											yc.xssRequest("http://localhost:8088/res/resorder.action?op=orderJson&num=-1&fid="+fid,options);	
											
					
										}
										
								})(fid);
								
								//确定下单
								
									yc.$("order").onclick=function(){
										
										var options={
											"completeListener":function(){
												var json=this.responseJSON;
												if(json.code==1){
														yc.$("Login_1").style.display="block";
														yc.$("hidebg").style.display="block";
													}
												}	
											}
										 yc.xssRequest("http://localhost:8088/res/resorder.action?num=1&op=order&fid="+fid,options);	
										}
								
										
									
								//关闭收货地址
								yc.$("close_x").onclick=function(){
									yc.$("Login_1").style.display="none";
									yc.$('hidebg').style.display="none";	
									}
								
								
								p.id="food";
								p.innerHTML="<img width='18px' height='14px' src=http://localhost:8088/res/images/"+fod.fphoto+">&nbsp;&nbsp;"+fod.fname;
								span1.innerHTML="<span id='allprice'>小计："+json.obj[i].smallCount+"</span>"
								span2.innerHTML="<span id='num'>"+fnum+"</span>"
								div.appendChild(p);
								div.appendChild(span1);
								div.appendChild(span3);
								div.appendChild(span2);
								div.appendChild(span4);
								//添加到“确定下单”后面
								yc.prependChild( yc.$("shopcar"),div);
								
								
								
								}
							}	
							//显示数量
							yc.$("foodnum").style.display="block";
							yc.$("foodnum").innerHTML=count;	
						}else{
							alert("请先购买商品");	
							
							}
				}
			
		});
		
	}
	shop();