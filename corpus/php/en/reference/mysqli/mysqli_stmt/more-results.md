---
id: "en-php-function-mysqli-stmt-more-results"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::more_results"
aliases: ["mysqli_stmt_more_results"]
title: "Check if there are more query results from a multiple query"
signature: "public bool mysqli_stmt::more_results()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.more-results.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if there are more query results from a multiple query

## Description

Object-oriented style

```php
public bool mysqli_stmt::more_results()
```

Procedural style:

```php
bool mysqli_stmt_more_results(mysqli_stmt $statement)
```

Checks if there are more query results from a multiple query.

> Available only with mysqlnd.

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.

## Return Values

Returns `true` if more results exist, otherwise `false`.

## See Also

`mysqli_stmt::next_result()` `mysqli::multi_query()`
