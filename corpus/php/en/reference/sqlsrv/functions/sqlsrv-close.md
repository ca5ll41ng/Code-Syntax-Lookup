---
id: "en-php-function-function-sqlsrv-close"
language: "php"
lang: "en"
category: "function"
name: "sqlsrv_close"
title: "Closes an open connection and releases resources associated with the connection"
signature: "bool sqlsrv_close(resource $conn)"
module: "sqlsrv"
source_url: "https://www.php.net/manual/en/function.sqlsrv-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Closes an open connection and releases resources associated with the connection

## Description

```php
bool sqlsrv_close(resource $conn)
```

Closes an open connection and releases resources associated with the connection.

## Parameters

- **`$conn`** — The connection to be closed.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`sqlsrv_close()` example**

```php


<?php
$serverName = "serverName\sqlexpres";
$connOptions = array("UID"=>"username", "PWD"=>"password", "Database"=>"dbname");
$conn = sqlsrv_connect( $serverName, $connOptions );
if( $conn === false ) {
     die( print_r( sqlsrv_errors(), true));
}

//-------------------------------------
// Perform database operations here.
//-------------------------------------

// Close the connection.
sqlsrv_close( $conn );
?>

   
```

## See Also

 `sqlsrv_connect()`
