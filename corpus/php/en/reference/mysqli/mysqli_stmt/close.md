---
id: "en-php-function-mysqli-stmt-close"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::close"
aliases: ["mysqli_stmt_close"]
title: "Closes a prepared statement"
signature: "public true mysqli_stmt::close()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Closes a prepared statement

## Description

Object-oriented style

```php
public true mysqli_stmt::close()
```

Procedural style

```php
true mysqli_stmt_close(mysqli_stmt $statement)
```

Closes a prepared statement. `mysqli_stmt_close()` also deallocates the statement handle. If the current statement has pending or unread results, this function cancels them so that the next query can be executed.

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function now always returns `true`. Previously it returned `false` on failure. |

## See Also

`mysqli_prepare()`
