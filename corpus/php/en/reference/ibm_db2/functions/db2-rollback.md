---
id: "en-php-function-function-db2-rollback"
language: "php"
lang: "en"
category: "function"
name: "db2_rollback"
title: "Rolls back a transaction"
signature: "bool db2_rollback(resource $connection)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-rollback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rolls back a transaction

## Description

```php
bool db2_rollback(resource $connection)
```

Rolls back an in-progress transaction on the specified connection resource and begins a new transaction. PHP applications normally default to AUTOCOMMIT mode, so `db2_rollback()` normally has no effect unless AUTOCOMMIT has been turned off for the connection resource.

## Parameters

- **`$connection`** — A valid database connection resource variable as returned from `db2_connect()` or `db2_pconnect()`.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Rolling back a DELETE statement**

In the following example, we count the number of rows in a table, turn off AUTOCOMMIT mode on a database connection, delete all of the rows in the table and return the count of `0` to prove that the rows have been removed. We then issue `db2_rollback()` and return the updated count of rows in the table to show that the number is the same as before we issued the DELETE statement. The return to the original state of the table demonstrates that the roll back of the transaction succeeded.

```php


<?php
$conn = db2_connect($database, $user, $password);

if ($conn) {
    $stmt = db2_exec($conn, "SELECT count(*) FROM animals");
    $res = db2_fetch_array( $stmt );
    echo $res[0] . "\n";

    // Turn AUTOCOMMIT off
    db2_autocommit($conn, DB2_AUTOCOMMIT_OFF);

    // Delete all rows from ANIMALS
    db2_exec($conn, "DELETE FROM animals");

    $stmt = db2_exec($conn, "SELECT count(*) FROM animals");
    $res = db2_fetch_array( $stmt );
    echo $res[0] . "\n";

    // Roll back the DELETE statement
    db2_rollback( $conn );

    $stmt = db2_exec( $conn, "SELECT count(*) FROM animals" );
    $res = db2_fetch_array( $stmt );
    echo $res[0] . "\n";
    db2_close($conn);
}
?>

   
```

The above example will output:

```text


7
0
7

   
```

## See Also

 `db2_autocommit()` `db2_commit()`
