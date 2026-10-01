---
id: "en-php-function-mysqli-stmt-next-result"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::next_result"
aliases: ["mysqli_stmt_next_result"]
title: "Reads the next result from a multiple query"
signature: "public bool mysqli_stmt::next_result()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.next-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reads the next result from a multiple query

## Description

Object-oriented style

```php
public bool mysqli_stmt::next_result()
```

Procedural style:

```php
bool mysqli_stmt_next_result(mysqli_stmt $statement)
```

Reads the next result from a multiple query.

> Prior to PHP 8.1.0, available only with mysqlnd.

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | Now also available when linking against libmysqlclient. |

## See Also

`mysqli_stmt::more_results()` `mysqli::multi_query()`
