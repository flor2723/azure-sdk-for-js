/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Enable interactive query in integration runtime
 *
 * @summary Enable interactive query in integration runtime
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/IntegrationRuntimes_EnableInteractiveQuery.json
 */
async function stopIntegrationRuntime() {
  const subscriptionId = "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName = "exampleResourceGroup";
  const workspaceName = "exampleWorkspace";
  const integrationRuntimeName = "exampleManagedIntegrationRuntime";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.integrationRuntimes.beginEnableInteractiveQueryAndWait(
    resourceGroupName,
    workspaceName,
    integrationRuntimeName
  );
  console.log(result);
}

stopIntegrationRuntime().catch(console.error);
