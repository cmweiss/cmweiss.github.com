function loadTemplate() {
	'use strict';
	var body = document.body,
		midsec = document.createElement('div'),
		content = document.createElement('div'),
		header = document.createElement('div'),
		footer = document.createElement('div'),
		leftSide = document.createElement('div'),
		rightSide = document.createElement('div'),
		bodyContents = document.createRange();

	function sectionFetcher(url, destinationParentId) {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if(xhr.readyState === 4) {
				document.getElementById(destinationParentId).innerHTML = xhr.responseText;
			}
		}
		xhr.open('GET', url);
		xhr.send(null);
	}

	header.setAttribute('id', 'header');
	midsec.setAttribute('id', 'midsection');
	content.setAttribute('id', 'content');
	footer.setAttribute('id', 'footer');
	leftSide.setAttribute('id', 'leftside');
	rightSide.setAttribute('id', 'rightside');

	bodyContents.setStart(body.firstChild, 0);
	bodyContents.setEndBefore(document.getElementById('init'));

	content.appendChild(bodyContents.extractContents());
	body.appendChild(content);
	body.insertBefore(midsec, content);
	body.insertBefore(header, midsec);
	midsec.appendChild(leftSide);
	midsec.appendChild(content);
	midsec.appendChild(rightSide);
	body.appendChild(footer);
	sectionFetcher('header.htm', 'header');
	sectionFetcher('leftnav.htm', 'leftside');
	sectionFetcher('rightnav.htm', 'rightside');
	sectionFetcher('footer.htm', 'footer');
}
