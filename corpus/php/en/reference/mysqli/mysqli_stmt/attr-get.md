---
id: "en-php-function-mysqli-stmt-attr-get"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::attr_get"
aliases: ["mysqli_stmt_attr_get"]
title: "Used to get the current value of a statement attribute"
signature: "public int mysqli_stmt::attr_get(int $attribute)"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.attr-get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Used to get the current value of a statement attribute

## Description

Object-oriented style

```php
public int mysqli_stmt::attr_get(int $attribute)
```

Procedural style

```php
int mysqli_stmt_attr_get(mysqli_stmt $statement, int $attribute)
```

Gets the current value of a statement attribute.

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.
- **`$attribute`** — The attribute that you want to get.

## Return Values

Returns the value of the attribute.
