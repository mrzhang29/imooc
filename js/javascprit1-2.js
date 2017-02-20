function mymessage() {
	var message = confirm("准备好了么？");
	if(message == true) {
		document.write("起飞吧！少年！！！");
	} else {
		document.write("回家呆着去！！！");
	}
}