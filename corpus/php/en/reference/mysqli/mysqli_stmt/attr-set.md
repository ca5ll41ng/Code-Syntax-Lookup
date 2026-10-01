---
id: "en-php-function-mysqli-stmt-attr-set"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::attr_set"
aliases: ["mysqli_stmt_attr_set"]
title: "Used to modify the behavior of a prepared statement"
signature: "public bool mysqli_stmt::attr_set(int $attribute, int $value)"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.attr-set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Used to modify the behavior of a prepared statement

## Description

Object-oriented style

```php
public bool mysqli_stmt::attr_set(int $attribute, int $value)
```

Procedural style

```php
bool mysqli_stmt_attr_set(mysqli_stmt $statement, int $attribute, int $value)
```

Used to modify the behavior of a prepared statement. This function may be called multiple times to set several attributes.

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.
- **`$attribute`** — The attribute that you want to set. It can have one of the following values: | Character | Description | | --- | --- | | MYSQLI_STMT_ATTR_UPDATE_MAX_LENGTH | Setting to `true` causes `mysqli_stmt_store_result()` to update the metadata `MYSQL_FIELD->max_length` value. | | MYSQLI_STMT_ATTR_CURSOR_TYPE | Type of cursor to open for statement when `mysqli_stmt_execute()` is invoked. `$value` can be `MYSQLI_CURSOR_TYPE_NO_CURSOR` (the default) or `MYSQLI_CURSOR_TYPE_READ_ONLY`. | | MYSQLI_STMT_ATTR_PREFETCH_ROWS | Number of rows to fetch from server at a time when using a cursor. `$value` can be in the range from 1 to the maximum value of unsigned long. The default is 1. Removed as of PHP 8.4.0. | — If you use the `MYSQLI_STMT_ATTR_CURSOR_TYPE` option with `MYSQLI_CURSOR_TYPE_READ_ONLY`, a cursor is opened for the statement when you invoke `mysqli_stmt_execute()`. If there is already an open cursor from a previous `mysqli_stmt_execute()` call, it closes the cursor before opening a new one. `mysqli_stmt_reset()` also closes any open cursor before preparing the statement for re-execution. `mysqli_stmt_free_result()` closes any open cursor. — If you open a cursor for a prepared statement, `mysqli_stmt_store_result()` is unnecessary.
- **`$value`** — The value to assign to the attribute.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## See Also

[Connector/MySQL mysql_stmt_attr_set()]()
