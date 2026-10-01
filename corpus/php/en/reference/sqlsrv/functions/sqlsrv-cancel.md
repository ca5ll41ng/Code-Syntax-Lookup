---
id: "en-php-function-function-sqlsrv-cancel"
language: "php"
lang: "en"
category: "function"
name: "sqlsrv_cancel"
title: "Cancels a statement"
signature: "bool sqlsrv_cancel(resource $stmt)"
module: "sqlsrv"
source_url: "https://www.php.net/manual/en/function.sqlsrv-cancel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Cancels a statement

## Description

```php
bool sqlsrv_cancel(resource $stmt)
```

Cancels a statement. Any results associated with the statement that have not been consumed are deleted. After `sqlsrv_cancel()` has been called, the specified statement can be re-executed if it was created with `sqlsrv_prepare()`. Calling `sqlsrv_cancel()` is not necessary if all the results associated with the statement have been consumed.

## Parameters

- **`$stmt`** — The statement resource to be cancelled.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`sqlsrv_cancel()` example**

```php


<?php
$serverName = "serverName\sqlexpress";
$connectionInfo = array( "Database"=>"dbName", "UID"=>"username", "PWD"=>"password");
$conn = sqlsrv_connect( $serverName, $connectionInfo);
if( $conn === false ) {
     die( print_r( sqlsrv_errors(), true));
}

$sql = "SELECT Sales FROM Table_1";

$stmt = sqlsrv_prepare( $conn, $sql);

if( $stmt === false ) {
     die( print_r( sqlsrv_errors(), true));
}

if( sqlsrv_execute( $stmt ) === false) {
     die( print_r( sqlsrv_errors(), true));
}

$salesTotal = 0;
$count = 0;

while( ($row = sqlsrv_fetch_array( $stmt)) && $salesTotal <=100000)
{
     $qty = $row[0];
     $price = $row[1];
     $salesTotal += ( $price * $qty);
     $count++;
}

echo "$count sales accounted for the first $$salesTotal in revenue.<br />";

// Cancel the pending results. The statement can be reused.
sqlsrv_cancel( $stmt);
?>

   
```

## Notes

The main difference between `sqlsrv_cancel()` and `sqlsrv_free_stmt()` is that a statement resource cancelled with `sqlsrv_cancel()` can be re-executed if it was created with `sqlsrv_prepare()`. A statement resource cancelled with `sqlsrv_free_statement()` cannot be re-executed.

## See Also

 `sqlsrv_free_stmt()` `sqlsrv_prepare()`
