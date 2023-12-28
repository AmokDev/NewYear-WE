'use strict';

function getTime() {
	var currentDate = new Date();
	var newYear = new Date(currentDate.getFullYear() + 1, 0, 1);
	var timeDiff = newYear.getTime() - currentDate.getTime();
	var days = Math.floor(timeDiff / (1000 * 3600 * 24));
	var hours = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
	var minutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
	var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

	return `${days}d ${hours}h ${minutes}min ${seconds}sec`
}

let separator = '  ';

export function update() {
	var scriptProperties = createScriptProperties()
	.addText({
		name: 'newyear',
		label: 'NewYear',
		value: `New Year in\n${getTime()}`
	})
	.finish();
	let string = scriptProperties.newyear.split(separator), value = ''; 
	for (let i = 0; i < string.length; i++){
		value += string[i] + '\n';
	}
	return value;
}
