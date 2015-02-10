function ajaxFunction(content, elementid) {
	'use strict';
	var xmlHttp;
	try {
		// Firefox, Opera 8.0+, Safari
		xmlHttp = new XMLHttpRequest();
	} catch (e) {
		// Internet Explorer
		try {
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e1) {
			try {
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e2) {
				alert("Your browser does not support AJAX!");
				return false;
			}
		}
	}
	xmlHttp.onreadystatechange = function () {
		if(xmlHttp.readyState === 4) {
			document.getElementById(elementid).innerHTML = xmlHttp.responseText;
		}
	};
	xmlHttp.open("GET", content, true);
	xmlHttp.send(null);
}
