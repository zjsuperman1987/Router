(function () {

	main2 = {};
	main2.init = function () {
		alert('请求成功我是main2');
	}
	if (!window.lingxe) {
		window.lingxe = {};
	}
	window.lingxe.main2 = main2;
})()