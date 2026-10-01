---
id: "en-php-function-function-odbc-execute"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["sql_injection"],"cwe":["CWE-89"],"params":[2]}
name: "odbc_execute"
title: "Execute a prepared statement"
signature: "bool odbc_execute(Odbc\\Result $statement, array $params = [])"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-execute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute a prepared statement

## Description

```php
bool odbc_execute(Odbc\Result $statement, array $params = [])
```

Executes a statement prepared with `odbc_prepare()`.

## Parameters

- **`$statement`** — The ODBC result object from `odbc_prepare()`.
- **`$params`** — Parameters in `$params` will be substituted for placeholders in the prepared statement in order. Elements of this array will be converted to strings by calling this function. — Any parameters in `$params` which start and end with single quotes will be taken as the name of a file to read and send to the database server as the data for the appropriate placeholder. — If you wish to store a string which actually begins and ends with single quotes, you must add a space or other non-single-quote character to the beginning or end of the parameter, which will prevent the parameter from being taken as a file name. If this is not an option, then you must use another mechanism to store the string, such as executing the query directly with `odbc_exec()`).

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | This function returns an `Odbc\Result` instance now; previously, a `resource` was returned. |
| 8.0.0 | The unused `$flags` parameter was removed. |

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

`odbc_prepare()`
