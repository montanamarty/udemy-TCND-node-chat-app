const path = require('path');
//path is built in functi0n so nothing needs to be loaded it just works
const express = require('express');

const publicPath = path.join(__dirname, '../public');
var app = express();

const port = process.env.PORT || 3000;
app.use(express.static(publicPath));

console.log(__dirname + '/../public');
console.log(publicPath);


app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
