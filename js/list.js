$(function(){
	//顶部导航条
	$("#dizh").mouseover(function() {
		$("#dizi1").css("display", "block");
		$("#dizh").mouseout(function() {
			$("#dizi1").css("display", "none");
		})
	});
	$("#wode").mouseover(function() {
		$("#wode1").css("display", "block");
		$("#wode").mouseout(function() {
			$("#wode1").css("display", "none");
		})
	});
	$("#shc").mouseover(function() {
		$("#shc ul").css("display", "block");
		$("#shc").mouseout(function() {
			$("#shc ul").css("display", "none");
		})
	});
	$(".dizhi1-2-1 li:first-child").click(function() {
		$(".dizhi1-3").css("display", "block");
		$(".dizhi1-2-1 li:first-child").css("background", "#e7e7e7");
		$(".dizhi1-2-1 li:last-child").css("background", "#fff");
		$(".dizhi3-1").css("display", "none");
	});
	$(".dizhi1-2-1 li:last-child").click(function() {
		$(".dizhi3-1").css("display", "block");
		$(".dizhi1-2-1 li:last-child").css("background", "#e7e7e7");
		$(".dizhi1-2-1 li:first-child").css("background", "#fff");
		$(".dizhi1-3").css("display", "none");
	});

	$(".new2-1-2").mouseover(function() {
		$(".new2-2-1").css("display", "block");
		$(".new2-1").mouseout(function() {
			$(".new2-2-1").css("display", "none");
		})
	});
	$(".new2-1-3").mouseover(function() {
		$(".new3").css("display", "block");
		$(".new2-1").mouseout(function() {
			$(".new3").css("display", "none");
		})
	});
	$(".new2-2-2").mouseover(function() {
		$(".new2-2-2 span").css("left", "-27px");
		$(".new2-2-2").mouseout(function() {
			$(".new2-2-2 span").css("left", "0px");
		})
	});
	$(".new2-2-3").mouseover(function() {
		$(".new2-2-3 span").css("left", "-27px");
		$(".new2-2-3").mouseout(function() {
			$(".new2-2-3 span").css("left", "0px");
		})
	});

	$(".shouji").click(function() {
		$(".zhanghu2").css("display", "block");
		$(".shouji").css("color", "#f00");
		$(".zhanghu1").css("display", "none");
		$(".zhanghu").css("color", "#000000");

	})
	$(".zhanghu").click(function() {
		$(".zhanghu1").css("display", "block");
		$(".zhanghu").css("color", "#f00");
		$(".zhanghu2").css("display", "none");
		$(".shouji").css("color", "#000000");

	})
	$(".kuais b").click(function() {
		$(".zhuce1").css({
			display: "block",
			display: "flex"
		});
		$(".denglu").css("display", "none");
	})

	$(".zhijie").click(function() {
		$(".zhuce1").css("display", "none");
		$(".denglu").css({
			display: "block",
			display: "flex"
		});
	})
	$(".denglu-").click(function() {
		$(".denglu").css({
			display: "block",
			display: "flex"
		});
	})
	$(".zhuce-").click(function() {
		$(".zhuce1").css({
			display: "block",
			display: "flex"
		});
	})
	$(".denglu").click(function(e) {
		var evt = e || event;
		var _target = evt.target || evt.srcElement;
		if(_target.className.toLowerCase() == "denglu") {
			$(".denglu").css("display", "none");
		}
	})
	$(".zhuce1").click(function(e) {
		var evt = e || event;
		var _target = evt.target || evt.srcElement;
		var str = "zhuce1";
		if(_target.className.toLowerCase() == str) {
			$(".zhuce1").css({
				"display": "none"
			});
		}
	})
})