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
	//获取文本内容

	var text = $(".ie-fix").text();
	// 过滤字符
	text = text.replace(/来自.*百度文库/i,"");
	text = text.replace(/来自.*百度/i,"");
	text = text.replace(/来自.*{display: none; font-size: 12px;}/i,"");
	text = text.replace(/\n文库/i,"");
	text = text.replace(" ","");
	//展示
	text = '<p style="font-size:15px; text-align:center;"><a href="https://github.com/JerwinLiao/baiduwenkuCopy">***Made By hjliao***</a><hr><div style="text-align:center;"><button id="updateText" style="font-size:15px;margin:0 auto;">更新文本</button>'+
'<button id="copyText" style="font-size:15px;margin-left:10px;" data-clipboard-action="copy" data-clipboard-target="#docText">复制文本</button></div><hr><div id="docText">'+text+'</div></p>'
	$("#right-wrapper-id").html(text);
	// console.log(text);
	
}

var SetButtonClick = function()
{
	$("#updateText").on("click",function(){
		Copy();
	});
}

$.when( $.ready ).then(function() {
	console.log("插件运行");
	Copy();
	SetButtonClick();
	new ClipboardJS('#copyText');
});