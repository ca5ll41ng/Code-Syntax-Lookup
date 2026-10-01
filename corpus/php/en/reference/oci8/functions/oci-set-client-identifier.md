---
id: "en-php-function-function-oci-set-client-identifier"
language: "php"
lang: "en"
category: "function"
name: "oci_set_client_identifier"
title: "Sets the client identifier"
signature: "bool oci_set_client_identifier(resource $connection, string $client_id)"
module: "oci8"
source_url: "https://www.php.net/manual/en/function.oci-set-client-identifier.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the client identifier

## Description

```php
bool oci_set_client_identifier(resource $connection, string $client_id)
```

Sets the client identifier used by various database components to identify lightweight application users who authenticate as the same database user.

The client identifier is registered with the database when the next 'round-trip' from PHP to the database occurs, typically when an SQL statement is executed.

The identifier can subsequently be queried, for example with `SELECT SYS_CONTEXT('USERENV','CLIENT_IDENTIFIER') FROM DUAL`. Database administration views such as `V$SESSION` will also contain the value. It can be used with `DBMS_MONITOR.CLIENT_ID_TRACE_ENABLE` for tracing and can also be used for auditing.

The value may be retained across page requests that use the same persistent connection.

## Parameters

- **`$connection`** — An Oracle connection identifier, returned by `oci_connect()`, `oci_pconnect()`, or `oci_new_connect()`.
- **`$client_id`** — User chosen string up to 64 bytes long.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Setting the client identifier to the application user**

```php


<?php

// Find the application user's login name
session_start();
$un = my_validate_session($_SESSION['username']);
$c = oci_connect('myschema', 'welcome', 'localhost/XE');

// Tell Oracle who that user is
oci_set_client_identifier($c, $un);

// The next round-trip to the database will piggyback the identifier
$s = oci_parse($c, 'select mydata from mytable');
oci_execute($s);

// ...

?>

    
```

## Notes

> Round-trip Gotcha
>
> Some but not all OCI8 functions cause round-trips. Round-trips to the database may not occur with queries when result caching is enabled.

## See Also

`oci_set_module_name()` `oci_set_action()` `oci_set_client_info()` `oci_set_db_operation()`
