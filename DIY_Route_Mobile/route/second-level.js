SPA_RESOLVE_INIT = function (transition) {
	var xmlhttp;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	}else {
		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
	}
	xmlhttp.onreadystatechange = function () {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.body.innerHTML = xmlhttp.responseText
		}
	}
	xmlhttp.open('GET', 'Ajax/second-level.html', true);
	xmlhttp.send();


}