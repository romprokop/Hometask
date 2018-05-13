function alertHello () {
	alert('Hello world!');
}

function consoleHello() {
	console.log('Hello world');
}

function buildTriangle() {
	var exclamationMark = '★';
	for (var i = 0; i < 7; i++) {
		console.log(exclamationMark);
		exclamationMark += '★'

	}
}

function outputFizzBuzz() {
	for (var i = 0; i <= 100; i++) {
		(i % 3 == 0) ? console.log('Fizz') :
		(i % 5 == 0) ? console.log('Buzz') :
		(i % 3 == 0 && i % 5 == 0) ? console.log('FizzBuzz') : 
		console.log(i);
	}
}

function createChessBoard() {
	var width = +prompt("Enter chessboard width", "8");
	var height = +prompt("Enter chessboard height", "8");
	var output = '';
	for(var i = 0, count = 1; i < height; i++) {
	    for(var j = 0; j < width; j++) {
	        if (count % 2 !== 0) {
	            output += " ";
	        } else {
	            output += "#";
	        }
	        count++;
	    }
	    output += "\n";
	    count++;
	}
	console.log(output);
}