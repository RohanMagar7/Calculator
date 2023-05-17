const express = require('express');
const app = express();

// Serve the static files in the public folder
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});