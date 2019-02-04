/* JavaScript Week 2 - HW
 * Beginner Exercises
 * 2018-02-03
 */

/* 1. Conditions Test
 * Using Math.random() function, create random numbers
 * between 1 and 100 and create a simple condition that outputs
 * whether its odd or even.
 */
console.log("1. CONDITIONS TEST");

 let rand = 1 + Math.floor(Math.random() * 100); // [1, 100]

 if (rand % 2 === 0) {
	 console.log(rand + " is even");
 } else {
	 console.log(rand + " is odd")
 }

/* 2. Loops and Maths Operators
 * Loop through numbers 1 to 100 and for each of these numbers,
 * output (console.log()) its square (ie 2 * 2 = 4).
 */
console.log("\n2. LOOPS AND MATHS OPERATORS");

for (i = 1; i < 101; i++) {
	let answer = Math.pow(i, 2); // alternatively, i * i
	console.log(i + " squared is " + answer);
}

/* 3. Random and While loop
 * Again, using Math.random() output either 0 (heads) or 1 (tails)
 * Then make a while loop that keeps repeating UNTIL the random
 * function has returned 1 (tails).
 */
console.log("\n3. RANDOM AND WHILE LOOP");

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

let seed = Math.floor(Math.random() * 10);
let answer = 1;

for (n = 1; n <= seed; n++) {
	answer *= n;
}
console.log(seed + "! = " + answer)

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
for (number = 1; number < 10; number++) {
	console.log('#'.repeat(number));
}

// Part 2
let num_spaces;
let max = 9;

for (number = 1; number <= max; number += 2) {
	num_spaces = (max - number) / 2;
	console.log(' '.repeat(num_spaces) + '#'.repeat(number));
}

/* 6. Complex Patterns
 * Using the loop approach above, create a chess board using # and space ' '.
 * You could try using loops inside a loop to create the alternative pattern.
 */
console.log("\n6. COMPLEX STRING PATTERN");

let num_rows = 8;
let num_cols = 8;
let bigram;

for (r = 0; r < num_rows; r++) {
	if (r % 2 === 0) {
		bigram = ' #';
	} else {
		bigram = '# '
	}
	console.log('|' + bigram.repeat(num_cols / 2) + '|');
}

/* 7. ASCII Art
 * Create ASCII Art using arrays, loops and conditions.
 */
console.log("\n7. ASCII ART");

let letters_string = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z, ";
let letters = letters_string.split(",");
let numLettersByRow = [10, 25, 34, 33, 30, 28, 26, 25, 18, 10];
let tree_height = 10;
let tree_width = 34;

function chooseLeaf() {
	return letters[Math.floor(Math.random() * letters.length)];
}

// Leaves
for (h = tree_height; h > 0; h--) {
	let leaves_on_this_row = [];
	let num_leaves_on_this_row = numLettersByRow[h];
	let offset = Math.floor((tree_width - num_leaves_on_this_row) / 2);
	for (n = 0; n < num_leaves_on_this_row; n++) {
		leaves_on_this_row.push(chooseLeaf());
	}
	console.log(" ".repeat(offset) + leaves_on_this_row.join(""));
}

// Trunk
console.log(" ".repeat((tree_width - 6) / 2) + "\\ |  /");
console.log(" ".repeat((tree_width - 4) / 2) + "\\| /");
console.log(" ".repeat((tree_width - 2) / 2) + "||");
console.log(" ".repeat((tree_width - 2) / 2) + "||");
console.log("-".repeat(tree_width));
console.log("The alphabet tree from the kids' book 'Chicka Chicka Boom Boom'.");
