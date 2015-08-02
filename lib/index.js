var fillerWords = [
	"burrito", 
	"taco", 
	"head", 
	"big", 
	"pillow lips", 
	"boring",
	"bro eyes"
];

var templates = [
	"Who are you to __ARIEL__ __ARIEL__!", 
	"Why is the back of your __ARIEL__ so __ARIEL__?", 
	"I love you __ARIEL__", 
	"HISS"
];

var insult = function(insultString) {
	var getRandomWord = function(){
		var randomIndex = Math.floor(Math.random() * fillerWords.length);
		return fillerWords[randomIndex];
	};
	return insultString.replace(/__ARIEL__/g, getRandomWord);
};

for(var i = 0; i < templates.length; i++) {
	console.log(insult(templates[i]))
}
