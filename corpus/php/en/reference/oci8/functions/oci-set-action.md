---
id: "en-php-function-function-oci-set-action"
language: "php"
lang: "en"
category: "function"
name: "oci_set_action"
title: "Sets the action name"
signature: "bool oci_set_action(resource $connection, string $action)"
module: "oci8"
source_url: "https://www.php.net/manual/en/function.oci-set-action.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the action name

## Description

```php
bool oci_set_action(resource $connection, string $action)
```

Sets the action name for Oracle tracing.

The action name is registered with the database when the next 'round-trip' from PHP to the database occurs, typically when an SQL statement is executed.

The action name can subsequently be queried from database administration views such as `V$SESSION`. It can be used for tracing and monitoring such as with `V$SQLAREA` and `DBMS_MONITOR.SERV_MOD_ACT_STAT_ENABLE`.

The value may be retained across persistent connections.

## Parameters

- **`$connection`** — An Oracle connection identifier, returned by `oci_connect()`, `oci_pconnect()`, or `oci_new_connect()`.
- **`$action`** — User chosen string up to 32 bytes long.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Setting the action**

```php


<?php

$c = oci_connect('hr', 'welcome', 'localhost/XE');

// Record the action
oci_set_action($c, 'Friend Lookup');

// Code that causes a round-trip, for example a query:
$s = oci_parse($c, 'select * from dual');
oci_execute($s);
oci_fetch_all($s, $res);

sleep(30);

?>

    
```

```text


// While the script is running, the administrator can see the actions
// being performed:

sqlplus system/welcome
SQL> select action from v$session;

    
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

`oci_set_module_name()` `oci_set_client_info()` `oci_set_client_identifier()` `oci_set_db_operation()`
