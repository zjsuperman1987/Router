(function () {

	main1 = {};
	main1.init = function () {
		alert('请求成功我是main1')
	};

	if (!window.lingxe) {
		window.lingxe = {}
	};

	window.lingxe.main1 = main1;
})()