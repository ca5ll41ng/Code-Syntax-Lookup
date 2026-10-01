---
id: "en-php-function-function-sqlsrv-server-info"
language: "php"
lang: "en"
category: "function"
name: "sqlsrv_server_info"
title: "Returns information about the server"
signature: "array sqlsrv_server_info(resource $conn)"
module: "sqlsrv"
source_url: "https://www.php.net/manual/en/function.sqlsrv-server-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns information about the server

## Description

```php
array sqlsrv_server_info(resource $conn)
```

Returns information about the server.

## Parameters

- **`$conn`** — The connection resource that connects the client and the server.

## Return Values

Returns an array as described in the following table:

| CurrentDatabase | The connected-to database. |
| --- | --- |
| SQLServerVersion | The SQL Server version. |
| SQLServerName | The name of the server. |

## Examples

**`sqlsrv_server_info()` example**

```php


<?php
$serverName = "serverName\sqlexpress";
$conn = sqlsrv_connect( $serverName);
if( $conn === false ) {
     die( print_r( sqlsrv_errors(), true));
}

$server_info = sqlsrv_server_info( $conn);
if( $server_info )
{
    foreach( $server_info as $key => $value) {
       echo $key.": ".$value."<br />";
    }
} else {
      die( print_r( sqlsrv_errors(), true));
}
?>

   
```

## See Also

 `sqlsrv_client_info()`
