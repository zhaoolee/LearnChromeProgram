function jiujiu() {
    // 存储每一行的数据
    var result = "";

    for (var i = 1; i <= 9; i++) {
        // 清空上一行的数据
        result = "";
        for (var j = 1; j <= i; j++) {
            // 表示每一句运算口诀
            con = i + "*" + j + "=" + i*j;          
            result = result + " " + con;
        }
        // 打印每一行的数据
        console.log(result + "\n");       
    }
}
// 调用刚刚写好的函数
jiujiu();