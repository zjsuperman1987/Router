(function(){
	
	var main1 = {};

	main1.init = function () {
		alert('main1');
	}

	if(!window.lingxe) {
		window.lingxe = {};
	}

	lingxe.main1 = main1;
})()