---
id: "en-php-function-function-sqlsrv-client-info"
language: "php"
lang: "en"
category: "function"
name: "sqlsrv_client_info"
title: "Returns information about the client and specified connection"
signature: "array sqlsrv_client_info(resource $conn)"
module: "sqlsrv"
source_url: "https://www.php.net/manual/en/function.sqlsrv-client-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns information about the client and specified connection

## Description

```php
array sqlsrv_client_info(resource $conn)
```

Returns information about the client and specified connection

## Parameters

- **`$conn`** — The connection about which information is returned.

## Return Values

Returns an associative array with keys described in the table below. Returns `false` otherwise.

| Key | Description |
| --- | --- |
| DriverDllName | SQLNCLI10.DLL |
| DriverODBCVer | ODBC version (xx.yy) |
| DriverVer | SQL Server Native Client DLL version (10.5.xxx) |
| ExtensionVer | php_sqlsrv.dll version (2.0.xxx.x) |

## Examples

**`sqlsrv_client_info()` example**

```php


<?php
$serverName = "serverName\sqlexpress";
$connOptions = array("UID"=>"username", "PWD"=>"password");
$conn = sqlsrv_connect( $serverName, $connOptions );

if( $conn === false ) {
    die( print_r( sqlsrv_errors(), true));
}

if( $client_info = sqlsrv_client_info( $conn)) {
    foreach( $client_info as $key => $value) {
        echo $key.": ".$value."<br />";
    }
} else {
    echo "Error in retrieving client info.<br />";
}
?>

   
```

## See Also

 `sqlsrv_server_info()`
