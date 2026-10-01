---
id: "en-php-function-function-ibase-service-detach"
language: "php"
lang: "en"
category: "function"
name: "ibase_service_detach"
title: "Disconnect from the service manager"
signature: "bool ibase_service_detach(resource $service_handle)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-service-detach.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Disconnect from the service manager

## Description

```php
bool ibase_service_detach(resource $service_handle)
```

## Parameters

- **`$service_handle`** — A previously created connection to the database server.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`ibase_service_detach()` example**

```php


<?php
    // Attach to the remote Firebird server by ip address
    if (($service = ibase_service_attach('10.1.1.199', 'sysdba', 'masterkey')) != FALSE) {

        // Successfully attached.
        // Fetch server version (something like 'LI-V3.0.4.33054 Firebird 3.0')
        $server_version  = ibase_server_info($service, IBASE_SVC_SERVER_VERSION);

        // Fetch server implementation (something like 'Firebird/Linux/AMD/Intel/x64')
        $server_implementation = ibase_server_info($service, IBASE_SVC_IMPLEMENTATION);

        // Detach from server (disconnect)
        if(ibase_service_detach($service) == FALSE) {
            echo "Error on service detach.";
        }
        else {
            echo "Successfully detached from service.";
        }

    }
    else {
        // Output message on error
        $conn_error = ibase_errmsg();
        die($conn_error);
    }

?>

   
```
