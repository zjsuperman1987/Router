(function () {
	window.lingxe = {};
	init()
	function init () {
		$('.parent').find('a').each(function () {
		
			$(this).click(function(){
				if($(this).attr('module')) {
					showModule($(this).attr('module'))
				}
			})
		})
	}
	showModule('main1');
	
	function showModule (module) {
		var jqxhr = $.ajax('page/' + module + '.html')
			.done(function (data){
				$('#content').empty().append($(data));
				lingxe[module].init();
			})
			.fail(function(){
			})
	}
})()