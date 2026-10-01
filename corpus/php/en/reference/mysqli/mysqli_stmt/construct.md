---
id: "en-php-function-mysqli-stmt-construct"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::__construct"
title: "Constructs a new `mysqli_stmt` object"
signature: "public mysqli_stmt::__construct(mysqli $mysql, string|null $query = null)"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a new `mysqli_stmt` object

## Description

```php
public mysqli_stmt::__construct(mysqli $mysql, string|null $query = null)
```

This method constructs a new `mysqli_stmt` object.

## Parameters

- **`$link`** — A valid `mysqli` object.
- **`$query`** — The query, as a string. If this parameter is `null`, then the constructor behaves identically to `mysqli_stmt_init()`, otherwise it behaves as per `mysqli_prepare()`.

## Errors/Exceptions

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$query` is now nullable. |

## See Also

`mysqli_prepare()` `mysqli_stmt_init()`
