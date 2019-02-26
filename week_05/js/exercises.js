/* JavaScript Week 5 - HW
 * Question-Answer bot with tooltip
 * 2018-02-26
 * 
 * Week 4 (lines 13-72): A CoffeeTriviaBot answers questions from the user about coffee.
 * Questions are read from an html <input> element, processed
 * with simple regex, and answered back to the user via an html <p>.
 * 
 * Week 5 addition (lines 73-90): 
 * Adds event listeners, and modifies the DOM styling and content
 * using listeners.
 */

class CoffeeTriviaBot {
	constructor() {
		this.promptsAndResponses = [
			[  
				/^((whats|what is) coffee|tell me about coffee)$/,
				'Coffee is a brewed drink made from roasted coffee beans.'
			],
			[
				/^(hi|hello|hey|howdy|good (morning|afternoon|evening|day))$/,
				"Hi! I'm a coffee trivia expert. Try asking me something..."
			],
			[
				/^(where|what plant) (do|does) (coffee|it) (beans )?come from|what are coffee beans$/,
				"Coffee beans are the berry seeds of Coffea plants, " +
				"native to various tropical regions of the world."
			],
			[
				/^(where|when) was (coffee|it) (invented|discovered|first made)$/,
				"Although there are several stories, this question remains a mystery to us all."
			],
			[
				/^(which|what) (country|countries) (produce|produces) the most coffee$/,
				"The top three producing countries are Brazil, Vietnam, and Colombia."
			],
			[
				/^bye$/,
				"Bye! Sending you a whole latte love."
			]
		];
	}

	getResponse() {
		let inputStringRaw = document.getElementById("inputString").value;
		let inputStringNorm = inputStringRaw.toLowerCase().replace(/[^A-Za-z0-9 ]/g,"");
		let answer = "Sorry, I don't understand the question, '" + inputStringRaw + "'";
		if (inputStringNorm != "") {
			for (let i in this.promptsAndResponses) {
				if (this.promptsAndResponses[i][0].test(inputStringNorm)) {
					answer = this.promptsAndResponses[i][1];
				}
			}
		} else answer = "Oops, I didn't see a question. " +
						"Try something simple like 'Tell me about coffee'";
		return answer;
	}

	logPromptAndAnswer() {
		if (this.getResponse()) {
			let prompt = "Question: " + document.getElementById("inputString").value;
			let response = "Answer: " + this.getResponse();
	
			document.getElementById("prompt").innerHTML = prompt;
			document.getElementById("response").innerHTML = response;
		}
	}
}

bot = new CoffeeTriviaBot;

// New for week 5 (tooltip): modifying DOM using
// event listeners.
let button_node = document.getElementsByTagName('button')[0];
let input_node = document.getElementsByTagName('input')[0];
let tooltip_node = document.getElementsByClassName('tooltip')[0];

// process user's request and respond
button_node.addEventListener("click", function() {
	bot.logPromptAndAnswer();
});

// show tooltip
input_node.addEventListener("mouseover", function() {
	tooltip_node.style.display = "flex";
});

// hide tooltip
input_node.addEventListener("mouseout", function() {
	tooltip_node.style.display = "none";
});
