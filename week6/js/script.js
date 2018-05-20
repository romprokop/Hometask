/* ======= Week 6 ======= */

function returnMin() {
	var firstNumber = +prompt('Enter the first number', '');
	var secondNumber = +prompt('Enter the second number', '');
	var minValue;

	if (firstNumber > secondNumber) {
		minValue = secondNumber;
	} else {
		minValue = firstNumber;
	} 
	alert('Fewer is ' + minValue);
}


function isEven() {
	var evenNumber = +prompt('Enter the number', '');

	if (evenNumber % 2 == 0) {
		alert(true);
	} else { 
		alert(false);
	}
}

function upperLetterLength(str) {
	str = prompt("Enter some text with big and small letters", '');
	var arr = str.split('');
	var arr1 = str.split('');

	function deleteBigLetter(smallLetter) {
		for (var i = 0; i < str.length; i++) {
			var big = arr;
			if ( big[i].toUpperCase()==big[i]) {
				delete big[i];
			}
		}
		return smallLetter = big.join('').length;
	}
	
	var bigLetter;
	for (var j = 0; j < str.length; j++) {
		var small = arr1;
		if ( small[j].toLowerCase()==small[j]) {
			delete small[j];
		}
	}
	bigLetter = small.join('').length;

	alert('This text have ' + deleteBigLetter() + 
		' small letters and ' + bigLetter + ' big letters');
}

function countChar(word, letter) {
	word = prompt('Enter some text', '').toLowerCase();
	letter = prompt('Enter the letter you are looking for', '').toLowerCase();
	var arr = word.split('');

	for (var i = 0; i < word.length; i++) {
		var desiredLetter = arr;
		if (desiredLetter[i] !== letter) {
			delete desiredLetter[i];
		}
	}

	var countDesiredLetter = desiredLetter.join('').length;
	alert('In this text there are ' + countDesiredLetter + ' letters ' + '"' + letter.toUpperCase() + '"');
}

function createArray(start, end) {
	start = +prompt('Enter the start of array', '');
	end = +prompt('Enter the end of array', '');
	
	var arr = [];
	
	for ( var i = start; i <= end; i++) {
		var count = i;
		arr.push(count);
	}

	var sumOfArray = arr.reduce(function(sum, current) {
		return sum + current;
	}, 0);

	alert('Array: ' + arr + '\n' + 'Reverse array: ' + arr.reverse() 
		+ '\n' + 'The sum of the array equals: ' + sumOfArray);
}

// function arrayWithStep(start, end, step) {
// 	start = +prompt('Enter the start of array', '');
// 	end = +prompt('Enter the end of array', '');
// 	step = +prompt('Enter the step of array', '');
// 	var arr = [];
	
// 	for ( var i = start; i <= end; i++) {
// 		var count = i;
// 		arr.push(count);
// 	}
// 	console.log(arr);
// }

// arrayWithStep();