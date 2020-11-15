$(document).ready(function () {
	console.log("插件运行");
	window.document.oncontextmenu = function(){        return true;  }  
	$(".ie-fix").bind(oncontextmenu, function (e) {
		return true;
	});
	var text = $(".ie-fix").text();
	text = text.replace(/来自.*百度文库/i,"");
	text = text.replace(/来自.*{display: none; font-size: 12px;}/i,"");
	text = '<p style="font-size:18px;"><hr>'+text+'</p>'
	$("#right-wrapper-id").html(text);
	$("#reader-container").addClass("reader-container");
	$(".reader-container").removeAttr("id","reader-container");
});