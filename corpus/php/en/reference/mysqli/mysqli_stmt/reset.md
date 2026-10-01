---
id: "en-php-function-mysqli-stmt-reset"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::reset"
aliases: ["mysqli_stmt_reset"]
title: "Resets a prepared statement"
signature: "public bool mysqli_stmt::reset()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.reset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Resets a prepared statement

## Description

Object-oriented style

```php
public bool mysqli_stmt::reset()
```

Procedural style

```php
bool mysqli_stmt_reset(mysqli_stmt $statement)
```

Resets a prepared statement on client and server to the state after prepare.

It resets the statement on the server, data sent using `mysqli_stmt_send_long_data()`, unbuffered result sets and current errors. It does not clear bindings or stored result sets. Stored result sets will be cleared when executing the prepared statement (or closing it).

To prepare a statement with another query use function `mysqli_stmt_prepare()`.

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`mysqli_prepare()`
