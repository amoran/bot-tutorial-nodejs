
var genericInsults = [
	'Fuck you <name>, you stupid sack of siberian sheep shit.',
  '<name>, is your ass jealous of the amount of shit that just came out of your mouth?',
  'I hope you realize everyones just putting up with you, <name>.',
  "May a dozen Siamese elephants step on <name>'s testicles while there is a pineapple shoved up their rectum.",
  "<name> is about as useful as Anne Frank's drum kit",
  "If I was locked in a room with Bin Laden, Hitler, and <name>, and had a gun with only 2 bullets, I'd shoot <name> twice"
];

var measuresInsults = [
	'I should have pulled out and shot <name> on the wall!',
	"<name>, you're turning out like your father"
];

function insult(name) {
	var insult;
	if (['ian', 'Ian', 'Isaac', 'isaac'].indexOf(name) > -1) {
		var binary = Math.round(Math.random());
		if (binary === 0) {
			insult = measuresInsults[Math.floor(Math.random()*measuresInsults.length)];
		} else {
			insult = genericInsults[Math.floor(Math.random()*genericInsults.length)];
		}
		return insult.split('<name>').join(name);
	} else if (['adam', 'Adam', 'amoran', 'Adumb', 'adumb'].indexOf(name) > -1) {
		return 'I will not insult my master!';
	} else {
		insult = genericInsults[Math.floor(Math.random()*genericInsults.length)];
		return insult.split('<name>').join(name);
	}
}


exports.insult = insult;