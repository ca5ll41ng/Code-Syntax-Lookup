---
id: "en-php-function-function-db2-pclose"
language: "php"
lang: "en"
category: "function"
name: "db2_pclose"
title: "Closes a persistent database connection"
signature: "bool db2_pclose(resource $connection)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-pclose.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Closes a persistent database connection

## Description

```php
bool db2_pclose(resource $connection)
```

This function closes a DB2 client connection created with `db2_pconnect()` and returns the corresponding resources to the database server.

> This function is only available on i5/OS in response to i5/OS system administration requests.

If you have a persistent DB2 client connection created with `db2_pconnect()`, you may use this function to close the connection. To avoid substantial connection performance penalties, this function should only be used in rare cases when the persistent connection has become unresponsive or the persistent connection will not be needed for a long period of time.

## Parameters

- **`$connection`** — Specifies an active DB2 client connection.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Closing a persistent connection**

 {{{ 

The following example demonstrates a successful attempt to close a connection to an IBM DB2 i5/OS database.

```php


<?php
$conn = db2_pconnect('', '', '');
$rc = db2_pclose($conn);
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

 `db2_close()` `db2_pconnect()`
