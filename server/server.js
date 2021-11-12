const express = require('express')
const port = 3000
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/build')));


app.get('*', (req, res) => {
  const buildPath = path.join(__dirname, 'build', 'index.html');
  res.sendFile(buildPath);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})