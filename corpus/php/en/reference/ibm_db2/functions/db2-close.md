---
id: "en-php-function-function-db2-close"
language: "php"
lang: "en"
category: "function"
name: "db2_close"
title: "Closes a database connection"
signature: "bool db2_close(resource $connection)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Closes a database connection

## Description

```php
bool db2_close(resource $connection)
```

This function closes a DB2 client connection created with `db2_connect()` and returns the corresponding resources to the database server.

If you attempt to close a persistent DB2 client connection created with `db2_pconnect()`, the close request is ignored and the persistent DB2 client connection remains available for the next caller.

## Parameters

- **`$connection`** — Specifies an active DB2 client connection.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Closing a connection**

The following example demonstrates a successful attempt to close a connection to an IBM DB2, Cloudscape, or Apache Derby database.

```php


<?php
$conn = db2_connect('SAMPLE', 'db2inst1', 'ibmdb2');
$rc = db2_close($conn);
if ($rc) {
    echo "Connection was successfully closed.";
}
?>

   
```

The above example will output:

```text


Connection was successfully closed.

   
```

## See Also

 `db2_connect()` `db2_pclose()` `db2_pconnect()`
