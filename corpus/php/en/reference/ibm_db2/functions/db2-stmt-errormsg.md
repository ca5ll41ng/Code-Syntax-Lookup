---
id: "en-php-function-function-db2-stmt-errormsg"
language: "php"
lang: "en"
category: "function"
name: "db2_stmt_errormsg"
title: "Returns a string containing the last SQL statement error message"
signature: "string db2_stmt_errormsg(resource|null $stmt = null)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-stmt-errormsg.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a string containing the last SQL statement error message

## Description

```php
string db2_stmt_errormsg(resource|null $stmt = null)
```

Returns a string containing the last SQL statement error message.

If you do not pass a statement resource as an argument to `db2_stmt_errormsg()`, the driver returns the error message associated with the last attempt to return a statement resource, for example, from `db2_prepare()` or `db2_exec()`.

## Parameters

- **`$stmt`** — A valid statement resource.

## Return Values

Returns a string containing the error message and SQLCODE value for the last error that occurred issuing an SQL statement.

## See Also

 `db2_conn_error()` `db2_conn_errormsg()` `db2_stmt_error()`
