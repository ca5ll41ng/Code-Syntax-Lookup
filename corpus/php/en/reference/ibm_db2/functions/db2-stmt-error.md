---
id: "en-php-function-function-db2-stmt-error"
language: "php"
lang: "en"
category: "function"
name: "db2_stmt_error"
title: "Returns a string containing the SQLSTATE returned by an SQL statement"
signature: "string db2_stmt_error(resource|null $stmt = null)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-stmt-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a string containing the SQLSTATE returned by an SQL statement

## Description

```php
string db2_stmt_error(resource|null $stmt = null)
```

Returns a string containing the SQLSTATE value returned by an SQL statement.

If you do not pass a statement resource as an argument to `db2_stmt_error()`, the driver returns the SQLSTATE value associated with the last attempt to return a statement resource, for example, from `db2_prepare()` or `db2_exec()`.

To learn what the SQLSTATE value means, you can issue the following command at a DB2 Command Line Processor prompt: db2 '? `$sqlstate-value`'. You can also call `db2_stmt_errormsg()` to retrieve an explicit error message and the associated SQLCODE value.

## Parameters

- **`$stmt`** — A valid statement resource.

## Return Values

Returns a string containing an SQLSTATE value.

## See Also

 `db2_conn_error()` `db2_conn_errormsg()` `db2_stmt_errormsg()`
