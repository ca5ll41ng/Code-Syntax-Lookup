---
id: "en-php-function-function-oci-set-client-info"
language: "php"
lang: "en"
category: "function"
name: "oci_set_client_info"
title: "Sets the client information"
signature: "bool oci_set_client_info(resource $connection, string $client_info)"
module: "oci8"
source_url: "https://www.php.net/manual/en/function.oci-set-client-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the client information

## Description

```php
bool oci_set_client_info(resource $connection, string $client_info)
```

Sets the client information for Oracle tracing.

The client information is registered with the database when the next 'round-trip' from PHP to the database occurs, typically when an SQL statement is executed.

The client information can subsequently be queried from database administration views such as `V$SESSION`.

The value may be retained across persistent connections.

## Parameters

- **`$connection`** — An Oracle connection identifier, returned by `oci_connect()`, `oci_pconnect()`, or `oci_new_connect()`.
- **`$client_info`** — User chosen string up to 64 bytes long.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Setting the client information**

```php


<?php

$c = oci_connect('hr', 'welcome', 'localhost/XE');

// Record the client information
oci_set_client_info($c, 'My Application Version 2');

// Code that causes a round-trip, for example a query:
$s = oci_parse($c, 'select * from dual');
oci_execute($s);
oci_fetch_all($s, $res);

sleep(30);

?>

    
```

```text


// While the script is running, the administrator can see the client
// information:

sqlplus system/welcome
SQL> select client_info from v$session;

    
```

## Notes

> Oracle version requirement
>
> This function is available when PHP is linked with Oracle Database libraries from version 10*g* onwards.

> Performance
>
> With older versions of OCI8 or the Oracle Database, the client information can be set using the Oracle `DBMS_APPLICATION_INFO` package. This is less efficient than using `oci_set_client_info()`.

> Round-trip Gotcha
>
> Some but not all OCI8 functions cause round-trips. Round-trips to the database may not occur with queries when result caching is enabled.

## See Also

`oci_set_module_name()` `oci_set_action()` `oci_set_client_identifier()` `oci_set_db_operation()`
