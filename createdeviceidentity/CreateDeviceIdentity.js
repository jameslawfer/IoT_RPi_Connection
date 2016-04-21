'use strict';

var iothub = require('azure-iothub');

var connectionString = 'HostName=HelloHubs.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=erqkeUNeQ6i8N6RlI0g9YwpMXJpapGVPJ/ukoeDvoqA=';

var registry = iothub.Registry.fromConnectionString(connectionString);

var device = new iothub.Device(null);
device.deviceId = 'myNodejsDevice';
registry.create(device, function
(err, deviceInfo, res)
	{
		if (err)
		{
			registry.get(device.deviceId, printDeviceInfo);
		}
		if (deviceInfo)
		{
			printDeviceInfo(err, deviceInfo, res)
		}
	}
);

function printDeviceInfo(err, deviceInfo, res)
{
	if (deviceInfo)
	{
		console.log('Device id: ' + deviceInfo.deviceId);
		console.log('Device key: ' + deviceInfo.authentication.SymmetricKey.primaryKey);
	}
}
