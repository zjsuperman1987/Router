SPA_RESOLVE_INIT = function (transition) {
	
	var indexBox = document.createElement('div')
	indexBox.className = 'test-route';

	var input = document.createElement('input');
	input.value = '点我测试'
	indexBox.appendChild(input);

	var content = document.getElementById("content");
	content.innerHTML = '';
	content.appendChild(indexBox);
	// document.getElementById("content").appendChild(indexBox);

	var btn = document.querySelector('input')
	btn.onclick = function () {
		location.hash = '/first-level';
	}
}