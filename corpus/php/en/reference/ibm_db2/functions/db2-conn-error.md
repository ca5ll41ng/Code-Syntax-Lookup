---
id: "en-php-function-function-db2-conn-error"
language: "php"
lang: "en"
category: "function"
name: "db2_conn_error"
title: "Returns a string containing the SQLSTATE returned by the last connection attempt"
signature: "string db2_conn_error(resource|null $connection = null)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-conn-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a string containing the SQLSTATE returned by the last connection attempt

## Description

```php
string db2_conn_error(resource|null $connection = null)
```

`db2_conn_error()` returns an SQLSTATE value representing the reason the last attempt to connect to a database failed. As `db2_connect()` returns `false` in the event of a failed connection attempt, you do not pass any parameters to `db2_conn_error()` to retrieve the SQLSTATE value.

If, however, the connection was successful but becomes invalid over time, you can pass the `$connection` parameter to retrieve the SQLSTATE value for a specific connection.

To learn what the SQLSTATE value means, you can issue the following command at a DB2 Command Line Processor prompt: db2 '? `$sqlstate-value`'. You can also call `db2_conn_errormsg()` to retrieve an explicit error message and the associated SQLCODE value.

## Parameters

- **`$connection`** — A connection resource associated with a connection that initially succeeded, but which over time became invalid.

## Return Values

Returns the SQLSTATE value resulting from a failed connection attempt. Returns an empty string if there is no error associated with the last connection attempt.

## Examples

**Retrieving an SQLSTATE value for a failed connection attempt**

The following example demonstrates how to return an SQLSTATE value after deliberately passing invalid parameters to `db2_connect()`.

```php


<?php
$conn = db2_connect('badname', 'baduser', 'badpassword');
if (!$conn) {
    print "SQLSTATE value: " . db2_conn_error();
}
?>

   
```

The above example will output:

```text


SQLSTATE value: 08001

   
```

## See Also

 `db2_conn_errormsg()` `db2_connect()` `db2_stmt_error()` `db2_stmt_errormsg()`
