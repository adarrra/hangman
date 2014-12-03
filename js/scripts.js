
var deadMan = ["    ", "________________", "  ", "/", "\\", "               ", "|", " ", "-------", "            ", "______", "                   ", "_ "];

var field = [[deadMan[0]+ deadMan[1]+ "\n"],
	[deadMan[11]+ deadMan[6]+ "\n"],
	[deadMan[11]+ deadMan[6]+ "\n"],
	[deadMan[11]+ deadMan[6]+ "\n"],
	[deadMan[11]+ deadMan[6]+"\n"],
	[deadMan[11]+ deadMan[6]+ "\n"],
	[deadMan[11]+ deadMan[6]+ "\n"],
	[deadMan[11]+ deadMan[6]+ "\n"],
	[deadMan[11]+ deadMan[6]+ "\n"],
	[deadMan[9]+ deadMan[7]+ deadMan[10]+deadMan[6]+deadMan[10]+"\n"]] ;

var hangman = [[deadMan[0]+ deadMan[1]+ "\n"],
	[deadMan[2]+ deadMan[3]+ deadMan[4]+ deadMan[5]+ deadMan[6]+ "\n"],
	[deadMan[2]+ deadMan[4]+ deadMan[3]+ deadMan[5]+ deadMan[6]+ "\n"],
	[deadMan[2]+ deadMan[6]+  deadMan[5]+deadMan[7]+ deadMan[6]+ "\n"],
	[deadMan[8]+ deadMan[9]+ deadMan[6] +"\n"],
	[deadMan[2]+ deadMan[6]+ deadMan[5]+deadMan[7]+ deadMan[6]+ "\n"],
	[deadMan[2]+ deadMan[6]+ deadMan[5]+deadMan[7]+ deadMan[6]+ "\n"],
	[deadMan[7]+ deadMan[3]+ deadMan[4]+ deadMan[5]+ deadMan[7]+deadMan[6]+ "\n"],
	[deadMan[3]+ deadMan[2]+ deadMan[4]+ deadMan[5]+deadMan[6]+ "\n"],
	[deadMan[9]+ deadMan[7]+ deadMan[10]+deadMan[6]+deadMan[10]+"\n" ]];

function getField(){
	var printedField = field.join(" ");
	return printedField
}

var words = ["candy", "cat", "rabbit"];

function randomWord(){
	return words[Math.floor(Math.random()*words.length )]
}

var dictionary = {
	candy: "something sweet",
	cat: "little animal",
	rabbit: "animal with long ears"
};
var word ="";

function searchAndAppendHint(){
	for(var key in dictionary){
		if(word == key){
			$("span.definition").append(dictionary[key]);
		}
	}
}

var placeholder = "_ ";

function createPlaceholders(){
	for (var i = 0; i < word.length; i ++){
		$(".word").append('<span>'+ placeholder +'</span>' )
	}
}

$(document).ready(function(){
	$('.hangman').append("<pre>" + getField() + "</pre>");

	$("form#lets-start").submit(function(event) {
		event.preventDefault();
		$("button#start").hide();
		$(".dialog").empty().append("Guess the word or we hang the innocent hostage!");
		$(".initial-hide").show();

		word = randomWord();

		searchAndAppendHint();
		createPlaceholders();

	});


	function searchAppend(currentLetter) {
		var found = false;
		for (var i = 0; i < word.length; i++) {
			if (currentLetter == word[i]) {
				var number = i + 1;
				$(".word span:nth-of-type("+ number +")").empty().append(currentLetter);
				found = true;
			}
		}
		if (!found) {
			field[j] = hangman[j];
			$('.hangman').empty().append("<pre>" + getField() + "</pre>");
			j += 1;
		}
	}

	var j = 1;


	$("form#guess-letter").submit(function(event) {
		event.preventDefault();

		var currentLetter = $("input#letter").val();


		$("input#letter").val("");
		searchAppend(currentLetter);

	});


});

/*	deadMan[0] = "    ";
 for (var i = 0; i < deadMan.length; i++){
 deadMan[i] = "    ";
 $('body').append("<pre>" + getField() + "</pre>")
 }*/

//спаны... вводить одну букву, гейм овер, рестарт
