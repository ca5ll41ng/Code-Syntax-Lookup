---
id: "en-php-function-function-sqlsrv-query"
language: "php"
lang: "en"
category: "function"
name: "sqlsrv_query"
title: "Prepares and executes a query"
signature: "mixed sqlsrv_query(resource $conn, string $sql, [array $params = ...], [array $options = ...])"
module: "sqlsrv"
source_url: "https://www.php.net/manual/en/function.sqlsrv-query.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Prepares and executes a query

## Description

```php
mixed sqlsrv_query(resource $conn, string $sql, [array $params = ...], [array $options = ...])
```

Prepares and executes a query.

## Parameters

- **`$conn`** — A connection resource returned by `sqlsrv_connect()`.
- **`$sql`** — The string that defines the query to be prepared and executed.
- **`$params`** — An array specifying parameter information when executing a parameterized query. Array elements can be any of the following: A literal value A PHP variable An array with this structure: array($value [, $direction [, $phpType [, $sqlType]]]) The following table describes the elements in the array structure above:
  | Element | Description |
  | --- | --- |
  | $value | A literal value, a PHP variable, or a PHP by-reference variable. |
  | $direction (optional) | One of the following SQLSRV constants used to indicate the parameter direction: SQLSRV_PARAM_IN, SQLSRV_PARAM_OUT, SQLSRV_PARAM_INOUT. The default value is SQLSRV_PARAM_IN. |
  | $phpType (optional) | A SQLSRV_PHPTYPE_* constant that specifies PHP data type of the returned value. |
  | $sqlType (optional) | A SQLSRV_SQLTYPE_* constant that specifies the SQL Server data type of the input value. |


- **`$options`** — An array specifying query property options. The supported keys are described in the following table:
  | Key | Values | Description |
  | --- | --- | --- |
  | QueryTimeout | A positive integer value. | Sets the query timeout in seconds. By default, the driver will wait indefinitely for results. |
  | SendStreamParamsAtExec | `true` or `false` (the default is `true`) | Configures the driver to send all stream data at execution (`true`), or to send stream data in chunks (`false`). By default, the value is set to `true`. For more information, see `sqlsrv_send_stream_data()`. |
  | Scrollable | SQLSRV_CURSOR_FORWARD, SQLSRV_CURSOR_STATIC, SQLSRV_CURSOR_DYNAMIC, or SQLSRV_CURSOR_KEYSET | See [Specifying a Cursor Type and Selecting Rows]() in the Microsoft SQLSRV documentation. |



## Return Values

Returns a statement resource on success and `false` if an error occurred.

## Examples

**`sqlsrv_query()` example**

```php


<?php
$serverName = "serverName\sqlexpress";
$connectionInfo = array( "Database"=>"dbName", "UID"=>"username", "PWD"=>"password" );
$conn = sqlsrv_connect( $serverName, $connectionInfo);
if( $conn === false ) {
     die( print_r( sqlsrv_errors(), true));
}

$sql = "INSERT INTO Table_1 (id, data) VALUES (?, ?)";
$params = array(1, "some data");

$stmt = sqlsrv_query( $conn, $sql, $params);
if( $stmt === false ) {
     die( print_r( sqlsrv_errors(), true));
}
?>

   
```

## Notes

For statements that you plan to execute only once, use `sqlsrv_query()`. If you intend to re-execute a statement with different parameter values, use the combination of `sqlsrv_prepare()` and `sqlsrv_execute()`.

## See Also

 `sqlsrv_prepare()` `sqlsrv_execute()`
