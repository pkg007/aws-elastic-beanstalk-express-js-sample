const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello to Pramod World- Testing full devOps pipeline first time!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
