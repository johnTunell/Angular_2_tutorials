import { iotAppSetup } from 'server_services/iot_application-compiled';
import { socketSetup } from 'server_services/websocket-compiled';
import { influxDbSetup } from 'server_services/influxdb-compiled';

export const express = require('express');
export const app = express();
export const server = require('http').createServer(app);
export const Client = require('ibmiotf');

iotAppSetup();
socketSetup();
influxDbSetup();

app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/app.html');
});

app.get('/graphlivedata', function(req,res) {
    res.sendFile(__dirname + '/client/graphLiveData.html');
});

app.get('/graphstaticdata', function(req,res) {
    res.sendFile(__dirname + '/client/graphStaticData.html');
});

server.listen(process.env.PORT || 5000);

console.log("server is running...");