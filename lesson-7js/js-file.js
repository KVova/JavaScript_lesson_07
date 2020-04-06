'use strict'

function InputRandomData() {
	var elements = document.querySelectorAll('ul>li');
	for (var i = 0; i < elements.length; i++) {
		elements[i].innerHTML = 'test text ' + 'is true?';
		console.log(elements.length);
	}
}