// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "public/index.html");
});

// socket.io server listening for new socket connections :)
io.on('connection', (socket) => {
  console.log('a user connected');
});

// listen for requests :)
const listener = server.listen(process.env.PORT || 3000, function() {
  console.log("Your app is listening on port " + listener.address().port);
});