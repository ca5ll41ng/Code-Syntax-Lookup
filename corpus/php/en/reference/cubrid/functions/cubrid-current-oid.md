---
id: "en-php-function-function-cubrid-current-oid"
language: "php"
lang: "en"
category: "function"
name: "cubrid_current_oid"
title: "Get OID of the current cursor location"
signature: "string cubrid_current_oid(resource $req_identifier)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-current-oid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get OID of the current cursor location

## Description

```php
string cubrid_current_oid(resource $req_identifier)
```

The `cubrid_current_oid()` function is used to get the oid of the current cursor location from the query result. To use `cubrid_current_oid()`, the query executed must be a updatable query, and the `CUBRID_INCLUDE_OID` option must be included during the query execution.

## Parameters

- **`$req_identifier`** — Request identifier.

## Return Values

Oid of current cursor location, when process is successful, or `false` on failure.

## Examples

**`cubrid_current_oid()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb", "dba");

$req = cubrid_execute($conn, "SELECT * FROM code", CUBRID_INCLUDE_OID);
$oid = cubrid_current_oid($req);
$res = cubrid_get($conn, $oid);

print_r($res);

cubrid_disconnect($conn);
?>

   
```

The above example will output:

```text


Array
(
    [s_name] => X
    [f_name] => Mixed
)

   
```

## See Also

 `cubrid_execute()`
