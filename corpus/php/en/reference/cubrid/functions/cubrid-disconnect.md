---
id: "en-php-function-function-cubrid-disconnect"
language: "php"
lang: "en"
category: "function"
name: "cubrid_disconnect"
title: "Close a database connection"
signature: "bool cubrid_disconnect([resource $conn_identifier = ...])"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-disconnect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close a database connection

## Description

```php
bool cubrid_disconnect([resource $conn_identifier = ...])
```

The `cubrid_disconnect()` function closes the connection handle and disconnects from server. If any request handle is not closed at this point, it will be closed. It is similar to the CUBRID MySQL compatible function `cubrid_close()`.

## Parameters

- **`$conn_identifier`** — Connection identifier.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`cubrid_disconnect()` example**

```php


<?php
$con = cubrid_connect ("localhost", 33000, "demodb");
if ($con) {
   echo "connected successfully";

   $req = cubrid_execute( $con, "create table person(id int,name char(10))");
   if ($req) {
      cubrid_close_request($req);
      cubrid_commit($con);
   } else {
      cubrid_rollback($con);
   }

   $req = cubrid_execute( $con, "insert into person values(1,'James')");
   if ($req) {
      cubrid_close_request($req);
      cubrid_commit($con);
   } else {
      cubrid_rollback($con);
   }
   cubrid_disconnect($con);
}
?>

   
```

## See Also

 `cubrid_close()` `cubrid_connect()` `cubrid_connect_with_url()`
