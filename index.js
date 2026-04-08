const express = require('express');
const app = express();
const port = process.env.PORT || 10000; // Mas safe ang 10000 sa Render

// 1. Eto yung pampagising kay Render (Web Service)
app.get('/', (req, res) => {
  res.send('Bot is Alive!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// 2. Dito mo idugtong yung luma mong code (yung startProject o yung logic ng bot)
const { spawn } = require("child_process");

function startProject() {
    const child = spawn("node", ["Goat.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (code) => {
        if (code == 2) {
            startProject();
        }
    });
}

startProject();
