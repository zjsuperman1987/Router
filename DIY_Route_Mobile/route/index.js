SPA_RESOLVE_INIT = function (transition) {
	
	var indexBox = document.createElement('div')
	indexBox.className = 'test-route';

	var input = document.createElement('input');
	input.value = '点我测试'
	indexBox.appendChild(input);

	document.body.appendChild(indexBox);

	var btn = document.querySelector('input')
	btn.onclick = function () {
		debugger;
		location.hash = '/first-level';
	}
}