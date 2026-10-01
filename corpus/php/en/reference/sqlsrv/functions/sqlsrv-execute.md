---
id: "en-php-function-function-sqlsrv-execute"
language: "php"
lang: "en"
category: "function"
name: "sqlsrv_execute"
title: "Executes a statement prepared with `sqlsrv_prepare()`"
signature: "bool sqlsrv_execute(resource $stmt)"
module: "sqlsrv"
source_url: "https://www.php.net/manual/en/function.sqlsrv-execute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Executes a statement prepared with `sqlsrv_prepare()`

## Description

```php
bool sqlsrv_execute(resource $stmt)
```

Executes a statement prepared with `sqlsrv_prepare()`. This function is ideal for executing a prepared statement multiple times with different parameter values.

## Parameters

- **`$stmt`** — A statement resource returned by `sqlsrv_prepare()`.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`sqlsrv_execute()` example**

This example demonstrates how to prepare a statement with `sqlsrv_prepare()` and re-execute it multiple times (with different parameter values) using `sqlsrv_execute()`.

```php


<?php
$serverName = "serverName\sqlexpress";
$connectionInfo = array( "Database"=>"dbName", "UID"=>"username", "PWD"=>"password");
$conn = sqlsrv_connect( $serverName, $connectionInfo);
if( $conn === false) {
    die( print_r( sqlsrv_errors(), true));
}

$sql = "UPDATE Table_1
        SET OrderQty = ?
        WHERE SalesOrderID = ?";

// Initialize parameters and prepare the statement.
// Variables $qty and $id are bound to the statement, $stmt.
$qty = 0; $id = 0;
$stmt = sqlsrv_prepare( $conn, $sql, array( &$qty, &$id));
if( !$stmt ) {
    die( print_r( sqlsrv_errors(), true));
}

// Set up the SalesOrderDetailID and OrderQty information.
// This array maps the order ID to order quantity in key=>value pairs.
$orders = array( 1=>10, 2=>20, 3=>30);

// Execute the statement for each order.
foreach( $orders as $id => $qty) {
    // Because $id and $qty are bound to $stmt1, their updated
    // values are used with each execution of the statement.
    if( sqlsrv_execute( $stmt ) === false ) {
          die( print_r( sqlsrv_errors(), true));
    }
}
?>

   
```

## Notes

When you prepare a statement that uses variables as parameters, the variables are bound to the statement. This means that if you update the values of the variables, the next time you execute the statement it will run with updated parameter values. For statements that you plan to execute only once, use `sqlsrv_query()`.

## See Also

 `sqlsrv_prepare()` `sqlsrv_query()`
