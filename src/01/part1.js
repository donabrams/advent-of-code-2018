const fs = require('fs');

const input = fs.readFileSync(__dirname + "/input.txt", "utf8");

const lines = input.split("\n");
const total = lines.reduce((total, val)=> {
	if (val[0] === "+") {
		return total + Number.parseInt(val.slice(1));
	} else {
		return total + Number.parseInt(val);
	}
}, 0);

console.log(total);