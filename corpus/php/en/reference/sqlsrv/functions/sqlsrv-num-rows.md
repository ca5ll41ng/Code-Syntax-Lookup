---
id: "en-php-function-function-sqlsrv-num-rows"
language: "php"
lang: "en"
category: "function"
name: "sqlsrv_num_rows"
title: "Retrieves the number of rows in a result set"
signature: "mixed sqlsrv_num_rows(resource $stmt)"
module: "sqlsrv"
source_url: "https://www.php.net/manual/en/function.sqlsrv-num-rows.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves the number of rows in a result set

## Description

```php
mixed sqlsrv_num_rows(resource $stmt)
```

Retrieves the number of rows in a result set. This function requires that the statement resource be created with a static or keyset cursor. For more information, see `sqlsrv_query()`, `sqlsrv_prepare()`, or [Specifying a Cursor Type and Selecting Rows]() in the Microsoft SQLSRV documentation.

## Parameters

- **`$stmt`** — The statement for which the row count is returned. The statement resource must be created with a static or keyset cursor. For more information, see `sqlsrv_query()`, `sqlsrv_prepare()`, or [Specifying a Cursor Type and Selecting Rows]() in the Microsoft SQLSRV documentation.

## Return Values

Returns the number of rows retrieved on success and `false` if an error occurred. If a forward cursor (the default) or dynamic cursor is used, `false` is returned.

## Examples

**`sqlsrv_num_rows()` example**

```php


<?php
$server = "serverName\sqlexpress";
$connectionInfo = array( "Database"=>"dbName", "UID"=>"username", "PWD"=>"password" );
$conn = sqlsrv_connect( $server, $connectionInfo );

$sql = "SELECT * FROM Table_1";
$params = array();
$options =  array( "Scrollable" => SQLSRV_CURSOR_KEYSET );
$stmt = sqlsrv_query( $conn, $sql , $params, $options );

$row_count = sqlsrv_num_rows( $stmt );

if ($row_count === false)
   echo "Error in retrieving row count.";
else
   echo $row_count;
?>

   
```

## See Also

 `sqlsrv_has_rows()` `sqlsrv_rows_affected()`
