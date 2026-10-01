---
id: "en-php-function-function-oci-set-call-timout"
language: "php"
lang: "en"
category: "function"
name: "oci_set_call_timeout"
title: "Sets a millisecond timeout for database calls"
signature: "bool oci_set_call_timeout(resource $connection, int $timeout)"
module: "oci8"
source_url: "https://www.php.net/manual/en/function.oci-set-call-timout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets a millisecond timeout for database calls

## Description

```php
bool oci_set_call_timeout(resource $connection, int $timeout)
```

Sets a timeout limiting the maximum time a database round-trip using this connection may take.

Each OCI8 operation may make zero or more calls to Oracle's client library. These internal calls may then may make zero or more round-trips to Oracle Database. If any one of those round-trips takes more than `time_out` milliseconds, then the operation is cancelled and an error is returned to the application.

The `time_out` value applies to each round-trip individually, not to the sum of all round-trips. Time spent processing in PHP OCI8 before or after the completion of each round-trip is not counted.

When a call is interrupted, Oracle will attempt to clean up the connection for reuse. This operation is allowed to run for another `time_out` period. Depending on the outcome of the cleanup, the connection may or may not be reusable.

When persistent connections are used, the timeout value will be retained across PHP requests.

The `oci_set_call_timeout()` function is available when OCI8 uses Oracle 18 (or later) Client libraries.

## Parameters

- **`$connection`** — An Oracle connection identifier, returned by `oci_connect()`, `oci_pconnect()`, or `oci_new_connect()`.
- **`$timeout`** — The maximum time in milliseconds that any single round-trip between PHP and Oracle Database may take.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Setting the timeout**

```php


<?php

$conn = oci_connect('hr', 'welcome', 'localhost/XE');
oci_set_call_timeout($conn, 5000);

?>

    
```
