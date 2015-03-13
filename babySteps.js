var commandArgs = process.argv,
	sum = 0;

for (var i = 2; i < commandArgs.length; i++) {
	sum += +commandArgs[i]; // convert to number
}

console.log(sum);
