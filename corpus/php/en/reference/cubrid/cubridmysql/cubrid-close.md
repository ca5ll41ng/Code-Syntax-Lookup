---
id: "en-php-function-function-cubrid-close"
language: "php"
lang: "en"
category: "function"
name: "cubrid_close"
title: "Close CUBRID connection"
signature: "bool cubrid_close([resource $conn_identifier = ...])"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close CUBRID connection

## Description

```php
bool cubrid_close([resource $conn_identifier = ...])
```

The `cubrid_close()` function ends the transaction currently in process, closes the connection handle and disconnects from server. If there is any request handles not closed yet at this point, they will be closed. It is similar to the CUBRID function `cubrid_disconnect()`.

## Parameters

- **`$conn_identifier`** — The CUBRID connection identifier. If the connection identifier is not specified, the last connection opened by `cubrid_connect()` is assumed.

## Return Values

`true`, when process is successful.

`false`, when process is unsuccessful.

## Examples

**`cubrid_close()` example**

```php


<?php
$con = cubrid_connect ("localhost", 33000, "demodb");
if ($con) {
   echo "connected successfully";
   $req = cubrid_execute ( $con, "insert into person values(1,'James')");
   if ($req) {
      cubrid_close_request ($req);
      cubrid_commit ($con);
   } else {
      cubrid_rollback ($con);
   }
   cubrid_close ($con);
}
?>

   
```

## See Also

 `cubrid_disconnect()` `cubrid_connect()` `cubrid_connect_with_url()`
