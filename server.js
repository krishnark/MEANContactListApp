var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public")); //tells our Server where to look for Static files like HTML, CSS, JavaScript or image files

app.listen(3000);
console.log("Server running on port 3000");