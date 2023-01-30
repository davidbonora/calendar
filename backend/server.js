// Create express server
const express = require('express');
const app = express();

// Route a view from react
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});