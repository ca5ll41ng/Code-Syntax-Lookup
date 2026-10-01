---
id: "en-php-function-function-odbc-prepare"
language: "php"
lang: "en"
category: "function"
name: "odbc_prepare"
title: "Prepares a statement for execution"
signature: "Odbc\\Result|false odbc_prepare(Odbc\\Connection $odbc, string $query)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-prepare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Prepares a statement for execution

## Description

```php
Odbc\Result|false odbc_prepare(Odbc\Connection $odbc, string $query)
```

Prepares a statement for execution. The ODBC result object can be used later to execute the statement with `odbc_execute()`.

Some databases (such as IBM DB2, MS SQL Server, and Oracle) support stored procedures that accept parameters of type IN, INOUT, and OUT as defined by the ODBC specification. However, the Unified ODBC driver currently only supports parameters of type IN to stored procedures.

## Parameters

- **`$odbc`** — The ODBC connection object, see `odbc_connect()` for details.
- **`$query`** — The query string statement being prepared.

## Return Values

Returns an ODBC result object if the SQL command was prepared successfully. Returns `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$odbc` expects an `Odbc\Connection` instance now; previously, a `resource` was expected. |
| 8.4.0 | This function returns an `Odbc\Result` instance now; previously, a `resource` was returned. |

## Examples

**`odbc_execute()` and `odbc_prepare()` example**

In the following code, `$success` will only be `true` if all three parameters to myproc are IN parameters:

```php


<?php
$a = 1;
$b = 2;
$c = 3;
$stmt    = odbc_prepare($conn, 'CALL myproc(?,?,?)');
$success = odbc_execute($stmt, array($a, $b, $c));
?>

    
```

If you need to call a stored procedure using INOUT or OUT parameters, the recommended workaround is to use a native extension for your database (for example, oci8 for Oracle).

## See Also

`odbc_execute()`
