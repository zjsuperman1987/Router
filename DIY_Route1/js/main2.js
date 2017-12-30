(function(){
	
	var main2 = {};

	main2.init = function () {
		alert('main2');
	}

	if(!window.lingxe){
		window.lingxe = {};
	}

	lingxe.main2 = main2;
})()