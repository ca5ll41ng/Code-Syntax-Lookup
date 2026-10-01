---
id: "en-php-function-function-sqlsrv-rows-affected"
language: "php"
lang: "en"
category: "function"
name: "sqlsrv_rows_affected"
title: "Returns the number of rows modified by the last INSERT, UPDATE, or DELETE query executed"
signature: "int|false sqlsrv_rows_affected(resource $stmt)"
module: "sqlsrv"
source_url: "https://www.php.net/manual/en/function.sqlsrv-rows-affected.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of rows modified by the last INSERT, UPDATE, or DELETE query executed

## Description

```php
int|false sqlsrv_rows_affected(resource $stmt)
```

Returns the number of rows modified by the last INSERT, UPDATE, or DELETE query executed. For information about the number of rows returned by a SELECT query, see `sqlsrv_num_rows()`.

## Parameters

- **`$stmt`** — The executed statement resource for which the number of affected rows is returned.

## Return Values

Returns the number of rows affected by the last INSERT, UPDATE, or DELETE query. If no rows were affected, 0 is returned. If the number of affected rows cannot be determined, -1 is returned. If an error occurred, `false` is returned.

## Examples

**`sqlsrv_rows_affected()` example**

```php


<?php
$serverName = "serverName\sqlexpress";
$connectionInfo = array( "Database"=>"dbName", "UID"=>"username", "PWD"=>"password" );
$conn = sqlsrv_connect( $serverName, $connectionInfo);
if( $conn === false ) {
     die( print_r( sqlsrv_errors(), true));
}

$sql = "UPDATE Table_1 SET data = ? WHERE id = ?";

$params = array("updated data", 1);

$stmt = sqlsrv_query( $conn, $sql, $params);

$rows_affected = sqlsrv_rows_affected( $stmt);
if( $rows_affected === false) {
     die( print_r( sqlsrv_errors(), true));
} elseif( $rows_affected == -1) {
      echo "No information available.<br />";
} else {
      echo $rows_affected." rows were updated.<br />";
}
?>

   
```

## See Also

 `sqlsrv_num_rows()`
