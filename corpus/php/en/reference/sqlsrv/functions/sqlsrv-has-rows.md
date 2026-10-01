---
id: "en-php-function-function-sqlsrv-has-rows"
language: "php"
lang: "en"
category: "function"
name: "sqlsrv_has_rows"
title: "Indicates whether the specified statement has rows"
signature: "bool sqlsrv_has_rows(resource $stmt)"
module: "sqlsrv"
source_url: "https://www.php.net/manual/en/function.sqlsrv-has-rows.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Indicates whether the specified statement has rows

## Description

```php
bool sqlsrv_has_rows(resource $stmt)
```

Indicates whether the specified statement has rows.

## Parameters

- **`$stmt`** — A statement resource returned by `sqlsrv_query()` or `sqlsrv_execute()`.

## Return Values

Returns `true` if the specified statement has rows and `false` if the statement does not have rows or if an error occurred.

## Examples

**`sqlsrv_has_rows()` example**

```php


<?php
$server = "serverName\sqlexpress";
$connectionInfo = array( "Database"=>"dbName", "UID"=>"username", "PWD"=>"password" );
$conn = sqlsrv_connect( $server, $connectionInfo );

$stmt = sqlsrv_query( $conn, "SELECT * FROM Table_1");

if ($stmt) {
   $rows = sqlsrv_has_rows( $stmt );
   if ($rows === true)
      echo "There are rows. <br />";
   else
      echo "There are no rows. <br />";
}
?>

   
```

## See Also

 `sqlsrv_num_rows()` `sqlsrv_query()`
