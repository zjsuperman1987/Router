SPA_RESOLVE_INIT = function (transition) {
	var xmlhttp;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	}else {
		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
	}
	xmlhttp.onreadystatechange = function () {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById('content').innerHTML = xmlhttp.responseText

			var queryValue = document.querySelectorAll('.first_level_left_describe');

			for(var i = 0; i < queryValue.length; i++) {
				queryValue[i].addEventListener('click', function (event) {
					alert(10);
					location.hash = '/index'
					var result = this.innerHTML;

					console.log('==================================');

					setTimeout(function (){
						document.querySelector('input').value = result;
					},100)
				})
			}
		}
		
	}
	xmlhttp.open('GET', 'Ajax/second-level.html', true);
	xmlhttp.send();
}