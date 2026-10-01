---
id: "en-php-function-gearmanclient-dostatus"
language: "php"
lang: "en"
category: "function"
name: "GearmanClient::doStatus"
title: "Get the status for the running task"
signature: "public array GearmanClient::doStatus()"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanclient.dostatus.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the status for the running task

## Description

```php
public array GearmanClient::doStatus()
```

Returns the status for the running task. This should be used between repeated `GearmanClient::doNormal()` calls.

## Parameters

This function has no parameters.

## Return Values

An array representing the percentage completion given as a fraction, with the first element the numerator and the second element the denomintor.

## Examples

**Get the status of a long running job**

The worker in this example has an artificial delay added during processing of the string to be reversed. After each delay it calls `GearmanJob::status()` which the client then picks up.

```php


<?php

echo "Starting\n";

# Create our client object.
$gmclient= new GearmanClient();

# Add default server (localhost).
$gmclient->addServer();

echo "Sending job\n";

# Send reverse job
do
{
  $result = $gmclient->doNormal("reverse", "Hello!");

  # Check for various return packets and errors.
  switch($gmclient->returnCode())
  {
    case GEARMAN_WORK_DATA:
      break;
    case GEARMAN_WORK_STATUS:
      # get the current job status
      list($numerator, $denominator)= $gmclient->doStatus();
      echo "Status: $numerator/$denominator complete\n";
      break;
    case GEARMAN_WORK_FAIL:
      echo "Failed\n";
      exit;
    case GEARMAN_SUCCESS:
      break;
    default:
      echo "RET: " . $gmclient->returnCode() . "\n";
      exit;
  }
}
while($gmclient->returnCode() != GEARMAN_SUCCESS);

echo "Success: $result\n";

?>

   
```

The above example will output something similar to:

```text


Starting
Sending job
Status: 1/6 complete
Status: 2/6 complete
Status: 3/6 complete
Status: 4/6 complete
Status: 5/6 complete
Status: 6/6 complete
Success: !olleH

   
```

## See Also

 `GearmanClient::doNormal()` `GearmanJob::status()`
