---
id: "en-php-function-function-sqlsrv-begin-transaction"
language: "php"
lang: "en"
category: "function"
name: "sqlsrv_begin_transaction"
title: "Begins a database transaction"
signature: "bool sqlsrv_begin_transaction(resource $conn)"
module: "sqlsrv"
source_url: "https://www.php.net/manual/en/function.sqlsrv-begin-transaction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Begins a database transaction

## Description

```php
bool sqlsrv_begin_transaction(resource $conn)
```

The transaction begun by `sqlsrv_begin_transaction()` includes all statements that were executed after the call to `sqlsrv_begin_transaction()` and before calls to `sqlsrv_rollback()` or `sqlsrv_commit()`. Explicit transactions should be started and committed or rolled back using these functions instead of executing SQL statements that begin and commit/roll back transactions. For more information, see [SQLSRV Transactions]().

## Parameters

- **`$conn`** — The connection resource returned by a call to `sqlsrv_connect()`.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`sqlsrv_begin_transaction()` example**

The following example demonstrates how to use `sqlsrv_begin_transaction()` together with `sqlsrv_commit()` and `sqlsrv_rollback()`.

```php


<?php
$serverName = "serverName\sqlexpress";
$connectionInfo = array( "Database"=>"dbName", "UID"=>"userName", "PWD"=>"password");
$conn = sqlsrv_connect( $serverName, $connectionInfo);
if( $conn === false ) {
    die( print_r( sqlsrv_errors(), true ));
}

/* Begin the transaction. */
if ( sqlsrv_begin_transaction( $conn ) === false ) {
     die( print_r( sqlsrv_errors(), true ));
}

/* Initialize parameter values. */
$orderId = 1; $qty = 10; $productId = 100;

/* Set up and execute the first query. */
$sql1 = "INSERT INTO OrdersTable (ID, Quantity, ProductID)
          VALUES (?, ?, ?)";
$params1 = array( $orderId, $qty, $productId );
$stmt1 = sqlsrv_query( $conn, $sql1, $params1 );

/* Set up and execute the second query. */
$sql2 = "UPDATE InventoryTable
          SET Quantity = (Quantity - ?)
          WHERE ProductID = ?";
$params2 = array($qty, $productId);
$stmt2 = sqlsrv_query( $conn, $sql2, $params2 );

/* If both queries were successful, commit the transaction. */
/* Otherwise, rollback the transaction. */
if( $stmt1 && $stmt2 ) {
     sqlsrv_commit( $conn );
     echo "Transaction committed.<br />";
} else {
     sqlsrv_rollback( $conn );
     echo "Transaction rolled back.<br />";
}
?>

   
```

The above example will output something similar to:

## See Also

 `sqlsrv_commit()` `sqlsrv_rollback()`
