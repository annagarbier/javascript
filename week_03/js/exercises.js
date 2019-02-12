/* JavaScript Week 3 - HW
 * Beginner Exercises: Refactored
 * (See "update" comment for a note on what changed from last week)
 * 2018-02-13
 */

/* 1. Conditions Test
 * Using Math.random() function, create random numbers
 * between 1 and 100 and create a simple condition that outputs
 * whether its odd or even.
 */
console.log("1. CONDITIONS TEST");

// Update: uses ternary notation rather than `if...then`
let rand = 1 + Math.floor(Math.random() * 100); // [1, 100]
console.log((rand % 2 === 0) ? (rand + " is even") : (rand + " is odd"));


/* 2. Loops and Maths Operators
 * Loop through numbers 1 to 100 and for each of these numbers,
 * output (console.log()) its square (ie 2 * 2 = 4).
 */
console.log("\n2. LOOPS AND MATHS OPERATORS");

// Update: parameterizes the range and the power to raise to,
// while keeping the defaults the same as last week
function getAllPowersBtwn(start = 1, stop = 100, pow = 2) {
	for (i = start; i < stop + 1; i++) {
		let answer = Math.pow(i, pow);
		console.log(i + "^" + pow + " = " + answer);
	}
}

getAllPowersBtwn(); // Default range is [1-100] each raised to 2
getAllPowersBtwn(20, 23, 3); // Custom range [20-23] each rauised to 3

// Update: practices closures
function power(number = 1) {
	let ret = function(power = 1) {
		let answer = Math.pow(number, power);
		console.log(number + "^" + power + " = " + answer);
	}
	return ret;
}

power()(); // 1^1
power(4)(5); // 4^5
power(2)(7); // 2^7


/* 3. Random and While loop
 * Again, using Math.random() output either 0 (heads) or 1 (tails)
 * Then make a while loop that keeps repeating UNTIL the random
 * function has returned 1 (tails).
 */
console.log("\n3. RANDOM AND WHILE LOOP");

// No updates
let heads_or_tails;
while (heads_or_tails != "TAILS") { // alternatively, store as int 0
	if (Math.random() < .5) {
		heads_or_tails = "HEADS"; // alternatively, store as int 1
		console.log(heads_or_tails, "...keep flipping.");
	} else {
		heads_or_tails = "TAILS"
		console.log(heads_or_tails, "...got it!");
	}
}

/* 4. Find the factorial of any number using loops
 * Start with a number and find its factorial.
 */
console.log("\n4. FACTORIAL");

// Update: paramaterizes the input `number`
function getFactorial(number = 10) {
	let answer = 1;
	for (n = 1; n <= number + 1; n++) {
		answer *= n;
	}
	console.log(number + "! = " + answer)
}
getFactorial(); // 10!
getFactorial(12); // 12!


/* 5. Patterns using Loops
 * Here's a simple loop to create a triangle using a while loop:
 *
 * 	let number = 1;
 * 	while (number < 10) {
 * 		console.log('#'.repeat(number));
 * 		number++;
 * 	}
 *
 * Part 1. Convert this into a for(...) loop (more compact).
 * Part 2. And then try create an equilateral triangle (ie the apex is in the middle
 * rather than the left side).
 */
console.log("\n5. SIMPLE STRING PATTERN");

// Part 1
// No udpates to part 1
for (number = 1; number < 10; number++) {
	console.log('#'.repeat(number));
}

console.log("test");

// Part 2
// Update: parameterizes the base width, and gives it a default
// value
function drawIsosceles(base_width = 15) {
	for (i = 1; i <= base_width; i += 2) {
	let num_spaces = (base_width - i) / 2;
	console.log(' '.repeat(num_spaces) + '#'.repeat(i));	
	}
}
drawIsosceles(); // traingle with base of 15
drawIsosceles(31); // traingle with base of 31

/* 6. Complex Patterns
 * Using the loop approach above, create a chess board using # and space ' '.
 * You could try using loops inside a loop to create the alternative pattern.
 */
console.log("\n6. COMPLEX STRING PATTERN");

function drawBoard(rows = 8, cols = 8) {
	for (r = 0; r < rows; r++) {
		let bigram;
		if (r % 2 === 0) {
			bigram = ' #';
		} else {
			bigram = '# '
		}
		console.log('|' + bigram.repeat(cols / 2) + '|');
	}
}
drawBoard(); // 8x8 board
drawBoard(10, 7); // 10x7 board
drawBoard(5, 15); // 5x15 board


/* 7. ASCII Art
 * Create ASCII Art using arrays, loops and conditions.
 */

console.log("\n7. ASCII ART");

// Update: Paramaterizes tree height and width, adds more randomness to number
// of leaves on each row of the tree
function chooseLeaf() {
	let letters_string = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z, ";
	let letters = letters_string.split(",");
	return letters[Math.floor(Math.random() * letters.length)];
}

function drawTree(tree_height = 17, tree_width = 71) {
	// Leaves
	if (tree_width < 40 || tree_height < 10) {
		console.log("ERROR: please make tree_height at least 10 characters" +
					"and tree_width at least 40 characters, e.g. drawTree(10, 40)");
	} else {
		for (h = tree_height; h > 0; h--) {
			if (h > 4) {
				let leaves_on_this_row = [];
				let dist_from_center = Math.abs(h - tree_height / 2);
				let num_leaves_on_this_row = tree_width - 5 - (dist_from_center * 2) + Math.floor(Math.random() * 5);
				let offset = Math.floor((tree_width - num_leaves_on_this_row) / 2);
				for (n = 0; n < num_leaves_on_this_row; n++) {
					leaves_on_this_row.push(chooseLeaf());
				}
			console.log(" ".repeat(offset) + leaves_on_this_row.join(""));
			} else {
				if (h === 4) {
					console.log(" ".repeat(Math.floor((tree_width - 6) / 2)) + "\\ |  /");
				} else if (h === 3) {
					console.log(" ".repeat(Math.floor((tree_width - 4) / 2)) + "\\| /");
				} else {
					console.log(" ".repeat(Math.floor((tree_width - 4)) / 2) + "||");
				}
			}
		}
	}
}

drawTree(); // 17chars tall x 71chars wide tree
drawTree(10, 40); // 10chars tall x 40chars wide tree
drawTree(3, 10); // ERROR message
