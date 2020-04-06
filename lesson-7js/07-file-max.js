'use strict'

function SelectLink() {
	var elements = document.querySelectorAll('ul>li>a');
	for (var i = 0; i < elements.length; i++) {
		var exElements = elements[i].innerHTML.split('//');
		if (exElements[0] == 'http:' || exElements[0] == 'ftp:'
				|| exElements[0] == 'http://internal.com') {
			elements[i].className = 'external-red';
			console.log(exElements);
		}
	}
}