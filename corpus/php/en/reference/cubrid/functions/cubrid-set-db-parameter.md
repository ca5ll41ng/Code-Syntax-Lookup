---
id: "en-php-function-function-cubrid-set-db-parameter"
language: "php"
lang: "en"
category: "function"
name: "cubrid_set_db_parameter"
title: "Sets the CUBRID database parameters"
signature: "bool cubrid_set_db_parameter(resource $conn_identifier, int $param_type, int $param_value)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-set-db-parameter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the CUBRID database parameters

## Description

```php
bool cubrid_set_db_parameter(resource $conn_identifier, int $param_type, int $param_value)
```

The `cubrid_set_db_parameter()` function is used to set the CUBRID database parameters. It can set the following CUBRID database parameters:

 `PARAM_ISOLATION_LEVEL` `PARAM_LOCK_TIMEOUT` 

> The auto-commit mode can be set by using `cubrid_set_autocommit()`.

## Parameters

- **`$conn_identifier`** — The CUBRID connection. If the connection identifier is not specified, the last link opened by `cubrid_connect()` is assumed.
- **`$param_type`** — Database parameter type.
- **`$param_value`** — Isolation level value (1-6) or lock timeout (in seconds) value.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`cubrid_get_db_parameter()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb", "dba");

$params = cubrid_get_db_parameter($conn);
var_dump($params);

cubrid_set_autocommit($conn, CUBRID_AUTOCOMMIT_TRUE);
cubrid_set_db_parameter($conn, CUBRID_PARAM_ISOLATION_LEVEL, 2);

$params_new = cubrid_get_db_parameter($conn);
var_dump($params_new);

cubrid_disconnect($conn);
?>

   
```

The above example will output:

```text


array(4) {
  ["PARAM_ISOLATION_LEVEL"]=>
  int(3)
  ["PARAM_LOCK_TIMEOUT"]=>
  int(-1)
  ["PARAM_MAX_STRING_LENGTH"]=>
  int(1073741823)
  ["PARAM_AUTO_COMMIT"]=>
  int(0)
}
array(4) {
  ["PARAM_ISOLATION_LEVEL"]=>
  int(2)
  ["PARAM_LOCK_TIMEOUT"]=>
  int(-1)
  ["PARAM_MAX_STRING_LENGTH"]=>
  int(1073741823)
  ["PARAM_AUTO_COMMIT"]=>
  int(1)
}

    
```

## See Also

 `cubrid_get_db_parameter()` `cubrid_set_autocommit()`
