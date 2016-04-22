#include <stdio.h>
#include <stdlib.h>

#include "iothub_client.h"

int main(void)
{

	IOTHUB_CLIENT_HANDLE iotHubClientHandle;

	iotHubClientHandle = IoTHubClient_CreateFromConnectionString("asdf", AMQP_Protocol);

	return 0;
}
