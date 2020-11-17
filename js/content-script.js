var showAll = function(){
	if($(".read-all")!=null)
	{
		console.log("检测到多页，显示所有页");
		$(".read-all").click();
	}
}
var Copy = function()
{
	
	// 开启复制
	window.document.oncontextmenu = function(){        return true;  }  
	$(".ie-fix").bind(oncontextmenu, function (e) {
		return true;
	});
	//取消复制屏蔽（vip内容）

	$("#reader-container").addClass("reader-container");
	$(".reader-container").removeAttr("id","reader-container");
}
var showText = function()
{
	var filterString = new Array("来自.*百度文库","来自.*百度","来自.*{display: none; font-size: 12px;}","\n文库");
	//获取文本内容
	var text=$(".ie-fix").text();
	// 过滤字符
	for(index in filterString)
	{
		text = text.replace(new RegExp(filterString[index],"gi"),"");
	}
	text = text.replace(" ","");
	text = text.replace("\t","");
	// console.log("Update Text:\n"+text);
	//展示
	text = '<p style="font-size:15px; text-align:center;"><a href="https://github.com/JerwinLiao/baiduwenkuCopy">***Made By hjliao***</a><hr><div style="text-align:center;"><button id="updateText" style="font-size:15px;margin:0 auto;">更新文本</button>'+
'<button id="copyText" style="font-size:15px;margin-left:10px;" data-clipboard-action="copy" data-clipboard-target="#docText">复制文本</button><button id="showAll" style="font-size:15px;margin-left:10px;">展开所有</button></div><hr><pre id="docText" style="font-family:宋体,黑体;line-height:2;letter-space:1.2;">'+text+'</pre></p>'
	$("#right-wrapper-id").html(text);
	SetButtonClick();
}

var SetButtonClick = function()
{
	$("#updateText").on("click",function(){
		console.log("updateText Button was clicked");
		showText();
	});
	$("#showAll").on("click",function(){
		showAll();
	});
}

$.when( $.ready ).then(function() {
	console.log("插件运行");
	Copy();
	showText();
	new ClipboardJS('#copyText');
});