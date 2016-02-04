/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/

function multiply(num1, num2) {
	var result = num1 * num2;
	return result;
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/star-blue.png') {
		myImage.setAttribute('src','images/star-green.png');
	} else {
		myImage.setAttribute('src','images/star-blue.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}

/*
document.querySelector('html').onclick = function() {
	alert('Ouch! Stop poking me!');
}
*/