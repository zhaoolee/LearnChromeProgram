function my_clock(clock_div){
	// 获取今天的日期	
	var today = new Date();
	// 获取当前的"时"	
	var h = today.getHours();
	// 获取当前的"秒"	
	var m = today.getMinutes();
	// 获取当前的"秒"	
	var s = today.getSeconds();

	// 为了美观, 当"分钟数"小于十的时候在个位数的前面补一个零
	m = m >= 10? m: ('0'+m);
	// 为了美观, 当"秒钟数"小于十的时候在个位数的前面补一个零
	s = s >= 10? s: ('0'+s);

	// 将刚刚得到的数据拼接好,插入到结点中
	clock_div.innerHTML = h+":" + m + ":" + s;
	// 每隔1000毫秒(一秒钟)更新一次时间	
	setTimeout(function(){my_clock(clock_div)}, 1000);
}

// 通过Id获取元素结点
var clock_div = document.getElementById("clock_div");

// 将元素结点传入my_clock函数

my_clock(clock_div);