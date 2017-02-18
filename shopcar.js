// JavaScript Document
//点击立即购买
yc.$("buyfood").onclick=function(){
	//alert(fid);
	yc.$("bgleft").style.display="none";
	yc.$("content").style.display="none";
	yc.xssRequest("http://localhost:8088/res/resorder.action?num=1&op=order&fid="+fid,{
		"completeListener":function(){
			var json=this.responseJSON;
			//判断
			if(json.code==0){
				//alert(json.msg);	
				}else if(json.code==1){
					shop();
					yc.$("shopcar").innerHTML="";	
					yc.$("shopcar").innerHTML='<span id="order">确定下单</span>';
					
					}
			}
		});
	}
	
//点击购物车
yc.$("car").onclick=function(){
	if(yc.$("shopcar").style.display!="block"){
		yc.$("shopcar").style.display="block";
		}else{
			yc.$("shopcar").style.display="none";
			}
		
	}
	
	