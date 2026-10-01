---
id: "en-php-function-function-sqlsrv-send-stream-data"
language: "php"
lang: "en"
category: "function"
name: "sqlsrv_send_stream_data"
title: "Sends data from parameter streams to the server"
signature: "bool sqlsrv_send_stream_data(resource $stmt)"
module: "sqlsrv"
source_url: "https://www.php.net/manual/en/function.sqlsrv-send-stream-data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sends data from parameter streams to the server

## Description

```php
bool sqlsrv_send_stream_data(resource $stmt)
```

Send data from parameter streams to the server. Up to 8 KB of data is sent with each call.

## Parameters

- **`$stmt`** — A statement resource returned by `sqlsrv_query()` or `sqlsrv_execute()`.

## Return Values

Returns `true` if there is more data to send and `false` if there is not.

## Examples

**`sqlsrv_send_stream_data()` example**

```php


<?php
$serverName = "serverName\sqlexpress";
$connectionInfo = array( "Database"=>"dbName", "UID"=>"username", "PWD"=>"password" );
$conn = sqlsrv_connect( $serverName, $connectionInfo);
if( $conn === false ) {
     die( print_r( sqlsrv_errors(), true));
}

$sql = "UPDATE Table_1 SET data = ( ?) WHERE id = 100";

// Open parameter data as a stream and put it in the $params array.
$data = fopen( "data://text/plain,[ Lengthy content here. ]", "r");
$params = array( &$data);

// Prepare the statement. Use the $options array to turn off the
// default behavior, which is to send all stream data at the time of query
// execution.
$options = array("SendStreamParamsAtExec"=>0);
$stmt = sqlsrv_prepare( $conn, $sql, $params, $options);

sqlsrv_execute( $stmt);

// Send up to 8K of parameter data to the server
// with each call to sqlsrv_send_stream_data.
$i = 1;
while( sqlsrv_send_stream_data( $stmt)) {
      $i++;
}
echo "$i calls were made.";
?>

   
```

## See Also

 `sqlsrv_prepare()` `sqlsrv_query()`
