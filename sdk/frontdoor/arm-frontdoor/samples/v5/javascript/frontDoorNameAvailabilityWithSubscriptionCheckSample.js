/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { FrontDoorManagementClient } = require("@azure/arm-frontdoor");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Check the availability of a Front Door subdomain.
 *
 * @summary Check the availability of a Front Door subdomain.
 * x-ms-original-file: specification/frontdoor/resource-manager/Microsoft.Network/stable/2020-05-01/examples/CheckFrontdoorNameAvailabilityWithSubscription.json
 */
async function checkNameAvailabilityWithSubscription() {
  const subscriptionId = "subid";
  const checkFrontDoorNameAvailabilityInput = {
    name: "sampleName",
    type: "Microsoft.Network/frontDoors/frontendEndpoints",
  };
  const credential = new DefaultAzureCredential();
  const client = new FrontDoorManagementClient(credential, subscriptionId);
  const result = await client.frontDoorNameAvailabilityWithSubscription.check(
    checkFrontDoorNameAvailabilityInput
  );
  console.log(result);
}

checkNameAvailabilityWithSubscription().catch(console.error);
