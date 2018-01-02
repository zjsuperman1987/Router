(function(){
	
	window.lingxe = {};
	init();
	function init () {
		// 添加点击事件
		$('.parent>li').find('a').each(function () {
			$(this).click (function () {
				if ($(this).attr('module')) {
					showModule ($(this).attr('module'));
				}
				$('.ta_calendar').remove();
			})
		});

		showModule('main1');
	}

	function showModule (module) {
		var jqxhr = $.ajax('page/' + module + '.html')
			.done (function (data) {
				$('#content').empty().append($(data));
				lingxe[module].init();
			})
			.fail(function () {
			})
	}

})()
