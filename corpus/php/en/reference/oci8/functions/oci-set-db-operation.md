---
id: "en-php-function-function-oci-set-db-operation"
language: "php"
lang: "en"
category: "function"
name: "oci_set_db_operation"
title: "Sets the database operation"
signature: "bool oci_set_db_operation(resource $connection, string $action)"
module: "oci8"
source_url: "https://www.php.net/manual/en/function.oci-set-db-operation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the database operation

## Description

```php
bool oci_set_db_operation(resource $connection, string $action)
```

Sets the DBOP for Oracle tracing.

The database operation name is registered with the database when the next 'round-trip' from PHP to the database occurs, typically when a SQL statement is executed.

The database operation can subsequently be queried from database administration views such as `V$SQL_MONITOR`.

The `oci_set_db_operation()` function is available when OCI8 uses Oracle 12 (or later) Client libraries and Oracle Database 12 (or later).

## Parameters

- **`$connection`** — An Oracle connection identifier, returned by `oci_connect()`, `oci_pconnect()`, or `oci_new_connect()`.
- **`$action`** — User chosen string.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Setting the DBOP**

```php


<?php

$c = oci_connect('hr', 'welcome', 'localhost/XE');

// Record the operation
oci_set_db_operation($c, 'main query');

// Code that causes a round-trip, for example a query:
$s = oci_parse($c, 'select * from dual');
oci_execute($s);
oci_fetch_all($s, $res);

sleep(30);

?>

    
```

```text


// While the script is running, the administrator can see the database operations
// being performed:

sqlplus system/welcome
SQL> select dbop_name from v$sql_monitor;

    
```

## Notes

> Round-trip Gotcha
>
> Some but not all OCI8 functions cause round-trips. Round-trips to the database may not occur with queries when result caching is enabled.

## See Also

`oci_set_action()` `oci_set_module_name()` `oci_set_client_info()` `oci_set_client_identifier()`
