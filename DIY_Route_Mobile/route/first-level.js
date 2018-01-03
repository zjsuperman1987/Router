SPA_RESOLVE_INIT = function (transition) {
	var xmlhttp;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	}else {
		xmlhttp = new ActiveXObject(Microsof.XMLHTTP)
	}
	xmlhttp.onreadystatechange = function () {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.body.innerHTML = xmlhttp.responseText;

			var btnValue = document.querySelectorAll('.first_level_left_describe');

			for(var i = 0; i < btnValue.length; i++) {

				btnValue[i].addEventListener('click', function (event) {

					var result = this.innerHTML;
					location.hash = '/index'

				
					// setTimeout(function() {
					// 	console.log(result);
					// document.querySelector('input').value = result
					// },100)
				})
			}
		}
	}
	xmlhttp.open("GET", 'Ajax/first-level.html', true);
	xmlhttp.send();
}