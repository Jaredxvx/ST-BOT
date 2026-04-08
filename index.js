const http = require('http');
const port = process.env.PORT || 10000;

http.createServer((req, res) => {
  res.write("Bot is running!");
  res.end();
}).listen(port);

console.log(`Web server bypass running on port ${port}`);

const { spawn } = require("child_process");
const log = require("./logger/log.js");

function startProject() {
	const child = spawn("node", ["Goat.js"], {
		cwd: __dirname,
		stdio: "inherit",
		shell: true
	});

	child.on("close", (code) => {
		if (code == 2) {
			log.info("Restarting Project...");
			startProject();
		}
	});
}

startProject();
