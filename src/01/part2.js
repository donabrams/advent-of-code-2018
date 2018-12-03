const fs = require('fs');

const input = fs.readFileSync(__dirname + "/input.txt", "utf8");

const lines = input.split("\n");

const diffs = lines.map((val) => {
	return val[0] === "+"
		? Number.parseInt(val.slice(1), 10)
		: Number.parseInt(val, 10);
});

var state = { total: 0, seen: { "0": true }, index: 0 };
do {
	const { seen, total, index } = state;
	seen[total] = true;
	nextVal = diffs[index  %  diffs.length];
	state.total = total + nextVal;
	state.index++;
} while (!state.seen[state.total])

console.log(state.total);
