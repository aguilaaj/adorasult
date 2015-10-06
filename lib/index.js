var fillerWords = [
	"burrito", 
	"taco", 
	"head", 
	"big", 
	"pillow lips", 
	"boring",
	"bro eyes", 
	"fooligan", 
	"blubbie"
];

var templates = [
	"Who are you to __ARIEL__ __ARIEL__!", 
	"Why is the back of your __ARIEL__ so __ARIEL__?", 
	"I love you __ARIEL__", 
	"What is that on your __ARIEL__, a pringle?",
	"HISS",
	"Woah! From here your __ARIEL__ looks like a __ARIEL__."
];

var getRandomIndex = function(max){
	return Math.floor(Math.random() * max);
};

var insult = function(insultString) {
	var getRandomWord = function(){
		return fillerWords[getRandomIndex(fillerWords.length)];
	};
	return insultString.replace(/__ARIEL__/g, getRandomWord);
};

module.exports = function () {
	return insult(templates[getRandomIndex(templates.length)]);
}
