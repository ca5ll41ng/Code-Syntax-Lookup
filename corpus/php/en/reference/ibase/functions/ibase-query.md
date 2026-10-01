---
id: "en-php-function-function-ibase-query"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["sql_injection"],"cwe":["CWE-89"],"params":[2]}
name: "ibase_query"
title: "Execute a query on an InterBase database"
signature: "resource ibase_query([resource $link_identifier = ...], string $query, [int $bind_args = ...])"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-query.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute a query on an InterBase database

## Description

```php
resource ibase_query([resource $link_identifier = ...], string $query, [int $bind_args = ...])
```

Performs a query on an InterBase database.

## Parameters

- **`$link_identifier`** — An InterBase link identifier. If omitted, the last opened link is assumed.
- **`$query`** — An InterBase query.
- **`$bind_args`**

## Return Values

If the query raises an error, returns `false`. If it is successful and there is a (possibly empty) result set (such as with a SELECT query), returns a result identifier. If the query was successful and there were no results, returns `true`.

> In PHP 5.0.0 and up, this function will return the number of rows affected by the query for INSERT, UPDATE and DELETE statements. In order to retain backward compatibility, it will return `true` for these statements if the query succeeded without affecting any rows.

## Errors/Exceptions

If you get some error like "arithmetic exception, numeric overflow, or string truncation. Cannot transliterate character between character sets" (this occurs when you try use some character with accents) when using this and after `ibase_query()` you must set the character set (i.e. ISO8859_1 or your current character set).

## Examples

**`ibase_query()` example**

```php


<?php

$host = 'localhost:/path/to/your.gdb';

$dbh = ibase_connect($host, $username, $password);
$stmt = 'SELECT * FROM tblname';

$sth = ibase_query($dbh, $stmt) or die(ibase_errmsg());

?>

   
```

## See Also

 `ibase_errmsg()` `ibase_fetch_row()` `ibase_fetch_object()` `ibase_free_result()`
