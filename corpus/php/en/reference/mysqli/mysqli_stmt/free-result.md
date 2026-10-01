---
id: "en-php-function-mysqli-stmt-free-result"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::free_result"
aliases: ["mysqli_stmt_free_result"]
title: "Frees stored result memory for the given statement handle"
signature: "public void mysqli_stmt::free_result()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.free-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Frees stored result memory for the given statement handle

## Description

Object-oriented style

```php
public void mysqli_stmt::free_result()
```

Procedural style

```php
void mysqli_stmt_free_result(mysqli_stmt $statement)
```

Frees the result memory associated with the statement, which was allocated by `mysqli_stmt_store_result()`.

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.

## Return Values

No value is returned.

## See Also

`mysqli_stmt_store_result()`
