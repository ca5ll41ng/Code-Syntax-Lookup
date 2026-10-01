---
id: "en-php-function-function-db2-conn-errormsg"
language: "php"
lang: "en"
category: "function"
name: "db2_conn_errormsg"
title: "Returns the last connection error message and SQLCODE value"
signature: "string db2_conn_errormsg(resource|null $connection = null)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-conn-errormsg.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the last connection error message and SQLCODE value

## Description

```php
string db2_conn_errormsg(resource|null $connection = null)
```

`db2_conn_errormsg()` returns an error message and SQLCODE value representing the reason the last database connection attempt failed. As `db2_connect()` returns `false` in the event of a failed connection attempt, do not pass any parameters to `db2_conn_errormsg()` to retrieve the associated error message and SQLCODE value.

If, however, the connection was successful but becomes invalid over time, you can pass the `$connection` parameter to retrieve the associated error message and SQLCODE value for a specific connection.

## Parameters

- **`$connection`** — A connection resource associated with a connection that initially succeeded, but which over time became invalid.

## Return Values

Returns a string containing the error message and SQLCODE value resulting from a failed connection attempt. If there is no error associated with the last connection attempt, `db2_conn_errormsg()` returns an empty string.

## Examples

**Retrieving the error message returned by a failed connection attempt**

The following example demonstrates how to return an error message and SQLCODE value after deliberately passing invalid parameters to `db2_connect()`.

```php


<?php
$conn = db2_connect('badname', 'baduser', 'badpassword');
if (!$conn) {
    print db2_conn_errormsg();
}
?>

   
```

The above example will output:

```text


[IBM][CLI Driver] SQL1013N  The database alias name
or database name "BADNAME" could not be found.  SQLSTATE=42705
 SQLCODE=-1013

   
```

## See Also

 `db2_conn_error()` `db2_connect()` `db2_stmt_error()` `db2_stmt_errormsg()`
