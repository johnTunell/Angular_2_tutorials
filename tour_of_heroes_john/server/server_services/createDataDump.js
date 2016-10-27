const fs = require('fs');

export function writeAfile(data) {
    fs.writeFile('./client/sensorData.json', data, function(err) {
        if(err) {
            return console.error(err);
        }
        console.log('Data written succesfully');
    });
}

export { writeAfile };


// Create device type

/*{
    "id": "gateway",
    "description": "A gateway",
    "classId": "Device",
    "deviceInfo": {
    "serialNumber": "1",
        "manufacturer": "UPWIS AB",
        "model": "string",
        "deviceClass": "string",
        "description": "string",
        "fwVersion": "string",
        "hwVersion": "string",
        "descriptiveLocation": "string"
},
    "metadata": {}
}*/


//  Create device

/*
 {
 "deviceId": "6ceceb5c591a",
 "deviceInfo": {
 "serialNumber": "6c:ec:eb:5c:59:1a",
 "manufacturer": "UPWIS AB",
 "model": "BBB",
 "deviceClass": "6loWPAN",
 "description": "6loWPAN router, mqtt broker",
 "fwVersion": "1.0",
 "hwVersion": "1.0",
 "descriptiveLocation": "Salagatan 18B, Uppsala"
 },
 "location": {
 "longitude": 0,
 "latitude": 0,
 "elevation": 0,
 "accuracy": 0,
 "measuredDateTime": "2016-04-21T13:42:27.593Z"
 },
 "metadata": {}
 }
 */