
var genericInsults = [
	'Fuck you <name>, you stupid sack of siberian sheep shit.',
  '<name>, is your ass jealous of the amount of shit that just came out of your mouth?',
  'I hope you realize everyones just putting up with you, <name>.'
];

var measuresInsults = [
	'I should have pulled out and shot <name> on the wall!'
];

function insult(name) {
	var insult;
	if (['ian', 'Ian', 'Isaac', 'isaac'].indexOf(name) > -1) {
		insult = measuresInsults[Math.floor(Math.random()*measuresInsults.length)];
		return insult.replace('<name>', name);
	} else if (['adam', 'Adam', 'amoran', 'Adumb', 'adumb'].indexOf(name) > -1) {
		return 'I will not insult my master!';
	} else {
		insult = genericInsults[Math.floor(Math.random()*genericInsults.length)];
		return insult.replace('<name>', name);
	}
}


exports.insult = insult;