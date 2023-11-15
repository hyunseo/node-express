
const static = require('node-static'); 
const http = require('http');
const socketIO = require('socket.io');
const express = require("express");

//const { WebSocketServer } = require("ws");
const file = new static.Server('./client');
const app = http
  .createServer(file.serve.bind(file))
  .listen(3000, () => {
	console.log(`sample app listening on port 3000`)
})
